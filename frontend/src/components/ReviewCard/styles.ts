import styled from "styled-components";

export const SReviewCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const SBookSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 15px;
    text-align: left;
  }
`;

export const SBookImage = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 60px;
    height: 90px;
    margin-bottom: 0;
  }
`;

export const SBookTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #01232F;
  margin: 0;
  line-height: 1.3;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    max-width: none;
    flex: 1;
  }
`;

export const SReviewSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

export const SReviewAuthor = styled.h5`
  font-size: 16px;
  font-weight: 600;
  color: #01232F;
  margin: 0;
`;

export const SReviewDate = styled.span`
  font-size: 12px;
  color: #666;
  font-style: italic;
`;

export const SReviewText = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin: 0;
  text-align: justify;
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
  font-size: 12px;
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
  min-height: 80px;

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

