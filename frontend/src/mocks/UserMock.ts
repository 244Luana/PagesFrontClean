import type { UserProps } from '../types/UserType';

export const mockUsers: UserProps[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@example.com',
    password: 'senha123', 
    role: 'user',
    nascimento: '15/05/1990',
    endereco: 'Rua das Flores, 123',
    celular: '11987654321',
    idioma: 'Português',
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@example.com',
    password: 'outrasenha',
    role: 'admin',
    nascimento: '20/11/1985',
    endereco: 'Avenida Central, 456',
    celular: '21987654321',
    idioma: 'Inglês',
  },
];