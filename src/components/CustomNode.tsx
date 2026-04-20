import { type NodeData } from "../types";
import { Position } from "@xyflow/react";
import CustomHandle from "./CustomHandle";

export const NODE_WIDTH = 208;
export const NODE_HEIGHT = 100;

export function CustomNode({ data }: { data: NodeData }) {
  const { label, nodeType, inputs, outputs } = data;

  const getBackgroundColor = () => {
    switch (nodeType) {
      case "DataSource":
        return "bg-red-100";
      case "Transform":
        return "bg-yellow-100";
      case "Model":
        return "bg-green-100";
      default:
        return "bg-gray-100";
    }
  };

  const backgroundColor = getBackgroundColor();

  return (
    <div className={`p-4 ${backgroundColor} shadow min-w-30`}>
      <div className="font-bold text-sm text-center">{label}</div>
      {inputs?.source && (
        <CustomHandle
          className="text-[8px]"
          type="target"
          position={Position.Left}
          connectionCount={1}
        >
          {inputs.source.label}
        </CustomHandle>
      )}
      {outputs?.target && (
        <CustomHandle
          className="text-[8px] whitespace-nowrap"
          type="source"
          position={Position.Right}
        >
          {outputs.target.label}
        </CustomHandle>
      )}
    </div>
  );
}
