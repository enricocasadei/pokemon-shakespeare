import React from 'react';

import { Controller } from './components/Controller';
import { ErrorBoundary } from './components/ErrorBoundary';
import { FavoriteProvider } from './components/FavoriteProvider';
import { Container, Section } from './components/UI/Layout';

export default function App() {
  return (
    <ErrorBoundary>
      <FavoriteProvider>
        <Container>
          <Section>
            <Controller />
          </Section>
        </Container>
      </FavoriteProvider>
    </ErrorBoundary>
  );
}


