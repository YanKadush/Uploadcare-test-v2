import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Component } from './Component';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );
}

export default App;