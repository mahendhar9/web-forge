import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { BaseComponentProps } from "@/types/editor";

interface DraggableComponentProps extends BaseComponentProps {
  children?: React.ReactNode;
}

/**
 * A wrapper component that makes its children draggable
 */
export const DraggableComponent: React.FC<DraggableComponentProps> = ({
  id,
  children,
  position,
  dimensions,
  styles,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style: React.CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    position: "absolute",
    left: position.x,
    top: position.y,
    width: dimensions.width,
    height: dimensions.height,
    ...styles,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative touch-none select-none"
    >
      {children}
    </div>
  );
};
