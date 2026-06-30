"use client";

import { useState } from "react";

import ConversationList from "../components/ConversationList";

import { Conversation } from "../types/conversation";
import ConversationDetail from "../components/ConversationDetail";

export default function Home() {

  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);

  return (
    <main
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "350px",
        }}
      >
        <ConversationList
          onSelect={setSelectedConversation}
        />
      </div>

      <div
        style={{
          flex: 1,
        }}
      >
        <h2>Conversation Details</h2>

        {selectedConversation ? (
          <ConversationDetail
             conversation={selectedConversation}
          />
        ) : (
          <p>Select a conversation.</p>
        )}
      </div>
    </main>
  );
}
