export interface ReviewProps {
  id: string
  book_id: string
  user_id: string
  review: string
  date: string
  user?: {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
  };
}

export interface ReviewListProps {
  reviews: ReviewProps[];
}

