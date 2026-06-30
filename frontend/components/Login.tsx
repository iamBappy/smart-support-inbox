"use client";

import { useState } from "react";
import api from "../services/api";

export default function Login() {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    async function login() {

        try {

            const response = await api.post(
                "token/",
                {
                    username,
                    password,
                }
            );

            localStorage.setItem(
                "access",
                response.data.access
            );

            localStorage.setItem(
                "refresh",
                response.data.refresh
            );

            window.location.reload();

        } catch (error) {

            console.log(error);

            alert("Invalid username or password.");

        }

    }

    return (

        <div
            style={{
                width: "400px",
                margin: "100px auto",
                background: "white",
                padding: "30px",
                borderRadius: "8px",
            }}
        >

            <h2>Login</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                    setUsername(e.target.value)
                }
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                }}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "20px",
                }}
            />

            <button
                onClick={login}
            >
                Login
            </button>

        </div>

    );

}