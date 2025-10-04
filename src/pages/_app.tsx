import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/Layout";
import ErrorBoundary from "@/components/ErrorBoundary";

/**
 * Main App Component
 * 
 * Root component that wraps the entire application with providers
 * and layout components. Includes error boundary for graceful error handling.
 * 
 * @author Lalith
 * @version 1.0.0
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
