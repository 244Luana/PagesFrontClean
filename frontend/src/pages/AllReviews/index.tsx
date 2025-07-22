import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ReviewCard } from "../../components/ReviewCard";
import { useReview } from "../../hooks/useReview";
import type { ReviewProps } from "../../types/ReviewType";
import {
  SAllReviewsPage,
  SAllReviewsContent,
  SPageTitle,
  SReviewsList,
  SLoadingMessage,
  SErrorMessage,
  SNoReviewsMessage
} from "./styles";

export function AllReviews() {
  const { getAllReviews, isLoading } = useReview();
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadAllReviews();
  }, []);

  const loadAllReviews = async () => {
    try {
      setError(null);
      const allReviews = await getAllReviews();
      // Ordenar por data mais recente
      const sortedReviews = allReviews.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setReviews(sortedReviews);
    } catch (err) {
      console.error("Erro ao carregar reviews:", err);
      setError("Erro ao carregar reviews. Tente novamente.");
    }
  };

  return (
    <SAllReviewsPage>
      <Header />
      <SAllReviewsContent>
        <SPageTitle>Reviews Mais Recentes</SPageTitle>
        
        {error && <SErrorMessage>{error}</SErrorMessage>}
        
        {isLoading ? (
          <SLoadingMessage>Carregando reviews...</SLoadingMessage>
        ) : reviews.length === 0 ? (
          <SNoReviewsMessage>
            Ainda não há reviews cadastrados. Seja o primeiro a avaliar um livro!
          </SNoReviewsMessage>
        ) : (
          <SReviewsList>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </SReviewsList>
        )}
      </SAllReviewsContent>
      <Footer />
    </SAllReviewsPage>
  );
}

