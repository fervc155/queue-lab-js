export default function BullTab() {
  const send = async () => {
    await fetch("http://localhost:4000/bull/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test@test.com" }),
    });
  };

  return <button onClick={send}>Send Bull Job</button>;
}
