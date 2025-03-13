# 📌 Messaging-Service - Communication Inter-Services

## 🚀 Rôle
`messaging-service` assure **la communication asynchrone** entre les microservices de Kronos via un système de **message broker** (Kafka/RabbitMQ). Il permet de **découpler les services**, d’optimiser la **scalabilité** et de garantir **une transmission fiable des événements**.

## 🔑 Fonctions principales
✅ **Publication et consommation d’événements** entre microservices.  
✅ **Découplage des services** pour éviter les dépendances directes.  
✅ **Garantie de livraison des messages** avec persistance et retry automatique.  
✅ **Gestion des files d’attente** pour prioriser les traitements.  
✅ **Scalabilité horizontale** pour supporter une forte charge.  
✅ **Support du modèle Publish/Subscribe et Request/Reply**.  

## 🛠 Technologies utilisées
- **Kafka** pour la gestion des événements massifs et distribués.  
- **RabbitMQ** pour la file d’attente et le routage des messages.  
- **Node.js + amqplib/kafkajs** pour la connexion et la gestion des messages.  
- **Redis (optionnel)** pour la gestion des jobs temporaires.  
- **Prometheus/Grafana** pour le monitoring des flux de messages.  

## 🔗 Interactions avec les autres microservices
| 📌 Microservice | 🔄 Interaction avec `messaging-service` |
|----------------|----------------------------------|
| **[auth-service](../auth_service/index.md)** | Envoi d’événements liés aux connexions et sécurité |
| **[user-service](../user_service/index.md)** | Notifications des changements de rôles utilisateurs |
| **[log-service](../log_service/index.md)** | Transmission des logs vers un canal centralisé |
| **[cache-service](../cache_service/index.md)** | Synchronisation des mises à jour de cache |
| **[router-service](../router_service/index.md)** | Gestion des requêtes asynchrones |
| **[Gaia](../../gaia/gaia_index.md)** | Envoi d’alertes critiques et événements système |

## 📡 Endpoints API Principaux
### 📜 **Gestion des Messages**
- `POST /publish` → Publier un message sur un topic donné.  
- `GET /subscribe/:topic` → Écouter un topic spécifique.  
- `POST /ack/:messageId` → Accuser réception d’un message.  
- `POST /retry/:messageId` → Relancer un message en échec.  

### 🔀 **Gestion des Files d’Attente**
- `GET /queues` → Liste des files d’attente actives.  
- `POST /queues/create` → Création d’une nouvelle file d’attente.  
- `DELETE /queues/:queueId` → Suppression d’une file d’attente.

## 🚀 Optimisation et Sécurité
✅ **Persistance des messages** pour éviter la perte d’événements critiques.  
✅ **Sécurisation des canaux** via TLS et authentification des producteurs/consommateurs.  
✅ **Surveillance des latences** pour éviter l’engorgement des files d’attente.  
✅ **Gestion automatique des erreurs et des retries** en cas d’échec de traitement.  

---