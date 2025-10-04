import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PerformanceProvider } from "@/contexts/PerformanceContext";
import ErrorBoundary from "@/components/ErrorBoundary";

// Dynamically import Layout
const Layout = dynamic(() => import("@/components/Layout"), {
  ssr: true,
});

/**
 * Main App Component
 *
 * Root component that wraps the entire application with providers
 * and layout components. Includes error boundary and performance monitoring.
 *
 * @author Lalith
 * @version 2.0.0
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PerformanceProvider>
    </ErrorBoundary>
  );
}
