import React from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useDragAndDrop } from "@/hooks/editor/useDragAndDrop";

interface EditorCanvasProps {
  children?: React.ReactNode;
}

/**
 * The main canvas component where users can drag and drop elements
 */
export const EditorCanvas: React.FC<EditorCanvasProps> = ({ children }) => {
  // Initialize drag sensors
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // Minimum distance for drag activation
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250, // Delay before touch activation
      tolerance: 5, // Touch movement tolerance
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  // Get editor state from Redux
  const { zoom, showGrid } = useSelector((state: RootState) => state.editor);
  const { handleDragStart, handleDragEnd } = useDragAndDrop();

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-50">
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div
          className={`relative w-full h-full transform-gpu ${
            showGrid ? "bg-grid" : ""
          }`}
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "0 0",
          }}
        >
          {children}
        </div>
      </DndContext>
    </div>
  );
};
