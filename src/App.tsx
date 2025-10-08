import { useState, useCallback, useMemo } from "react";
import { ReactFlowProvider } from "reactflow";
import type { Node, Edge } from "reactflow";
import FlowBuilder from "./components/FlowBuilder/FlowBuilder";
import NodesPanel from "./components/NodesPanel/NodesPanel";
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";
import Header from "./components/Header/Header";
import Notification from "./components/Notification/Notification";
import TextNode from "./components/nodes/TextNode";
import type { TextNodeData, NotificationState } from "./types/flow.types";
import { validateFlow } from "./utils/validation";
import { NODE_TYPES } from "./utils/constants";

function App() {
  const [nodes, setNodes] = useState<Node<TextNodeData>[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedNode, setSelectedNode] = useState<Node<TextNodeData> | null>(
    null
  );
  const [notification, setNotification] = useState<NotificationState | null>(
    null
  );

  const nodeTypes = useMemo(() => ({ [NODE_TYPES.TEXT]: TextNode }), []);

  const handleNodeClick = useCallback((node: Node<TextNodeData>) => {
    setSelectedNode(node);
  }, []);

  const handleUpdateNode = useCallback((nodeId: string, data: TextNodeData) => {
    setNodes((nds) =>
      nds.map((node) => (node.id === nodeId ? { ...node, data } : node))
    );
  }, []);

  const handleBack = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const handleSave = useCallback(() => {
    const validation = validateFlow(nodes, edges);

    if (validation.isValid) {
      setNotification({
        type: "success",
        message: "Flow saved successfully!",
      });
      console.log("Flow saved:", { nodes, edges });
    } else {
      setNotification({
        type: "error",
        message: validation.message || "Validation failed",
      });
    }
  }, [nodes, edges]);

  const handleCloseNotification = useCallback(() => {
    setNotification(null);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header onSave={handleSave} />

      <div className="flex flex-1 overflow-hidden">
        <ReactFlowProvider>
          <FlowBuilder
            nodes={nodes}
            edges={edges}
            onNodesChange={setNodes}
            onEdgesChange={setEdges}
            onNodeClick={handleNodeClick}
            nodeTypes={nodeTypes}
          />
        </ReactFlowProvider>

        {selectedNode ? (
          <SettingsPanel
            selectedNode={selectedNode}
            onUpdateNode={handleUpdateNode}
            onBack={handleBack}
          />
        ) : (
          <NodesPanel />
        )}
      </div>

      <Notification
        notification={notification}
        onClose={handleCloseNotification}
      />
    </div>
  );
}

export default App;
