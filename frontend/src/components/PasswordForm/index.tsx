import { useState } from "react";
import { SPasswordForm, FormContainer, InputGroup, SubmitButton, InfoText, LinkText } from "./styles";

type PasswordFormProps = {
  onSubmit: (email: string, nome: string) => void;
};

export function PasswordForm({ onSubmit }: PasswordFormProps) {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !nome) {
      alert("Preencha todos os campos");
      return;
    }
    onSubmit(email, nome);
  };

  return (
    <SPasswordForm>
      <FormContainer>
        <h1>Esqueci a senha</h1>
        
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label>Nome Completo:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
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

          <InfoText>
            Um email para redefinir sua senha chegará<br />
            na sua caixa postal em alguns minutos
          </InfoText>

          <SubmitButton type="submit">Enviar</SubmitButton>
        </form>

        <LinkText>
          <a href="#">Não recebi o email</a>
        </LinkText>
      </FormContainer>
    </SPasswordForm>
  );
}

