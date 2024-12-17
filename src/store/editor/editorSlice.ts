import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditorState, BaseComponentProps } from "@/types/editor";

/**
 * Initial state for the editor
 */
const initialState: EditorState = {
  components: [],
  selectedComponentId: null,
  zoom: 1,
  showGrid: true,
};

/**
 * Redux slice for managing editor state
 */
export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    /**
     * Adds a new component to the editor
     * @param {EditorState} state - Current editor state
     * @param {PayloadAction<BaseComponentProps>} action - Component to add
     */
    addComponent: (state, action: PayloadAction<BaseComponentProps>) => {
      state.components.push(action.payload);
    },

    /**
     * Updates the selected component ID
     * @param {EditorState} state - Current editor state
     * @param {PayloadAction<string | null>} action - ID of selected component
     */
    setSelectedComponent: (state, action: PayloadAction<string | null>) => {
      state.selectedComponentId = action.payload;
    },

    /**
     * Updates the zoom level
     * @param {EditorState} state - Current editor state
     * @param {PayloadAction<number>} action - New zoom level
     */
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },

    /**
     * Toggles the grid visibility
     * @param {EditorState} state - Current editor state
     */
    toggleGrid: (state) => {
      state.showGrid = !state.showGrid;
    },
  },
});

export const { addComponent, setSelectedComponent, setZoom, toggleGrid } =
  editorSlice.actions;
export default editorSlice.reducer;
