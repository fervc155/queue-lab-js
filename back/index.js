import express from "express";
import { addBullJob } from "./queues/bull.js";
import { sendRabbitJob } from "./queues/rabbit.js";
import { sendKafkaJob } from "./queues/kafka.js";
import cors from "cors";
import { sendNatsJob } from "./queues/nats.js";
const app = express();
app.use(express.json());
app.use(cors());

app.post("/bull/email", async (req, res) => {
  await addBullJob("email", req.body);
  console.log("-----------", "BULL MQ ");
  res.send({ status: "queued (bull)" });
});

app.post("/rabbit/email", async (req, res) => {
  await sendRabbitJob(req.body);
  console.log("-----------", "RABBIT MQ ");

  res.send({ status: "queued (rabbit)" });
});

app.post("/kafka/email", async (req, res) => {
  await sendKafkaJob(req.body);
  console.log("-----------", "KAFKA MQ ");

  res.send({ status: "queued (kafka)" });
});

app.post("/nats/email", async (req, res) => {
  await sendNatsJob(req.body);
  console.log("-----------", "NATS");

  res.send({ status: "queued (nats)" });
});
app.listen(4000, () => console.log("API running on 4000"));
