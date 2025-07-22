import { useState } from 'react';
import { SLoginForm, FormContainer, InputGroup, SubmitButton, LinkText, ForgotPasswordLink } from './styles';

type LoginFormProps = {
  onSubmit: (credentials: { email: string; password: string }) => void;
  isLoading?: boolean; 
};

export function LoginForm({ onSubmit, isLoading }: LoginFormProps) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <SLoginForm>
      <FormContainer>
        <h1>Bem Vindo de Volta</h1>
        
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </InputGroup>

          <InputGroup>
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <ForgotPasswordLink>
            <a href="/forgotpassword">Esqueci minha senha</a>
          </ForgotPasswordLink>

          <SubmitButton type="submit" disabled={isLoading}> 
            {isLoading ? 'Entrando...' : 'Entrar'}
          </SubmitButton>
        </form>

        <LinkText>
          Ainda não tem uma conta? <a href="/signin">CADASTRE-SE</a>
        </LinkText>
      </FormContainer>
    </SLoginForm>
  );
}

