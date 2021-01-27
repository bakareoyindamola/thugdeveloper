import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <QueryClientProvider client={queryClient}>
              <App />
              {/*<ReactQueryDevtools initialIsOpen={false} />*/}
          </QueryClientProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
