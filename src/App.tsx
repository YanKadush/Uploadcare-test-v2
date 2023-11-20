import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Page } from './pages';

import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: false,
      staleTime: 20000
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <Page />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;