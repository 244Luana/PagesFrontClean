import { api } from "../http/axios"

export interface IReview {
    book_id: string
    review: string
    date?: string
}
class ReviewData {
    getByUser() {
        return api.get(`/reviews/user/`)
    }
    getByPost(book_id: string) {
        return api.get(`/reviews/book/${book_id}`)
    }
    create(data: IReview) {
        return api.post('/reviews/', data)
    }
    delete(id: string) {
        return api.delete(`/reviews/${id}`)
    }
}

export default new ReviewData()

