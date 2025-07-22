import styled from "styled-components";

export const SLoginPage = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(to right, #ffffff 50%, #01232F 50%);
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #ffffff;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #01232F;
  padding: 40px;
`;

export const IllustrationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

