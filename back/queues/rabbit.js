import amqp from "amqplib";

export const sendRabbitJob = async (data) => {
  const conn = await amqp.connect("amqp://localhost");
  const ch = await conn.createChannel();
  const q = "jobs";

  await ch.assertQueue(q);
  ch.sendToQueue(q, Buffer.from(JSON.stringify(data)));
};
