import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';

Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [
        new Integrations.BrowserTracing(),
    ],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    // tracesSampleRate: 1.0,
});

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <QueryClientProvider client={queryClient}>
              <Sentry.ErrorBoundary fallback={"An error has occurred"}>
                <App />
              </Sentry.ErrorBoundary>
              {/*<ReactQueryDevtools initialIsOpen={false} />*/}
          </QueryClientProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
