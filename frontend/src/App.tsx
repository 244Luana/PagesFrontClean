import { AppRoutes } from "./routes";
import { AuthProvider } from "./contexts/AuthContext"; 
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
