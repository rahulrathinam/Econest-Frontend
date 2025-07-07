import React, { useState } from "react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "EcoNest Subscriber",
        email,
      }),
    });

    const data = await res.json();
    setStatus(data.message);
    setEmail("");
  };

  return (
    <section className="email-signup">
      <h2>Subscribe to EcoNest</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Get 20% OFF</button>
      </form>
      <p>{status}</p>
    </section>
  );
};

export default EmailSignup;
