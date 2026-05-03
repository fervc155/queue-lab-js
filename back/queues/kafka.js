import { Kafka, Partitioners } from "kafkajs";

const kafka = new Kafka({ brokers: ["localhost:9092"] });

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
});
export const sendKafkaJob = async (data) => {
  await producer.connect();
  await producer.send({
    topic: "jobs",
    messages: [{ value: JSON.stringify(data) }],
  });
};
