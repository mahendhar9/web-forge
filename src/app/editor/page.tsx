"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { EditorCanvas } from "@/components/editor/EditorCanvas";
import { DraggableComponent } from "@/components/editor/DraggableComponent";

export default function EditorPage() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200">
          {/* Component palette */}
        </div>

        {/* Main Editor */}
        <div className="flex-1 h-full">
          <EditorCanvas>
            <DraggableComponent
              id="example-1"
              type="text"
              position={{ x: 100, y: 100 }}
              dimensions={{ width: 200, height: 50 }}
              styles={{ backgroundColor: "#fff", padding: "8px" }}
            >
              <p>Drag me!</p>
            </DraggableComponent>
          </EditorCanvas>
        </div>

        {/* Properties Panel */}
        <div className="w-64 bg-white border-l border-gray-200">
          {/* Component properties */}
        </div>
      </div>
    </Provider>
  );
}
