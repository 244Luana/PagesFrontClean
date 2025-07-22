import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  SProfile, 
  ProfileContainer, 
  ProfileTitle, 
  ProfileForm, 
  ProfileImageContainer, 
  ProfileImage, 
  FormGrid, 
  FormGroup, 
  FormLabel, 
  FormInput, 
  FormSelect, 
  SaveButton 
} from './styles';

export function MyProfile() {
  const [formData, setFormData] = useState({
    nome: '',
    nascimento: '',
    email: '',
    endereco: '',
    celular: '',
    idioma: 'Português'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados salvos:', formData);
    alert('Dados salvos com sucesso!');
  };

  return (
    <SProfile>
      <Header />
      
      <ProfileContainer>
        <ProfileTitle>Dados do Usuário</ProfileTitle>
        
        <ProfileForm onSubmit={handleSubmit}>
          <ProfileImageContainer>
            <ProfileImage>
              <div className="avatar-placeholder">
                <span>👤</span>
              </div>
            </ProfileImage>
          </ProfileImageContainer>

          <FormGrid>
            <FormGroup>
              <FormLabel>Nome</FormLabel>
              <FormInput
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Data de Nascimento</FormLabel>
              <FormInput
                type="date"
                name="nascimento"
                value={formData.nascimento}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Endereço</FormLabel>
              <FormInput
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Celular</FormLabel>
              <FormInput
                type="tel"
                name="celular"
                value={formData.celular}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Idioma</FormLabel>
              <FormSelect
                name="idioma"
                value={formData.idioma}
                onChange={handleInputChange}
              >
                <option value="Português">Português</option>
                <option value="Inglês">Inglês</option>
                <option value="Espanhol">Espanhol</option>
              </FormSelect>
            </FormGroup>
          </FormGrid>

          <SaveButton type="submit">Salvar</SaveButton>
        </ProfileForm>
      </ProfileContainer>
      
      <Footer />
    </SProfile>
  );
}

