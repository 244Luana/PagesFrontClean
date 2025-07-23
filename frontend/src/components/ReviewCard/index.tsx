import { useState } from "react";
import { useBook } from "../../hooks/useBook";
import { useReview } from "../../hooks/useReview";
import { useAuth } from "../../hooks/useAuth";
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
  SReviewHeader,
  SReviewActions,
  SActionButton,
  SEditForm,
  SEditTextarea,
  SEditActions
} from "./styles";

interface ReviewCardProps {
  review: ReviewProps;
  onReviewUpdated?: () => void;
}

export function ReviewCard({ review, onReviewUpdated }: ReviewCardProps) {
  const { getBooks } = useBook();
  const { updateReview, deleteReview } = useReview();
  const { currentUser } = useAuth();
  const book = getBooks(review.book_id);

  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(review.review);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canEditOrDelete = currentUser && currentUser.id === review.user_id;

  const handleEdit = () => {
    setIsEditing(true);
    setEditingText(review.review);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingText(review.review);
  };

  const handleSaveEdit = async () => {
    if (!editingText.trim()) {
      alert("O review não pode estar vazio");
      return;
    }

    setIsSubmitting(true);

    try {
      await updateReview(review.id, { book_id: book?.id, review: editingText.trim() });
      setIsEditing(false);
      onReviewUpdated?.();
    } catch (err) {
      console.error("Erro ao editar review:", err);
      alert("Erro ao editar review. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Tem certeza que deseja excluir este review?")) {
      return;
    }

    setIsSubmitting(true);

    try {
      await deleteReview(review.id);
      onReviewUpdated?.();
    } catch (err) {
      console.error("Erro ao excluir review:", err);
      alert("Erro ao excluir review. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!book) {
    return null;
  }

  return (
    <SReviewCard>
      <SBookSection>
        <SBookImage src={book.content} alt={book.title} />
        <SBookTitle>{book.title}</SBookTitle>
      </SBookSection>
      
      <SReviewSection>
        <SReviewHeader>
          <SReviewAuthor>{review.user?.name || "Usuário Anônimo"}</SReviewAuthor>
          <SReviewDate>{new Date(review.date).toLocaleDateString()}</SReviewDate>
        </SReviewHeader>
        
        {isEditing ? (
          <SEditForm>
            <SEditTextarea
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              rows={4}
            />
            <SEditActions>
              <SActionButton 
                onClick={handleSaveEdit}
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
            <SReviewText>{review.review}</SReviewText>
            {canEditOrDelete && (
              <SReviewActions>
                <SActionButton 
                  onClick={handleEdit}
                  $variant="edit"
                >
                  Editar
                </SActionButton>
                <SActionButton 
                  onClick={handleDelete}
                  $variant="delete"
                >
                  Excluir
                </SActionButton>
              </SReviewActions>
            )}
          </>
        )}
      </SReviewSection>
    </SReviewCard>
  );
}

