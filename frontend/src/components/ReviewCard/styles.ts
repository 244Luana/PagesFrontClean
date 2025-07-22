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

