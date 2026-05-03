export default function NatsTab() {
  const send = async () => {
    await fetch("http://localhost:4000/nats/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "nats@test.com" }),
    });
  };

  return <button onClick={send}>Send NATS Job</button>;
}
