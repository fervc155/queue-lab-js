// workers/natsWorker.js
import { connect } from "nats";

const nc = await connect({ servers: "localhost:4222" });

const sub = nc.subscribe("jobs");

console.log("NATS worker listening...");

for await (const msg of sub) {
  const data = JSON.parse(msg.data);
  console.log("NATS job:", data);
}
