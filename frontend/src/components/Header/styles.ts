import styled from "styled-components";

export const SHeader = styled.header`
  background-color: #01232F;
  padding: 15px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  a, h1{
    decoration:none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
`;

export const Logo = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  margin-right: auto; /* Empurra os outros elementos para a direita */

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  /* flex: 1; */ /* Removido para que a navegação não ocupe todo o espaço */
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const NavLink = styled.a<{$isActive?: boolean}>`
  color: ${props => props.$isActive ? '#7dd3d3' : '#ffffff'};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  border-bottom: ${props => props.$isActive ? '2px solid #7dd3d3' : '2px solid transparent'};
  transition: all 0.2s;

  &:hover {
    color: #7dd3d3;
    border-bottom-color: #7dd3d3;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto; /* Empurra para a direita */

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const SearchInput = styled.input`
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  background-color: #ffffff;
  font-size: 14px;
  width: 250px;
  outline: none;

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const LogoContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  
`

export const BooksIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

export const AuthButton = styled.button`
  background-color: #7dd3d3;
  color: #01232F;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none; /* Para o caso de ser um Link */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #5cbaba;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;


