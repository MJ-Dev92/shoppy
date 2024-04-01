import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { AuthContextProvider } from "./components/context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <SearchHeader />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
