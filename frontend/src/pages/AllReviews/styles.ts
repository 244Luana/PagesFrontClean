import styled from "styled-components";

export const SAllReviewsPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`;

export const SAllReviewsContent = styled.main`
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
`;

export const SPageTitle = styled.h1`
  font-size: 32px;
  color: #01232F;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
`;

export const SReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const SLoadingMessage = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  padding: 40px;
`;

export const SErrorMessage = styled.div`
  background-color: #fee;
  color: #c33;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #fcc;
  text-align: center;
`;

export const SNoReviewsMessage = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  padding: 40px;
  font-style: italic;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

