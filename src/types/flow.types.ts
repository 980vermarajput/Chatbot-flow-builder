import type { Node } from "reactflow";

export interface TextNodeData {
  text: string;
}

export type FlowNode = Node<TextNodeData>;

export interface NotificationState {
  type: "error" | "success";
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}
