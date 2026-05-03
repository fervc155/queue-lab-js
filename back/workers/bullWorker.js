import { Worker } from "bullmq";

const worker = new Worker(
  "jobs",
  async (job) => {
    console.log("Processing:", job.name, job.data);
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
  },
);
