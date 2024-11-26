import { QueryClient, QueryClientProvider } from "react-query";
import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import { ReactQueryDevtools } from "react-query/devtools";
import { Main } from "./components/Main";
import { Container } from "react-bootstrap";

import { ContextProvider } from "./store/context";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
      <ContextProvider>
        <Header />
        <main>
          <Container fluid="xl">
            <Main />
          </Container>
        </main>
        <Footer />
      </ContextProvider> 
    </QueryClientProvider>
  );
}

export default App;
