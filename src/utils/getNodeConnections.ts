import type { NodeData, NodeType } from "../types";

export const getNodeConnections = (
  nodeType: NodeType,
): Pick<NodeData, "inputs" | "outputs"> => {
  switch (nodeType) {
    case "DataSource": {
      return {
        inputs: {},
        outputs: { target: { type: "Dataset", label: "Dataset" } },
      };
    }
    case "Transform": {
      return {
        inputs: { source: { type: "Dataset", label: "Dataset" } },
        outputs: { target: { type: "Dataset", label: "Dataset" } },
      };
    }
    case "Model": {
      return {
        inputs: { source: { type: "Dataset", label: "Dataset" } },
        outputs: { target: { type: "Model", label: "Model" } },
      };
    }
  }
};
