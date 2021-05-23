import React from 'react';

import { ErrorBoundary } from './components/ErrorBoundary';
import { FavoriteProvider } from './components/FavoritePokemonStorageProvider';
import { SearchController } from './components/SearchController';

export default function App() {
  return (
    <ErrorBoundary>
      <FavoriteProvider>
        <SearchController />
      </FavoriteProvider>
    </ErrorBoundary>
  );
}
