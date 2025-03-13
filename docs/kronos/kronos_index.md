# 📌 Kronos - API Centralisée pour la Communication entre Microservices

## 🚀 Rôle
Kronos est **le cœur des communications** entre tous les microservices du système Hypérion. Il sert de **point central** pour l’authentification, la gestion des utilisateurs, la centralisation des logs, la mise en cache des données et la coordination des échanges inter-services. 

Son architecture modulaire permet une **scalabilité maximale** et une **gestion optimisée des flux de données** entre les différents services.

## 📂 Composition interne
Kronos est lui-même partitionné en plusieurs **sous-microservices**, chacun ayant un rôle spécifique :

| 📌 Microservice         | 🚀 Rôle principal |
|----------------------|---------------|
| **[`auth-service`](./auth_service/index.md)**      | Gestion de l’authentification et des permissions (JWT, OAuth) |
| **[`user-service`](./user_service/index.md)**      | Gestion des utilisateurs, rôles et permissions |
| **[`log-service`](./log_service/index.md)**       | Centralisation et stockage des logs (ElasticSearch) |
| **[`cache-service`](./cache_service/index.md)**     | Cache Redis pour optimiser les accès aux données |
| **[`router-service`](./router_service/index.md)**    | API Gateway pour acheminer les requêtes vers les bons services |
| **[`messaging-service`](./messaging_service/index.md)** | Message Broker (Kafka/RabbitMQ) pour la communication inter-services |
| **[`database`](./database/index.md)**          | Base de données PostgreSQL centralisée pour l’ensemble de Kronos |
| **[`docs`](./docs/index.md)**              | Documentation et spécifications techniques |

## 📊 Fonctions principales
✅ **API REST et WebSockets** pour la transmission des données entre services.  
✅ **Gestion des droits d’accès et authentifications** via [`auth-service`](./auth_service/index.md) (JWT, OAuth).  
✅ **Gestion des utilisateurs et rôles** via [`user-service`](./user_service/index.md) (RBAC, ACL).  
✅ **Stockage et gestion des logs** via [`log-service`](./log_service/index.md) (ElasticSearch + Kibana).  
✅ **Optimisation des accès aux données** avec [`cache-service`](./cache_service/index.md) (Redis).  
✅ **Aiguillage intelligent des requêtes API** via [`router-service`](./router_service/index.md) (Nginx + API Gateway).  
✅ **Communication inter-services** avec [`messaging-service`](./messaging_service/index.md) (Kafka/RabbitMQ).  
✅ **Stockage centralisé et relations optimisées** via [`database`](./database/index.md) (PostgreSQL).  

## 🛠 Technologies utilisées
- **Node.js + Express** pour les API REST.  
- **PostgreSQL** pour la gestion des utilisateurs et des données principales.  
- **ElasticSearch + Kibana** pour le stockage, la recherche et la visualisation des logs.  
- **Redis** pour la mise en cache et l’optimisation des performances.  
- **Kafka / RabbitMQ** pour la communication événementielle et le message brokering.  
- **Docker + Docker Compose** pour le déploiement des microservices et leur orchestration.  
- **Nginx** pour le reverse proxy et l’équilibrage de charge via [`router-service`](./router_service/index.md).  

## 🔗 Interactions avec les autres microservices
📌 **Kronos → [Ouranos CRM](../ouranos_crm/ouranos_crm_index.md)** : Gestion des utilisateurs, abonnements et accès clients.  
📌 **Kronos → [Ouranos Desk](../ouranos_desk/ouranos_desk_index.md)** : Coordination des échanges entre le support et les autres services.  
📌 **Kronos → [Gaia](../gaia/gaia_index.md)** : Centralisation des logs, alertes et surveillance des systèmes.  
📌 **Kronos → [Hypérion](../hyperion/hyperion_index.md)** : Transmission des mises à jour, diagnostics et commandes à distance.  
📌 **Kronos → [Héphaïstos](../hephaistos/hephaistos_index.md)** : Suivi des commandes de production et gestion des accès à l’usine.  

## 🚀 Déploiement et prochaines étapes
📌 **Mise en place des spécifications techniques et des endpoints API pour chaque service.**  
📌 **Configuration et documentation des stratégies de scaling et de sécurité.**  
📌 **Tests de charge et monitoring via Prometheus/Grafana.**  

🚀 **Kronos est le socle de l’écosystème Hypérion, son optimisation est cruciale pour garantir une infrastructure robuste et scalable.**
