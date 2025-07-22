import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LoginForm } from '../../components/LoginForm';
import { useState } from 'react';
import { SLoginPage, LeftSection, RightSection, IllustrationContainer, ErrorMessage } from './styles'; 
import ImagemLogin from "../../assets/ImagemLogin.png";

export function Login() {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (credentials: { email: string; password: string }) => {
    setError(null);
    try {
      await login(credentials.email, credentials.password);
      navigate('/perfil');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Email ou senha incorretos.'); 
      }
    }
  };

  return (
    <SLoginPage>  
      <LeftSection>
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} /> 
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LeftSection>
      
      <RightSection>
        <IllustrationContainer>
          <img src={ImagemLogin} alt="Ilustração Login" />
        </IllustrationContainer>
      </RightSection>
    </SLoginPage>
  );
}

