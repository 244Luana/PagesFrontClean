import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Post } from "../../components/Post";
import { useBook } from "../../hooks/useBook";
import { SHomePage, SHomeContent, SHomeTitle, SLoadingMessage } from "./styles";

export default function Home() {
  const { books, isLoading } = useBook();

  return (
    <SHomePage>
      <Header />
      <SHomeContent>
        <SHomeTitle>Livros Populares</SHomeTitle>
        {isLoading ? (
          <SLoadingMessage>Carregando livros...</SLoadingMessage>
        ) : (
          <Post posts={books} />
        )}
      </SHomeContent>
      <Footer />
    </SHomePage>
  );
}

