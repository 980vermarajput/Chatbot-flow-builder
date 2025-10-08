import React, { useState, useEffect } from "react";
import type { Node } from "reactflow";
import type { TextNodeData } from "../../types/flow.types";

interface SettingsPanelProps {
  selectedNode: Node<TextNodeData> | null;
  onUpdateNode: (nodeId: string, data: TextNodeData) => void;
  onBack: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  selectedNode,
  onUpdateNode,
  onBack,
}) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (selectedNode) {
      setText(selectedNode.data.text || "");
    }
  }, [selectedNode]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    if (selectedNode) {
      onUpdateNode(selectedNode.id, { text: newText });
    }
  };

  if (!selectedNode) {
    return null;
  }

  return (
    <div className="w-80 bg-white border-l-2 border-gray-200 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b-2 border-gray-200 bg-gray-50">
        <button
          onClick={onBack}
          className="p-1.5 hover:bg-gray-200 rounded-md transition-colors"
          aria-label="Back to nodes panel"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-sm font-semibold text-gray-800">Message</h3>
      </div>

      {/* Content */}
      <div className="p-5">
        <label className="block text-xs font-semibold text-gray-600 mb-2.5 uppercase tracking-wide">
          Text
        </label>
        <textarea
          value={text}
          onChange={handleTextChange}
          className="w-full px-4 py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none transition-all duration-200"
          rows={4}
          placeholder="Enter your message here"
        />
      </div>
    </div>
  );
};

export default SettingsPanel;
