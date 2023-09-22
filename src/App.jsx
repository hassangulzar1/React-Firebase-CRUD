import "./App.css";
import Routes from "./Pages/Routes";
import { AuthContextProvider } from "./context/authContext";
function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
