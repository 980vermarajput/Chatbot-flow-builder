export const NODE_TYPES = {
  TEXT: "textNode",
} as const;

export const INITIAL_NODE_TEXT = "Enter your message here";

export const ERROR_MESSAGES = {
  DISCONNECTED_NODES:
    "Cannot save Flow. There are nodes that are not connected.",
} as const;
