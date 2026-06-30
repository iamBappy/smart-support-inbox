"use client";

import api from "../services/api";

interface Props {
  conversationId: number;
}

export default function LockButtons({
  conversationId,
}: Props) {

  async function lockConversation() {

    try {

      const token = localStorage.getItem("access");

      await api.post(
        `conversations/${conversationId}/lock/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Conversation locked.");

    } catch (error) {
      console.log(error);
      alert("Could not lock conversation.");
    }
  }

  async function unlockConversation() {

    try {

      const token = localStorage.getItem("access");

      await api.post(
        `conversations/${conversationId}/unlock/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Conversation unlocked.");

    } catch (error) {
      console.log(error);
      alert("Could not unlock conversation.");
    }
  }

  return (

    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >

      <button onClick={lockConversation}>
        🔒 Lock
      </button>

      <button onClick={unlockConversation}>
        🔓 Unlock
      </button>

    </div>

  );
}