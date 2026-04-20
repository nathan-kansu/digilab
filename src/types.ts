export type NodeType = "DataSource" | "Transform" | "Model";

export type NodeData = {
  label: string;
  inputs: Record<string, HandleParam>;
  outputs: Record<string, HandleParam>;
  nodeType: NodeType;
};

export type HandleParam = {
  type: DataType;
  label: string;
};

export type DataType = "Dataset" | "Model";

export type Edge = {
  id: string;
  source: string;
  target: string;
  sourceHandle: string;
  targetHandle: string;
};
