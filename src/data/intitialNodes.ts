import { type Node } from "@xyflow/react";
import type { NodeData } from "../types";
import { getNodeConnections } from "../utils/getNodeConnections";
import { generateNodeId } from "../utils/generateNodeId";

export const initialNodes: Node<NodeData>[] = [
  {
    id: generateNodeId(),
    position: { x: 0, y: 0 },
    data: {
      ...getNodeConnections("DataSource"),
      nodeType: "DataSource",
      label: "DataSource",
    },
    type: "customNode",
  },
  {
    id: generateNodeId(),
    position: { x: 0, y: 100 },
    data: {
      ...getNodeConnections("Transform"),
      nodeType: "Transform",
      label: "Transform",
    },
    type: "customNode",
  },
  {
    id: generateNodeId(),
    position: { x: 0, y: 200 },
    data: {
      ...getNodeConnections("Model"),
      nodeType: "Model",
      label: "Model",
    },
    type: "customNode",
  },
];
