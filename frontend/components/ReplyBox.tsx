"use client";

import { useState } from "react";
import api from "../services/api";

interface Props {
  conversationId: number;
  onReplySent: () => void;
}

export default function ReplyBox({
  conversationId,
  onReplySent,
}: Props) {
  const [message, setMessage] = useState("");

  async function getSuggestion() {
  try {
    const token = localStorage.getItem("access");

    const response = await api.get(
      `conversations/${conversationId}/suggest-reply/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setMessage(response.data.suggested_reply);
  } catch (error) {
    console.log(error);
    alert("Could not get AI suggestion.");
  }
}
  async function sendReply() {
    if (!message.trim()) {
      return;
    }

    try {
      const token = localStorage.getItem("access");

      await api.post(
        `conversations/${conversationId}/reply/`,
        {
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("");

      onReplySent();
    } catch (error) {
      console.log(error);
      alert("Failed to send reply.");
    }
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <textarea
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your reply..."
        style={{
          width: "100%",
          padding: "10px",
        }}
      />

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "10px",
         }}
     >
        <button onClick={getSuggestion}>
             ✨ Suggest Reply
        </button>

        <button onClick={sendReply}>
           Send Reply
        </button>
       </div>
    </div>
  );
}