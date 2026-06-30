export interface Message {
    id: number;
    sender: string;
    message: string;
}

export interface Conversation {
    id: number;
    customer_name: string;
    status: string;
    sentiment: string;
}