
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Coffee' | 'Non-Coffee' | 'Pastry';
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface RecommendationResponse {
  name: string;
  reason: string;
}
