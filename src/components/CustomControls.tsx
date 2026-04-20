import { useReactFlow, Controls, type Node } from "@xyflow/react";
import { Button } from "./Button";
import type { NodeData, NodeType } from "../types";
import { getNodeConnections } from "../utils/getNodeConnections";
import { NODE_HEIGHT, NODE_WIDTH } from "./CustomNode";
import { generateNodeId } from "../utils/generateNodeId";

interface CustomControlsProps extends React.ComponentProps<typeof Controls> {
  handleAddNode: (node: Node<NodeData>) => void;
  addButtons?: { label: string; type: NodeType }[];
}

export function CustomControls({
  handleAddNode,
  addButtons,
}: CustomControlsProps) {
  const { screenToFlowPosition } = useReactFlow();
  const offsetX = NODE_WIDTH / 2;
  const offsetY = NODE_HEIGHT / 2;

  const handleClick = (type: NodeType) => {
    const clientX = window.innerWidth / 2 - offsetX;
    const clientY = window.innerHeight / 2 - offsetY;

    const newNode: Node<NodeData> = {
      id: generateNodeId(),
      position: screenToFlowPosition({
        x: clientX,
        y: clientY,
      }),
      data: {
        ...getNodeConnections(type),
        nodeType: type,
        label: type,
      },
      type: "customNode",
    };

    handleAddNode(newNode);
  };
  return (
    <Controls orientation="horizontal">
      {addButtons?.map((button) => (
        <Button key={button.type} onClick={() => handleClick(button.type)}>
          {button.label}
        </Button>
      ))}
    </Controls>
  );
}
