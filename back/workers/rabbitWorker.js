import amqp from "amqplib";

(async () => {
  const conn = await amqp.connect("amqp://localhost");
  const ch = await conn.createChannel();
  const q = "jobs";

  await ch.assertQueue(q);

  ch.consume(q, (msg) => {
    const data = JSON.parse(msg.content.toString());
    console.log("Rabbit job:", data);
    ch.ack(msg);
  });
})();
