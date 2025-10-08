import { memo } from "react";
import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";
import type { TextNodeData } from "../../types/flow.types";

const TextNode = ({ data, selected }: NodeProps<TextNodeData>) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg min-w-[280px] max-w-[400px] relative transition-all duration-200 ${
        selected ? "ring-2 ring-blue-400 shadow-xl" : ""
      }`}
    >
      {/* Target Handle - Left side */}
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-blue-500 !w-3 !h-3 !border-2 !border-white !-left-[6px] !shadow-md"
      />

      {/* Header with teal background */}
      <div
        className={`px-5 py-3.5 rounded-t-xl flex items-center justify-between transition-colors ${
          selected ? "bg-teal-200" : "bg-teal-100"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <svg
            className="w-4 h-4 text-teal-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="text-sm font-semibold text-gray-800">
            Send Message
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-3 text-xs text-gray-700 leading-relaxed bg-white rounded-b-xl border-t border-gray-100">
        {data.text || "Enter your message here"}
      </div>

      {/* Source Handle - Right side */}
      <Handle
        type="source"
        position={Position.Right}
        className="!bg-teal-500 !w-3 !h-3 !border-2 !border-white !-right-[6px] !shadow-md"
      />
    </div>
  );
};

export default memo(TextNode);
