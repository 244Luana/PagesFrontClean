import { createContext, useState, type ReactNode } from "react"
import type { ReviewProps } from "../types/ReviewType"
import { apiReview } from "../services/intex"

interface ReviewContextType {
  Reviews: ReviewProps[]
  isLoading: boolean
  getAllReviews: () => Promise<ReviewProps[]>
  getReviewsByBook: (book_id: string) => Promise<ReviewProps[]>
  getReviewsByUser: () => Promise<ReviewProps[]>
  addReview: (Review: Omit<ReviewProps, "id" | "date">) => Promise<ReviewProps>
  updateReview: (id: string, updatedReview: Partial<Omit<ReviewProps, "id" | "date" | "user_id" >>) => Promise<ReviewProps>
  deleteReview: (id: string) => Promise<void>
}

export const ReviewContext = createContext<ReviewContextType>({
  Reviews: [],
  isLoading: false,
  getAllReviews: async () => [],
  getReviewsByBook: async () => [],
  getReviewsByUser: async () => [],
  addReview: async () => ({ id: "", book_id: "", user_id: "", review:"", date: `${new Date()}` }),
  updateReview: async () => ({ id: "", book_id: "", user_id: "", review:"", date: `${new Date()}` }),
  deleteReview: async () => { },
})

interface ReviewProviderProps {
  children: ReactNode
}

export const ReviewProvider = ({ children }: ReviewProviderProps) => {
  const [Reviews, setReviews] = useState<ReviewProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getAllReviews = async (): Promise<ReviewProps[]> => {
    try {
      setIsLoading(true)
      // Como não temos endpoint para todos os reviews, vamos simular com dados mock
      /*const mockReviews: ReviewProps[] = [
        {
          id: "review-1",
          book_id: "post-1",
          user_id: "user-1",
          review: "Este é um livro muito emocionante e tocante. A história é contada de forma simples mas profunda, mostrando a inocência de uma criança em meio aos horrores da guerra. Recomendo muito!",
          date: "2024-01-15",
          user: {
            id: "user-1",
            name: "Maria Silva",
            email: "maria@email.com",
            role: "user"
          }
        },
        {
          id: "review-2",
          book_id: "post-2",
          user_id: "user-2",
          review: "Uma obra-prima da literatura francesa. O Pequeno Príncipe nos ensina sobre amizade, amor e os valores mais importantes da vida. Leitura obrigatória para todas as idades.",
          date: "2024-01-14",
          user: {
            id: "user-2",
            name: "João Santos",
            email: "joao@email.com",
            role: "user"
          }
        },
        {
          id: "review-3",
          book_id: "post-3",
          user_id: "user-3",
          review: "Torto Arado é uma narrativa poderosa sobre a realidade do sertão brasileiro. Itamar Vieira Junior consegue retratar com maestria as questões sociais e familiares.",
          date: "2024-01-13",
          user: {
            id: "user-3",
            name: "Ana Costa",
            email: "ana@email.com",
            role: "user"
          }
        },
        {
          id: "review-4",
          book_id: "post-4",
          user_id: "user-4",
          review: "Jane Austen criou uma das histórias de amor mais icônicas da literatura. Orgulho e Preconceito é atemporal e sempre atual.",
          date: "2024-01-12",
          user: {
            id: "user-4",
            name: "Carlos Oliveira",
            email: "carlos@email.com",
            role: "user"
          }
        },
        {
          id: "review-5",
          book_id: "post-5",
          user_id: "user-5",
          review: "A Menina que Roubava Livros é uma história comovente sobre o poder das palavras e da literatura em tempos sombrios. Markus Zusak escreveu uma obra-prima.",
          date: "2024-01-11",
          user: {
            id: "user-5",
            name: "Fernanda Lima",
            email: "fernanda@email.com",
            role: "user"
          }
        }
      ]*/
      const result = await apiReview.getAllRevies()
      const mockReviews: ReviewProps[] = result.data || []
    
      return mockReviews
    } catch (error) {
      console.error("Erro ao buscar todos os reviews:", error)
      return []
    } finally {
      setIsLoading(false)
    }
  }

  const getReviewsByBook = async (book_id: string): Promise<ReviewProps[]> => {
    try {
      setIsLoading(true)
      const response = await apiReview.getByPost(book_id)
      return response.data || []
    } catch (error) {
      console.error("Erro ao buscar reviews do livro:", error)
      return []
    } finally {
      setIsLoading(false)
    }
  }

  const getReviewsByUser = async (): Promise<ReviewProps[]> => {
    try {
      setIsLoading(true)
      const response = await apiReview.getByUser()
      return response.data || []
    } catch (error) {
      console.error("Erro ao buscar reviews do usuário:", error)
      return []
    } finally {
      setIsLoading(false)
    }
  }

  const addReview = async (ReviewData: Omit<ReviewProps, "id" | "date">): Promise<ReviewProps> => {
    try {
      setIsLoading(true)
      const response = await apiReview.create({
        book_id: ReviewData.book_id,
        review: ReviewData.review
      })
      
      const newReview = response.data
      setReviews(prev => [...prev, newReview])
      return newReview
    } catch (error) {
      console.error("Erro ao criar review:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const updateReview = async (id: string, updatedReview: Partial<Omit<ReviewProps, "id" | "date" | "user_id">>): Promise<ReviewProps> => {
    try {
      setIsLoading(true)
      const response = await apiReview.update(id, {book_id: updatedReview.book_id ?? "", review: updatedReview.review??""})
      const updated = response.data
      setReviews(prev => prev.map(review => review.id === id ? updated : review))
      return updated
    } catch (error) {
      console.error("Erro ao atualizar review:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const deleteReview = async (id: string): Promise<void> => {
    try {
      setIsLoading(true)
      await apiReview.delete(id)
      setReviews(prev => prev.filter(review => review.id !== id))
    } catch (error) {
      console.error("Erro ao deletar review:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ReviewContext.Provider
      value={{
        Reviews,
        isLoading,
        getAllReviews,
        getReviewsByBook,
        getReviewsByUser,
        addReview,
        updateReview,
        deleteReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  )
}

