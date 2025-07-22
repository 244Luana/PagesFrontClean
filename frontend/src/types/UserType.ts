export interface UserProps {
  id: string;
  name: string;
  email: string;
  password?: string; 
  role: 'user' | 'admin'; 
  nascimento?: string;
  endereco?: string;
  celular?: string;
  idioma?: string;
}