import React, { useState } from "react";
import BullTab from "./tabs/BullTab";
import RabbitTab from "./tabs/RabbitTab";
import KafkaTab from "./tabs/KafkaTab";
import NatsTab from "./tabs/NatsTab";

export default function App() {
  const [tab, setTab] = useState("bull");

  return (
    <div style={{ padding: 20 }}>
      <h1>Async Jobs Lab</h1>
      <button onClick={() => setTab("bull")}>BullMQ</button>
      <button onClick={() => setTab("rabbit")}>RabbitMQ</button>
      <button onClick={() => setTab("kafka")}>Kafka</button>
      <button onClick={() => setTab("nats")}>NATS</button>

      <br />
      <br />
      <hr />

      {tab === "bull" && <BullTab />}
      {tab === "rabbit" && <RabbitTab />}
      {tab === "kafka" && <KafkaTab />}
      {tab === "nats" && <NatsTab />}
    </div>
  );
}
