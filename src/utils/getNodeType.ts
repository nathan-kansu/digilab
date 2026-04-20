import type { NodeType } from "../types";

export const getNodeType = (nodeType: NodeType) => {
  switch (nodeType) {
    case "DataSource": {
      return "DataSource";
    }
    case "Transform": {
      return "Transform";
    }
    case "Model": {
      return "Model";
    }
  }
};
