import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SigninForm } from '../../components/SigninForm';
import { SSigninPage, LeftSection, RightSection, IllustrationContainer } from './styles';
import { useAuth } from '../../hooks/useAuth';
import ImagemSignIn from '../../assets/ImagemSignIn.png'; 

type SigninData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function Signin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (data: SigninData) => {
    setLoading(true);
    setError(null);

    try {
      await register(data.name, data.email, data.password);
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setError(error instanceof Error ? error.message : 'Erro ao cadastrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SSigninPage>
      <LeftSection>
        <SigninForm onSubmit={handleSubmit} isLoading={loading} />
        {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
      </LeftSection>
      
      <RightSection>
        <IllustrationContainer>
          <img src={ImagemSignIn} alt="Ilustração de cadastro" />
        </IllustrationContainer>
      </RightSection>
    </SSigninPage>
  );
}

