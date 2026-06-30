export interface Message {
  id: number;
  sender: string;
  message: string;
  created_at: string;
}

export interface Conversation {
  id: number;
  customer_name: string;
  status: string;
  sentiment: string;
}

export interface ConversationDetailType {
  id: number;
  customer_name: string;
  status: string;
  sentiment: string;
  messages: Message[];
}