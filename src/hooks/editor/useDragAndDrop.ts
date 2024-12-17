/**
 * Custom hook for handling drag and drop operations in the editor
 */
import { DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { useDispatch } from "react-redux";
import { setSelectedComponent } from "@/store/editor/editorSlice";

export const useDragAndDrop = () => {
  const dispatch = useDispatch();

  /**
   * Handles the start of a drag operation
   */
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    dispatch(setSelectedComponent(active.id as string));
  };

  /**
   * Handles the end of a drag operation
   */
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      console.log("Dropped component:", active.id, "over:", over.id);
    }
  };

  return {
    handleDragStart,
    handleDragEnd,
  };
};
