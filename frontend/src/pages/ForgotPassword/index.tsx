import { useNavigate } from "react-router-dom";
import { PasswordForm } from "../../components/PasswordForm";
import { SForgotPasswordPage, LeftSection, RightSection, IllustrationContainer } from "./styles";
import ForgotPasswordImage from "../../assets/ForgotPassword.png";

export function ForgotPassword() {
  const navigate = useNavigate();

  const handleRecover = (email: string, nome: string) => {
    alert(`Um link de recuperação foi enviado para ${email}`);
    navigate("/login");
  };

  return (
    <SForgotPasswordPage>
      <LeftSection>
        <PasswordForm onSubmit={handleRecover} />
      </LeftSection>
      
      <RightSection>
        <IllustrationContainer>
          <img src={ForgotPasswordImage} alt="Ilustração esqueci a senha" />
        </IllustrationContainer>
      </RightSection>
    </SForgotPasswordPage>
  );
}

