import "./App.css";
import { EventPage } from "./pages/eventPage/EventPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EventPage />
    </QueryClientProvider>
  );
}

export default App;
