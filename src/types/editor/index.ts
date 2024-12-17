/**
 * Represents the base properties that all components in the editor will share
 * @interface BaseComponentProps
 */
export interface BaseComponentProps {
  /** Unique identifier for the component */
  id: string;
  /** Type of the component (ex: 'text', 'image', 'button') */
  type: string;
  /** Position coordinates of the component */
  position: {
    x: number;
    y: number;
  };
  /** Dimensions of the component */
  dimensions: {
    width: number;
    height: number;
  };
  /** Styling properties for the component */
  styles: Record<string, string | number>;
}

/**
 * Defines the structure of the editor's state
 * @interface EditorState
 */
export interface EditorState {
  /** List of components currently in the editor */
  components: BaseComponentProps[];
  /** ID of the currently selected component */
  selectedComponentId: string | null;
  /** Current zoom level of the editor */
  zoom: number;
  /** Whether the grid is visible */
  showGrid: boolean;
}
