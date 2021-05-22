import React from 'react';

import { ErrorBoundary } from './components/ErrorBoundary';
import { SearchController } from './components/SearchController';

export default function App() {
  return (
    <ErrorBoundary>
      <SearchController />
    </ErrorBoundary>
  );
}
