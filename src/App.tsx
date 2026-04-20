import { useState, useCallback } from "react";

import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type Edge,
  type Node,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type IsValidConnection,
} from "@xyflow/react";
import type { NodeType, NodeData } from "./types";
import { CustomNode } from "./components/CustomNode";
import { initialNodes } from "./data/intitialNodes";
import { initialEdges } from "./data/initialEdges";
import { CustomControls } from "./components/CustomControls";
import { validateNodeConnection } from "./utils/validateNodeConnection";

const nodeTypes = {
  customNode: CustomNode,
};

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange: OnNodesChange<Node<NodeData>> = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect: OnConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  const handleAddNode = (node: Node<NodeData>) => {
    setNodes((nodesSnapshot) => [...nodesSnapshot, node]);
  };

  const isValidConnection: IsValidConnection<Edge> = (connection) => {
    const { source, target } = connection;
    const sourceNode = nodes.find(({ id }) => id === source);
    const targetNode = nodes.find(({ id }) => id === target);

    const sourceType = sourceNode?.data?.outputs?.target?.type;
    const targetType = targetNode?.data?.inputs?.source?.type;

    if (sourceType && targetType) {
      return validateNodeConnection({
        source: sourceType,
        target: targetType,
      });
    }

    return true;
  };

  const addButtons: { label: string; type: NodeType }[] = [
    { label: "Add DataSource Node", type: "DataSource" },
    { label: "Add Transform Node", type: "Transform" },
    { label: "Add Model Node", type: "Model" },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        isValidConnection={isValidConnection}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        deleteKeyCode={["Backspace", "Delete"]}
        fitView
      >
        <CustomControls
          orientation="horizontal"
          addButtons={addButtons}
          handleAddNode={handleAddNode}
        />
      </ReactFlow>
    </div>
  );
}
