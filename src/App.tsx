import React from "react";

import { Controller } from "./components/Controller";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { FavoritesProvider } from "./components/FavoritesProvider";

/**
 * entry point for the app itself
 * it manages the error boundary and the provider
 */
export default function App() {
  return (
    <ErrorBoundary>
      <FavoritesProvider>
        <Controller />
      </FavoritesProvider>
    </ErrorBoundary>
  );
}
