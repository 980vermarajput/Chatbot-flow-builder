import { NODE_TYPES } from "../utils/constants";

export interface NodeConfig {
  type: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
}

// Array of available node types for the NodesPanel
export const AVAILABLE_NODES: NodeConfig[] = [
  {
    type: NODE_TYPES.TEXT,
    label: "Message",
    description: "Send a text message",
    icon: (
      <svg
        className="w-10 h-10 text-primary"
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
    ),
  },
  // ============================================
  // TO ADD NEW NODE TYPES:
  // ============================================
  // 1. Add the new type to NODE_TYPES in utils/constants.ts
  // 2. Create the node component in components/nodes/
  // 3. Register it in App.tsx nodeTypes
  // 4. Add configuration here:
  //
  // {
  //   type: NODE_TYPES.IMAGE,
  //   label: "Image",
  //   description: "Send an image",
  //   icon: (
  //     <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24">
  //       {/* Your SVG path */}
  //     </svg>
  //   ),
  // },
];
