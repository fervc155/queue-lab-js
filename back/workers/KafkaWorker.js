import { Kafka } from "kafkajs";

const kafka = new Kafka({ brokers: ["localhost:9092"] });
const consumer = kafka.consumer({ groupId: "group1" });

(async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "jobs" });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log("Kafka job:", message.value.toString());
    },
  });
})();
