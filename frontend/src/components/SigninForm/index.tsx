import { useState } from 'react';
import { SSigninForm, FormContainer, InputGroup, SubmitButton, LinkText } from './styles';
import { Link } from 'react-router-dom';

type SigninData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type SigninFormProps = {
  onSubmit: (data: SigninData) => void;
  isLoading?: boolean;
};

export function SigninForm({ onSubmit, isLoading = false }: SigninFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('As senhas não coincidem!');
      return;
    }

    const data: SigninData = {
      name,
      email,
      password,
      confirmPassword,
    };

    onSubmit(data); 
  };

  return (
    <SSigninForm>
      <FormContainer>
        <h1>Bem Vindo!</h1>
        
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label>Nome Completo:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputGroup>

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

          <InputGroup>
            <label>Confirmação da Senha:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </InputGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Cadastrando...' : 'Cadastrar'}
          </SubmitButton>

          {error && <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>{error}</p>}
        </form>

        <LinkText>
          Já tem uma conta? <Link to="/login">ENTRE</Link>
        </LinkText>
      </FormContainer>
    </SSigninForm>
  );
}

