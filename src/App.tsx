import React from 'react';

import { Controller } from './components/Controller';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <Controller />
    </ErrorBoundary>
  );
}
