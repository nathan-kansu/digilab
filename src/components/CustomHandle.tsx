import { Handle, useNodeConnections } from "@xyflow/react";

interface CustomHandleProps extends React.ComponentProps<typeof Handle> {
  connectionCount?: number;
}

const CustomHandle = ({
  connectionCount = 1,
  children,
  ...props
}: CustomHandleProps) => {
  const connections = useNodeConnections({
    handleType: props.type,
  });

  const validateConnection = () => {
    if (props.type === "target") {
      return connections.length < connectionCount;
    }
    return true;
  };

  const isConnectable = validateConnection();

  return (
    <Handle {...props} isConnectable={isConnectable}>
      <div className="absolute whitespace-nowrap -left-3 top-1">{children}</div>
    </Handle>
  );
};

export default CustomHandle;
