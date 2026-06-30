"use client";

import { useEffect, useState } from "react";
import api from "../services/api";
import type {
  Conversation,
  ConversationDetailType,
} from "../types/conversation";
import ReplyBox from "./ReplyBox";

interface Props {
  conversation: Conversation;
}

export default function ConversationDetail({ conversation }: Props) {
  const [detail, setDetail] = useState<ConversationDetailType | null>(null);

  useEffect(() => {
    loadConversation();
  }, [conversation]);

  async function loadConversation() {
    try {
      const token = localStorage.getItem("access");

      const response = await api.get(
        `conversations/${conversation.id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!detail) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{detail.customer_name}</h2>

      <p>
        <strong>Status:</strong> {detail.status}
      </p>

      <p>
        <strong>Sentiment:</strong> {detail.sentiment}
      </p>

      <hr />

      <h3>Messages</h3>

      {detail.messages.map((message) => (
        <div
          key={message.id}
          style={{
            border: "1px solid lightgray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <strong>{message.sender}</strong>

          <p>{message.message}</p>
        </div>
      ))}
      <ReplyBox
        conversationId={conversation.id}
        onReplySent={loadConversation}
/>
    </div>
  );
}