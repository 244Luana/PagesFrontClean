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
  SLoginButton,
  SReviewActions,
  SActionButton,
  SEditForm,
  SEditTextarea,
  SEditActions
} from "./styles";

export function Reviews() {
  const { bookId } = useParams<{ bookId: string }>();
  const { getBooks } = useBook();
  const { getReviewsByBook, addReview, updateReview, deleteReview, isLoading } = useReview();
  const { currentUser } = useAuth();
  
  const [book, setBook] = useState(getBooks(bookId || ""));
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [newReview, setNewReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    if (bookId) {
      const foundBook = getBooks(bookId);
      setBook(foundBook);
      console.log(foundBook?.content)
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

  const handleEditReview = (review: ReviewProps) => {
    setEditingReviewId(review.id);
    setEditingText(review.review);
  };

  const handleCancelEdit = () => {
    setEditingReviewId(null);
    setEditingText("");
  };

  const handleSaveEdit = async (reviewId: string) => {
    if (!editingText.trim()) {
      setError("O review não pode estar vazio");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await updateReview(reviewId, { review: editingText.trim() });
      setEditingReviewId(null);
      setEditingText("");
      await loadReviews(); // Recarrega os reviews
    } catch (err) {
      console.error("Erro ao editar review:", err);
      setError("Erro ao editar review. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    if (!window.confirm("Tem certeza que deseja excluir este review?")) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await deleteReview(reviewId);
      await loadReviews(); // Recarrega os reviews
    } catch (err) {
      console.error("Erro ao excluir review:", err);
      setError("Erro ao excluir review. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canEditOrDelete = (review: ReviewProps) => {
    return currentUser && currentUser.id === review.user_id;
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
          <SBookImage src={book.content} alt={book.title} />
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
                  
                  {editingReviewId === review.id ? (
                    <SEditForm>
                      <SEditTextarea
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        rows={4}
                      />
                      <SEditActions>
                        <SActionButton 
                          onClick={() => handleSaveEdit(review.id)}
                          disabled={isSubmitting}
                          $variant="save"
                        >
                          {isSubmitting ? "Salvando..." : "Salvar"}
                        </SActionButton>
                        <SActionButton 
                          onClick={handleCancelEdit}
                          disabled={isSubmitting}
                          $variant="cancel"
                        >
                          Cancelar
                        </SActionButton>
                      </SEditActions>
                    </SEditForm>
                  ) : (
                    <>
                      <SReviewComment>{review.review}</SReviewComment>
                      {canEditOrDelete(review) && (
                        <SReviewActions>
                          <SActionButton 
                            onClick={() => handleEditReview(review)}
                            $variant="edit"
                          >
                            Editar
                          </SActionButton>
                          <SActionButton 
                            onClick={() => handleDeleteReview(review.id)}
                            $variant="delete"
                          >
                            Excluir
                          </SActionButton>
                        </SReviewActions>
                      )}
                    </>
                  )}
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

