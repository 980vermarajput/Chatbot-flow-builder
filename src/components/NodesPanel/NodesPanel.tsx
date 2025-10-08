import React from "react";
import { AVAILABLE_NODES } from "../../config/nodeConfig";

const NodesPanel: React.FC = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="w-80 bg-white border-l-2 border-gray-200 p-6 shadow-lg">
      <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
        Nodes
      </h3>

      <div className="space-y-4">
        {AVAILABLE_NODES.map((nodeConfig) => (
          <div
            key={nodeConfig.type}
            className="flex flex-col items-center gap-3 p-5 bg-white border-2 border-primary rounded-xl cursor-grab hover:shadow-lg hover:border-blue-500 transition-all duration-200 active:cursor-grabbing active:scale-95"
            draggable
            onDragStart={(e) => onDragStart(e, nodeConfig.type)}
          >
            {nodeConfig.icon}
            <div className="text-sm font-semibold text-primary">
              {nodeConfig.label}
            </div>
            {nodeConfig.description && (
              <div className="text-xs text-gray-500 text-center">
                {nodeConfig.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodesPanel;
