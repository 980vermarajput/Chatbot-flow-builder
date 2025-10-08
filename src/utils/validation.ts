import type { Node, Edge } from "reactflow";
import type { ValidationResult } from "../types/flow.types";
import { ERROR_MESSAGES } from "./constants";

export const validateFlow = (
  nodes: Node[],
  edges: Edge[]
): ValidationResult => {
  // If only one node or no nodes, it's valid
  if (nodes.length <= 1) {
    return { isValid: true };
  }

  // Check if any node has empty target (no incoming edges)
  const nodesWithoutTarget = nodes.filter((node) => {
    const hasIncomingEdge = edges.some((edge) => edge.target === node.id);
    return !hasIncomingEdge;
  });

  // If more than one node without incoming edges, flow is invalid
  if (nodesWithoutTarget.length > 1) {
    return {
      isValid: false,
      message: ERROR_MESSAGES.DISCONNECTED_NODES,
    };
  }

  return { isValid: true };
};
