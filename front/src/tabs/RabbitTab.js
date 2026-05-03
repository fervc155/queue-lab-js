export default function RabbitTab() {
  const send = async () => {
    await fetch("http://localhost:4000/rabbit/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "rabbit@test.com" }),
    });
  };

  return (
    <div>
      <h2>RabbitMQ Jobs</h2>
      <button onClick={send}>Send Rabbit Job</button>
    </div>
  );
}
