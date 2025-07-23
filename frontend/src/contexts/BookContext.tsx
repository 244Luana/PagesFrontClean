import { createContext, useState, useEffect, type ReactNode } from "react"
import type { BookProps } from "../types/BookType"
import { apiBook } from "../services/intex"

interface BookContextType {
  books: BookProps[]
  isLoading: boolean
  getBooks: (id: string) => BookProps | undefined
  searchBooks: (query: string) => BookProps[]
  refreshBooks: () => Promise<void>
}

export const BookContext = createContext<BookContextType>({
  books: [],
  isLoading: true,
  getBooks: () => undefined,
  searchBooks: () => [],
  refreshBooks: async () => {}
})

interface BookProviderProps {
  children: ReactNode
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [books, setBooks] = useState<BookProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const loadBooks = async () => {
    try {
      setIsLoading(true)
      const response = await apiBook.getAll()
      setBooks(response.data || [])
      //console.log("Livros carregados:", response.data)
    } catch (error) {
      console.error("Erro ao carregar livros:", error)
      // Usar dados mock como fallback
      /*const mockBooks = mockPosts.map(post => ({
        id: post.id,
        title: post.title,
        description: `Descrição do livro ${post.title}`,
        figure: post.figure,
        autor: post.autor
      }))*/
      //setBooks(mockBooks)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadBooks()
  }, [])

  const getBooks = (id: string) => {
    return books.find((book) => book.id === id)
  }

  const searchBooks = (query: string) => {
    if (!query.trim()) return books
    
    const lowercaseQuery = query.toLowerCase()
    return books.filter(book => 
      book.title.toLowerCase().includes(lowercaseQuery) ||
      book.autor.toLowerCase().includes(lowercaseQuery)
    )
  }

  const refreshBooks = async () => {
    await loadBooks()
  }

  return (
    <BookContext.Provider
      value={{
        books,
        isLoading,
        getBooks,
        searchBooks,
        refreshBooks
      }}
    >
      {children}
    </BookContext.Provider>
  )
}

