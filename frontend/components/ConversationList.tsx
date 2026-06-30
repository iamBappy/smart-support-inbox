"use client";

import { useEffect, useState } from "react";
import api from "../services/api";
import { Conversation } from "../types/conversation";

interface Props {
  onSelect: (conversation: Conversation) => void;
}

export default function ConversationList({ onSelect }: Props) {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    loadConversations();
  }, []);

  async function loadConversations() {
    try {
      const token = localStorage.getItem("access");

      const response = await api.get("conversations/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setConversations(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Conversations</h2>

      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          onClick={() => onSelect(conversation)}
          className="card"
        >
          <h4>{conversation.customer_name}</h4>

          <p>Status: {conversation.status}</p>

          <p>Sentiment: {conversation.sentiment}</p>
        </div>
      ))}
    </div>
  );
}