import React from 'react';

import { Controller } from './components/Controller';
import { ErrorBoundary } from './components/ErrorBoundary';
import { FavoriteProvider } from './components/FavoriteProvider';

export default function App() {
  return (
    <ErrorBoundary>
      <FavoriteProvider>
        <Controller />
      </FavoriteProvider>
    </ErrorBoundary>
  );
}
