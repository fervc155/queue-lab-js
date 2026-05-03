import { connect } from "nats";

const nc = await connect({ servers: "localhost:4222" });

export const sendNatsJob = async (data) => {
  nc.publish("jobs", JSON.stringify(data));
};
