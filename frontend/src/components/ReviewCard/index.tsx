import { useBook } from "../../hooks/useBook";
import type { ReviewProps } from "../../types/ReviewType";
import {
  SReviewCard,
  SBookSection,
  SBookImage,
  SBookTitle,
  SReviewSection,
  SReviewAuthor,
  SReviewDate,
  SReviewText,
  SReviewHeader
} from "./styles";

interface ReviewCardProps {
  review: ReviewProps;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const { getBooks } = useBook();
  const book = getBooks(review.book_id);

  if (!book) {
    return null;
  }

  return (
    <SReviewCard>
      <SBookSection>
        <SBookImage src={book.figure} alt={book.title} />
        <SBookTitle>{book.title}</SBookTitle>
      </SBookSection>
      
      <SReviewSection>
        <SReviewHeader>
          <SReviewAuthor>{review.user?.name || "Usuário Anônimo"}</SReviewAuthor>
          <SReviewDate>{new Date(review.date).toLocaleDateString()}</SReviewDate>
        </SReviewHeader>
        <SReviewText>{review.review}</SReviewText>
      </SReviewSection>
    </SReviewCard>
  );
}

