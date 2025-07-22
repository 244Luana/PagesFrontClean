import { api } from "../http/axios"

export interface IBook {
    title: string
    description: string
    content: string
    date?: string
}
class BookData {
    getAll() {
        return api.get('/books/')
    }
    getId(id: string) {
        return api.get(`/books/${id}`)
    }
    create(data: IBook) {
        return api.post('/books/', data)
    }
    update(id: string, data: IBook) {
        return api.put(`/books/${id}`, data)
    }
    delete(id: string) {
        return api.delete(`/books/${id}`)
    }
}

export default new BookData()