"use client";

import { useState } from "react";
import Login from "../components/Login";
import { useEffect } from "react";

import ConversationList from "../components/ConversationList";

import { Conversation } from "../types/conversation";
import ConversationDetail from "../components/ConversationDetail";

export default function Home() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);

  useEffect(() => {

    const token = localStorage.getItem("access");

    if (token) {

        setLoggedIn(true);

    }

}, []);

if (!loggedIn) {

    return <Login />;

}
  return (
    <main>

  <div className="left-panel">
    <ConversationList
      onSelect={setSelectedConversation}
    />
  </div>

  <div className="right-panel">

    {selectedConversation ? (
      <ConversationDetail
        conversation={selectedConversation}
      />
    ) : (
      <h2>Select a conversation</h2>
    )}

  </div>
<h1
    style={{
        textAlign: "center",
        marginTop: "20px",
    }}
>
    Smart Support Inbox
</h1>


<div
    style={{
        textAlign: "right",
        padding: "20px",
    }}
>

<button

onClick={() => {

localStorage.clear();

window.location.reload();

}}

>

Logout

</button>

</div>
</main>
  );
}
