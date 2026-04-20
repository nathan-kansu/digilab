import type { DataType } from "../types";

export function validateNodeConnection(connection: {
  source: DataType;
  target: DataType;
}) {
  const { source, target } = connection;

  if (source === "Dataset" && target === "Dataset") {
    return true;
  }

  if (source === "Model" && target === "Model") {
    return true;
  }

  return false;
}
