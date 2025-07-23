import styled from "styled-components";

export const SReviewsPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`;

export const SReviewsContent = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const SBookSection = styled.section`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SBookImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const SBookInfo = styled.div`
  width: 100%;
`;

export const SBookTitle = styled.h1`
  font-size: 24px;
  color: #01232F;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const SBookAuthor = styled.p`
  font-size: 16px;
  color: #666;
  font-style: italic;
  margin-bottom: 15px;
`;

export const SBookDescription = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
`;

export const SReviewsSection = styled.section`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SAddReviewSection = styled.section`
  background-color: #e8f4f4;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

export const SFormTitle = styled.h2`
  font-size: 20px;
  color: #01232F;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const SReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SReviewItem = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #7dd3d3;
`;

export const SReviewAuthor = styled.h4`
  font-size: 16px;
  color: #01232F;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const SReviewDate = styled.span`
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
  display: block;
`;

export const SReviewComment = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin: 0;
`;

export const SReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SFormLabel = styled.label`
  font-size: 14px;
  color: #01232F;
  font-weight: 500;
`;

export const SFormTextarea = styled.textarea`
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  outline: none;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: border-color 0.2s;

  &:focus {
    border-color: #7dd3d3;
  }

  &::placeholder {
    color: #999;
  }
`;

export const SFormButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 25px;
  background-color: #7dd3d3;
  color: #01232F;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  align-self: flex-end;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #6bc5c5;
    transform: translateY(-1px);
  }
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
`;

export const SNoReviewsMessage = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  padding: 40px;
  font-style: italic;
`;



export const SLoginMessage = styled.div`
  background-color: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;

  p {
    margin: 0 0 15px 0;
    color: #1976d2;
    font-size: 16px;
  }
`;

export const SLoginButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1976d2;
  }
`;


export const SReviewActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  justify-content: flex-end;
`;

export const SActionButton = styled.button<{ $variant: 'edit' | 'delete' | 'save' | 'cancel' }>`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${props => {
    switch (props.$variant) {
      case 'edit':
        return `
          background-color: #007bff;
          color: white;
          &:hover {
            background-color: #0056b3;
          }
        `;
      case 'delete':
        return `
          background-color: #dc3545;
          color: white;
          &:hover {
            background-color: #c82333;
          }
        `;
      case 'save':
        return `
          background-color: #28a745;
          color: white;
          &:hover {
            background-color: #218838;
          }
        `;
      case 'cancel':
        return `
          background-color: #6c757d;
          color: white;
          &:hover {
            background-color: #5a6268;
          }
        `;
      default:
        return `
          background-color: #007bff;
          color: white;
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SEditForm = styled.div`
  margin-top: 10px;
`;

export const SEditTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const SEditActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: flex-end;
`;

