# 📌 Kafka vs RabbitMQ - Choix du Message Broker

## 🚀 Objectif
Kronos utilise **Kafka et RabbitMQ** comme message brokers pour assurer **une communication asynchrone et scalable** entre les microservices. Ce fichier détaille leurs différences et leur utilisation dans `messaging-service`.

## 🔄 Différences entre Kafka et RabbitMQ
| 📌 Critère | 🔥 Kafka | 🐇 RabbitMQ |
|-----------|---------|------------|
| **Modèle** | Basé sur les logs (Event Streaming) | Basé sur les files d’attente (Message Queue) |
| **Scalabilité** | Conçu pour le big data et haute scalabilité | Moins scalable, mais efficace pour le routage |
| **Performance** | Ultra rapide pour ingestion massive | Latence faible pour interactions rapides |
| **Persistance** | Stocke les messages même après lecture | Messages supprimés après consommation |
| **Cas d’usage** | Streaming temps réel, gros volumes de données | Communication point à point, orchestration |

## 📂 Utilisation dans Kronos
### 📌 **Kafka pour le streaming d’événements**
✅ Utilisé pour **les logs, la surveillance des événements et les grandes charges**.  
✅ Permet la **relecture des événements** en cas de besoin.  
✅ Idéal pour **Gaia** qui analyse les tendances et alertes.

**Exemple de production Kafka :**
```js
const { Kafka } = require("kafkajs");
const kafka = new Kafka({ clientId: "kronos", brokers: ["kafka-broker:9092"] });
const producer = kafka.producer();
await producer.connect();
await producer.send({ topic: "logs", messages: [{ value: "Nouvelle entrée de log" }] });
```

### 📌 **RabbitMQ pour les requêtes directes**
✅ Utilisé pour **les interactions temps réel et la distribution de messages courts**.  
✅ Idéal pour **router les commandes API aux bons microservices**.  
✅ Gestion fine des files d’attente avec accusé de réception.

**Exemple de production RabbitMQ :**
```js
const amqp = require("amqplib");
const connection = await amqp.connect("amqp://rabbitmq");
const channel = await connection.createChannel();
await channel.assertQueue("task_queue", { durable: true });
channel.sendToQueue("task_queue", Buffer.from("Nouvelle tâche"), { persistent: true });
```

## 🚀 Bonnes Pratiques et Sécurisation
✅ **Kafka** pour les événements critiques **(logs, audit, surveillance)**.  
✅ **RabbitMQ** pour **les échanges directs et les tâches à court terme**.  
✅ **Chiffrement TLS** et **authentification forte** pour éviter les écoutes malveillantes.  
✅ **Surveillance des files d’attente** pour éviter l’engorgement.  

---