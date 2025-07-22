import styled from "styled-components";

export const SProfile = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`;

export const ProfileContainer = styled.main`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const ProfileTitle = styled.h2`
  font-size: 32px;
  color: #01232F;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
`;

export const ProfileForm = styled.form`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const ProfileImage = styled.figure`
  margin: 0;
  
  .avatar-placeholder {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #B85450;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: #ffffff;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  color: #01232F;
  font-weight: 500;
`;

export const FormInput = styled.input`
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #7dd3d3;
  }

  &::placeholder {
    color: #999;
  }
`;

export const FormSelect = styled.select`
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  outline: none;
  background-color: #ffffff;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    border-color: #7dd3d3;
  }

  option {
    padding: 10px;
  }
`;

export const SaveButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 15px 40px;
  border: none;
  border-radius: 25px;
  background-color: #7dd3d3;
  color: #01232F;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #6bc5c5;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

