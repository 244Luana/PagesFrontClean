import styled from "styled-components";

export const SSigninPage = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(to right, #ffffff 50%, #01232F 50%);
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
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

// Media queries para responsividade
export const SSigninPageResponsive = styled(SSigninPage)`
  @media (max-width: 768px) {
    flex-direction: column;
    background: #ffffff;

    ${LeftSection} {
      order: 2;
      padding: 20px;
    }

    ${RightSection} {
      order: 1;
      min-height: 300px;
      padding: 20px;
    }

    ${IllustrationContainer} img {
      max-width: 60%;
      max-height: 60%;
    }
  }
`;

