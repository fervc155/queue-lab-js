# Async MQ Lab (/back)

Backend para probar colas y procesamiento async.

---

## 🚀 Run

Infra:

```bash
docker compose up
```

API:

```bash
npm run dev
```

Workers:

```bash
npm run bull
npm run rabbit
npm run kafka
npm run nats
```

---

## 🔌 Endpoints

```bash
POST /bull/email
POST /rabbit/email
POST /kafka/email
POST /nats/email
```

---

## 🧠 Sistemas

- BullMQ (Redis)
- RabbitMQ
- Kafka
- NATS

---

## ⚠️ Nota

Si corres local:

```bash
localhost (NO redis / kafka / rabbitmq)
```

---
