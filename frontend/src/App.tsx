import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { useNavigate } from "react-router-dom";
import { setupInterceptors } from "./services/http/interceptors";
import { AuthProvider } from "./contexts/AuthContext";
import { BookProvider } from "./contexts/BookContext";
import { ReviewProvider } from "./contexts/ReviewContext";

function App() {
  const navigate = useNavigate();
  setupInterceptors(() => {
    navigate("/login");
  });
  return (
    <AuthProvider>
      <GlobalStyle />
      <AuthProvider>
        <BookProvider>
          <ReviewProvider>
            <AppRoutes />
          </ReviewProvider>
        </BookProvider>
      </AuthProvider>
    </AuthProvider>
  );
}

export default App;
