import { useCallback, useRef } from "react";
import ReactFlow, {
  Controls,
  Background,
  BackgroundVariant,
  addEdge,
} from "reactflow";
import type { Connection, Edge, ReactFlowInstance, Node } from "reactflow";
import "reactflow/dist/style.css";
import type { TextNodeData } from "../../types/flow.types";
import { NODE_TYPES, INITIAL_NODE_TEXT } from "../../utils/constants";

interface FlowBuilderProps {
  nodes: Node<TextNodeData>[];
  edges: Edge[];
  onNodesChange: (nodes: Node<TextNodeData>[]) => void;
  onEdgesChange: (edges: Edge[]) => void;
  onNodeClick: (node: Node<TextNodeData>) => void;
  nodeTypes: any;
}

const FlowBuilder: React.FC<FlowBuilderProps> = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onNodeClick,
  nodeTypes,
}) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const reactFlowInstance = useRef<ReactFlowInstance | null>(null);

  const onConnect = useCallback(
    (params: Connection | Edge) => {
      // Check if source already has an outgoing edge
      const sourceEdges = edges.filter((edge) => edge.source === params.source);

      // Style the edge
      const styledEdge = {
        ...params,
        type: "smoothstep",
        animated: true,
        style: { stroke: "#14b8a6", strokeWidth: 2 },
      };

      if (sourceEdges.length > 0) {
        // Remove existing edge from this source before adding new one
        const newEdges = edges.filter((edge) => edge.source !== params.source);
        onEdgesChange(addEdge(styledEdge, newEdges));
      } else {
        onEdgesChange(addEdge(styledEdge, edges));
      }
    },
    [edges, onEdgesChange]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.current?.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      if (position) {
        const newNode: Node<TextNodeData> = {
          id: `node_${Date.now()}`,
          type: NODE_TYPES.TEXT,
          position,
          data: { text: INITIAL_NODE_TEXT },
        };

        onNodesChange([...nodes, newNode]);
      }
    },
    [reactFlowInstance, nodes, onNodesChange]
  );

  const handleNodesChange = useCallback(
    (changes: any) => {
      // Apply the changes using reactflow's applyNodeChanges
      import("reactflow").then(({ applyNodeChanges }) => {
        const updatedNodes = applyNodeChanges(changes, nodes);
        onNodesChange(updatedNodes);
      });
    },
    [nodes, onNodesChange]
  );

  const handleEdgesChange = useCallback(
    (changes: any) => {
      // Apply the changes using reactflow's applyEdgeChanges
      import("reactflow").then(({ applyEdgeChanges }) => {
        const updatedEdges = applyEdgeChanges(changes, edges);
        onEdgesChange(updatedEdges);
      });
    },
    [edges, onEdgesChange]
  );

  return (
    <div ref={reactFlowWrapper} className="flex-1 h-full bg-gray-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onConnect={onConnect}
        onNodeClick={(_, node) => onNodeClick(node as Node<TextNodeData>)}
        onInit={(instance) => {
          reactFlowInstance.current = instance;
        }}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={{
          type: "smoothstep",
          animated: true,
          style: { stroke: "#14b8a6", strokeWidth: 2 },
        }}
        fitView
      >
        <Controls />
        <Background
          variant={BackgroundVariant.Dots}
          gap={16}
          size={1}
          color="#cbd5e1"
        />
      </ReactFlow>
    </div>
  );
};

export default FlowBuilder;
