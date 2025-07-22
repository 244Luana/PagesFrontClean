import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useBook } from "../../hooks/useBook";
import { useReview } from "../../hooks/useReview";
import { useAuth } from "../../hooks/useAuth";
import type { ReviewProps } from "../../types/ReviewType";
import {
  SReviewsPage,
  SReviewsContent,
  SBookSection,
  SBookImage,
  SBookInfo,
  SBookTitle,
  SBookAuthor,
  SBookDescription,
  SReviewsSection,
  SReviewsList,
  SReviewItem,
  SReviewAuthor,
  SReviewDate,
  SReviewComment,
  SReviewForm,
  SFormTitle,
  SFormGroup,
  SFormLabel,
  SFormTextarea,
  SFormButton,
  SLoadingMessage,
  SErrorMessage,
  SNoReviewsMessage,
  SAddReviewSection,
  SLoginMessage,
  SLoginButton
} from "./styles";

export function Reviews() {
  const { bookId } = useParams<{ bookId: string }>();
  const { getBooks } = useBook();
  const { getReviewsByBook, addReview, isLoading } = useReview();
  const { currentUser } = useAuth();
  
  const [book, setBook] = useState(getBooks(bookId || ""));
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [newReview, setNewReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (bookId) {
      const foundBook = getBooks(bookId);
      setBook(foundBook);
      loadReviews();
    }
  }, [bookId, getBooks]);

  const loadReviews = async () => {
    if (!bookId) return;
    
    try {
      const bookReviews = await getReviewsByBook(bookId);
      setReviews(bookReviews || []);
    } catch (err) {
      console.error("Erro ao carregar reviews:", err);
      setError("Erro ao carregar reviews");
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.trim()) {
      setError("Por favor, escreva um review");
      return;
    }

    if (!currentUser) {
      setError("Você precisa estar logado para adicionar um review");
      return;
    }

    if (!bookId) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const reviewData = {
        book_id: bookId,
        user_id: currentUser.id,
        review: newReview.trim()
      };

      await addReview(reviewData);
      setNewReview("");
      await loadReviews(); // Recarrega os reviews
    } catch (err) {
      console.error("Erro ao adicionar review:", err);
      setError("Erro ao adicionar review. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!book) {
    return (
      <SReviewsPage>
        <Header />
        <SReviewsContent>
          <SErrorMessage>Livro não encontrado</SErrorMessage>
        </SReviewsContent>
        <Footer />
      </SReviewsPage>
    );
  }

  return (
    <SReviewsPage>
      <Header />
      <SReviewsContent>
        <SBookSection>
          <SBookImage src={book.figure} alt={book.title} />
          <SBookInfo>
            <SBookTitle>{book.title}</SBookTitle>
            <SBookAuthor>por {book.autor}</SBookAuthor>
            <SBookDescription>{book.description}</SBookDescription>
          </SBookInfo>
        </SBookSection>

        <SReviewsSection>
          <SFormTitle>Reviews do Livro</SFormTitle>
          
          {isLoading ? (
            <SLoadingMessage>Carregando reviews...</SLoadingMessage>
          ) : reviews.length === 0 ? (
            <SNoReviewsMessage>
              Ainda não há reviews para este livro. Seja o primeiro a avaliar!
            </SNoReviewsMessage>
          ) : (
            <SReviewsList>
              {reviews.map((review) => (
                <SReviewItem key={review.id}>
                  <SReviewAuthor>
                    {review.user?.name || "Usuário Anônimo"}
                  </SReviewAuthor>
                  <SReviewDate>{new Date(review.date).toLocaleDateString()}</SReviewDate>
                  <SReviewComment>{review.review}</SReviewComment>
                </SReviewItem>
              ))}
            </SReviewsList>
          )}
        </SReviewsSection>

        <SAddReviewSection>
          <SFormTitle>Adicione você também sua review!</SFormTitle>
          
          {!currentUser ? (
            <SLoginMessage>
              <p>Você precisa estar logado para adicionar um review.</p>
              <SLoginButton as={Link} to="/login">
                Fazer Login
              </SLoginButton>
            </SLoginMessage>
          ) : (
            <>
              {error && <SErrorMessage>{error}</SErrorMessage>}
              
              <SReviewForm onSubmit={handleSubmitReview}>
                <SFormGroup>
                  <SFormLabel>Título: {book.title}</SFormLabel>
                  <SFormLabel>Nota: ★★★★★</SFormLabel>
                  <SFormLabel>Review:</SFormLabel>
                  <SFormTextarea
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Deixe aqui um review ou considerações sobre o livro"
                    rows={4}
                    required
                  />
                </SFormGroup>
                
                <SFormButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Publicando..." : "Publicar"}
                </SFormButton>
              </SReviewForm>
            </>
          )}
        </SAddReviewSection>
      </SReviewsContent>
      <Footer />
    </SReviewsPage>
  );
}

