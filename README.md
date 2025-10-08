# Chatbot Flow Builder

A visual flow builder for creating chatbot conversation flows, built with React, TypeScript, Vite, and React Flow.

## 🚀 Quick Start

### Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## ✨ Features

### ✅ Implemented Features

1. **Text Message Nodes**

   - Drag and drop text nodes from the Nodes Panel
   - Each node displays a message that can be edited
   - Visual feedback when selected

2. **Nodes Panel**

   - Sidebar panel showing available node types
   - Drag & drop interface to add nodes to canvas
   - Currently supports Text Message nodes

3. **Settings Panel**

   - Appears when a node is selected
   - Edit node text content with a textarea
   - Back button to return to Nodes Panel

4. **Edge Connections**

   - Connect nodes to create conversation flow
   - **Source Handle Constraint**: Only ONE outgoing edge per source
   - **Target Handle**: Multiple incoming edges allowed
   - Visual flow direction

5. **Flow Validation & Save**

   - Save button in header
   - Validates flow before saving
   - Shows error if nodes are disconnected
   - Success notification on valid save

6. **Interactive Canvas**
   - Pan and zoom controls
   - Dotted background grid
   - Drag nodes to reposition
   - Delete nodes and edges

## 🎨 UI/UX

- **Modern Design**: Clean interface with Tailwind CSS
- **Color Scheme**:
  - Primary: Indigo (#4F46E5)
  - Success: Green (#10B981)
  - Error: Red (#EF4444)
- **Responsive**: Works on different screen sizes
- **Visual Feedback**: Hover states, selections, animations

## 🔧 Technical Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Flow** - Flow diagram library
- **Tailwind CSS v4** - Styling

## 🔌 Extensibility

This project is built with extensibility in mind. Adding new node types is straightforward:

📖 **[Complete Guide: Adding New Node Types](./ADDING_NEW_NODES.md)**

Quick summary:

1. Add node type to `src/utils/constants.ts`
2. Create node component in `src/components/nodes/`
3. Register in `src/App.tsx`
4. Add configuration to `src/config/nodeConfig.tsx`

The NodesPanel automatically displays all configured nodes!

## 📁 Project Structure

```
src/
├── components/
│   ├── FlowBuilder/      # Main canvas component
│   ├── NodesPanel/        # Available nodes sidebar
│   ├── SettingsPanel/     # Node editor sidebar
│   ├── Header/            # Top bar with save button
│   ├── Notification/      # Toast notifications
│   └── nodes/
│       └── TextNode/      # Custom text node
├── types/                 # TypeScript definitions
├── utils/                 # Helper functions
│   ├── constants.ts
│   └── validation.ts
├── App.tsx               # Main app
└── main.tsx             # Entry point
```

## 🎯 How to Use

1. **Add Nodes**: Drag the "Message" node from the right panel onto the canvas
2. **Edit Node**: Click on a node to open the Settings Panel and edit its text
3. **Connect Nodes**: Drag from the bottom handle of one node to the top handle of another
4. **Save Flow**: Click "Save Changes" button
   - ✅ Valid if all nodes are connected (except one start node)
   - ❌ Error if multiple disconnected nodes exist

## ⚠️ Validation Rules

- **Single Node**: Always valid ✅
- **Multiple Nodes**: All nodes must be connected
  - Each node needs incoming edge (except one start node)
  - Error shown if >1 node has no incoming connections

## 🔄 Connection Constraints

- **Source Handle**: Can only have ONE outgoing edge
  - Adding a new edge replaces the existing one
- **Target Handle**: Can have MULTIPLE incoming edges

## 🎨 Customization

The color theme is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: '#4F46E5',    // Indigo
  secondary: '#10B981',  // Green
  error: '#EF4444',      // Red
}
```

## 📝 Implementation Details

- **State Management**: React hooks (useState, useCallback)
- **Type Safety**: Full TypeScript coverage
- **Performance**: Memoized components and callbacks
- **Validation**: Centralized validation logic in utils

## 🐛 Known Limitations

- Only supports Text Message nodes (by design)
- No persistence (flow data only in memory)
- No undo/redo functionality

## 📚 Documentation

- [Requirements](./REQUIREMENTS.md) - Full project requirements
- [Implementation Plan](./IMPLEMENTATION_PLAN.md) - Development roadmap

---

Built with ❤️ using React + TypeScript + Vite
