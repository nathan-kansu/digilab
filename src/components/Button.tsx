import { ControlButton, type ControlButtonProps } from "@xyflow/react";

export function Button(props: ControlButtonProps) {
    return (
        <ControlButton
            {...props}
            className="whitespace-nowrap w-auto font-bold text-xs"
        />
    );
}
