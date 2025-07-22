import styled from "styled-components";

export const SLoginForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  
  h1 {
    font-size: 32px;
    color: #01232F;
    font-weight: 600;
    margin-bottom: 40px;
    text-align: left;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    color: #01232F;
    font-weight: 500;
  }

  input {
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #f5f5f5;
    font-size: 14px;
    color: #333;
    outline: none;
    transition: background-color 0.2s;

    &:focus {
      background-color: #ebebeb;
    }

    &::placeholder {
      color: #999;
    }
  }
`;

export const ForgotPasswordLink = styled.div`
  text-align: right;
  margin-top: -10px;

  a {
    font-size: 14px;
    color: #01232F;
    text-decoration: underline;
    
    &:hover {
      color: #7dd3d3;
    }
  }
`;

export const SubmitButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 25px;
  background-color: #7dd3d3;
  color: #01232F;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 20px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #6bc5c5;
    transform: translateY(-1px);
  }
`;

export const LinkText = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-top: 20px;

  a {
    color: #01232F;
    font-weight: 600;
    text-decoration: underline;
    
    &:hover {
      color: #7dd3d3;
    }
  }
`;

