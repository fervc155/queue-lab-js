export default function KafkaTab() {
  const send = async () => {
    await fetch("http://localhost:4000/kafka/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "kafka@test.com" }),
    });
  };

  return (
    <div>
      <h2>Kafka Jobs</h2>
      <button onClick={send}>Send Kafka Job</button>
    </div>
  );
}
