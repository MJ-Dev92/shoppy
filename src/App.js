import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { AuthContextProvider } from "./components/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SearchHeader />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
