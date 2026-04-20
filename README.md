# DigiLab

A workflow visualization application built with React and TypeScript.

## Installation

To install dependencies, run:

```bash
npm install
```

## Running Locally

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To build the application, run:

```bash
npm run build
```

## Code Structure Approach

The project follows a **separation of concerns** pattern:

- **`/components`** — Reusable React components wrapping ReactFlow primitives
- **`/data`** — Hardcoded initial nodes and edges, structured for easy migration to API endpoints
- **`/utils`** — Testable business logic isolated from JSX
- **`types.ts`** — Centralized TypeScript type definitions

This separation enables unit testing of utilities without dealing with React components or DOM.

## Type Validation

Type safety is enforced through a **DataType system** with three categories: `Dataset` and `Model`.

**Validation Rules:**

- Nodes define input/output types: DataSource outputs `Dataset`, Transform inputs/outputs `Dataset`, Model inputs `Dataset` and outputs `Model`
- `validateNodeConnection()` enforces type compatibility:
  - `Dataset → Dataset` connections are allowed
  - `Model → Model` connections are allowed
  - All other combinations are rejected
- `CustomHandle` component enforces connection limit per node (unlimited outputs allowed)
- Connection validation happens in real-time via the `isValidConnection` callback in the ReactFlow component

## Design Decisions

| Decision                        | Rationale                                                                                                                                    |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pure utility functions**      | Utilities like `getNodeConnections()` declaratively map node types to their I/O configurations, making business logic testable and reusable. |
| **Custom ReactFlow components** | Wrapping base ReactFlow components (Node, Handle, Controls) enables consistent styling, validation, and business logic in one place.         |
| **Type-driven validation**      | Connection rules are based on the `DataType` system rather than string matching, making validation rules explicit and maintainable.          |

## Potential Improvements

- **Unit testing** — Add Jest tests for utility functions (`validateNodeConnection`, `getNodeConnections`, etc.)
- **E2E testing** — Add Cypress or Playwright tests for user workflows (drag nodes, create connections, etc.)
- **Component library** — Extract reusable components to Storybook for design consistency
- **Persistence** — Add local storage or backend API to save/load workflows
- **Error handling** — Add user feedback for invalid operations (e.g., toast notifications)
- **Accessibility** — Enhance keyboard navigation and screen reader support
