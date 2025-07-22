import styled from "styled-components";

export const SPostContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

export const SPostItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const SPostImage = styled.img`
  width: 100%;
  max-width: 120px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const SPostTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #01232F;
  margin: 8px 0 4px 0;
  line-height: 1.3;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SPostAuthor = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
  font-style: italic;
`;

