import { useNavigate } from "react-router-dom";
import type { BookProps } from "../../types/BookType";
import { SPostContainer, SPostItem, SPostImage, SPostTitle, SPostAuthor } from "./styles";

type Props = {
  posts: BookProps[];
};

export function Post({ posts }: Props) {
  const navigate = useNavigate();

  const handleBookClick = (bookId: string) => {
    navigate(`/reviews/${bookId}`);
  };

  return (
    <SPostContainer>
      {posts.map((post) => (
        <SPostItem key={post.id} onClick={() => handleBookClick(post.id)}>
          <SPostImage src={post.figure} alt={post.title} />
          <SPostTitle>{post.title}</SPostTitle>
          <SPostAuthor>{post.autor}</SPostAuthor>
        </SPostItem>
      ))}
    </SPostContainer>
  );
}

