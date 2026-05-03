import { Queue } from "bullmq";

const queue = new Queue("jobs", {
  connection: { host: "localhost", port: 6379 },
});

export const addBullJob = async (type, data) => {
  await queue.add(type, data, {
    attempts: 3,
    backoff: { type: "exponential", delay: 2000 },
  });
};
