# 📌 Log-Service - Préparation et Centralisation des Logs

## 🚀 Rôle
`log-service` est responsable de **la collecte, de l’indexation et du stockage des logs** générés par les microservices de Kronos. Son objectif est de **préparer et structurer les données** pour que Gaia puisse les analyser efficacement.

## 🔑 Fonctions principales
✅ **Collecte et stockage des logs** provenant des autres microservices.  
✅ **Indexation et structuration des logs** avec ElasticSearch pour un accès rapide.  
✅ **Uniformisation des formats de logs** afin d’assurer une analyse efficace par Gaia.  
✅ **Gestion des niveaux de logs** (INFO, WARN, ERROR, DEBUG) pour prioriser les événements.  
✅ **Transmission des logs à Gaia pour analyse et détection des anomalies**.  
✅ **Rotation et purge automatique des logs pour optimiser l’espace de stockage**.  

## 🛠 Technologies utilisées
- **ElasticSearch** pour l’indexation et la structuration des logs.  
- **Kibana** pour la visualisation et l’exploration des logs.  
- **Logstash/Filebeat** pour la collecte et le pré-traitement des logs.  
- **Node.js + Winston** pour normaliser les logs côté application.  
- **RabbitMQ/Kafka (optionnel)** pour la transmission des logs en temps réel.  

## 🔗 Interactions avec les autres microservices
| 📌 Microservice | 🔄 Interaction avec `log-service` |
|----------------|----------------------------------|
| **[Kronos](../kronos_index.md)** | Envoi des logs de l’API centrale et des microservices |
| **[auth-service](../auth_service/index.md)** | Stockage des logs d’authentification et tentatives de connexion |
| **[user-service](../user_service/index.md)** | Journalisation des actions utilisateurs |
| **[router-service](../router_service/index.md)** | Traçabilité des requêtes API et erreurs |
| **[Ouranos Desk](../../ouranos_desk/ouranos_desk_index.md)** | Accès aux logs pour le dépannage technique |
| **[Gaia](../../gaia/gaia_index.md)** | Récupération et analyse des logs pour la détection des anomalies |

## 📡 Endpoints API Principaux
### 📜 **Gestion des Logs**
- `POST /logs` → Envoi d’un log au service.  
- `GET /logs` → Récupération des logs enregistrés.  
- `GET /logs/:id` → Consultation d’un log spécifique.  
- `DELETE /logs/:id` → Suppression d’un log (via politique de rétention).  

### 🔍 **Pré-traitement et Structuration des Logs**
- `GET /logs/search?q=query` → Recherche avancée via ElasticSearch.  
- `GET /logs/stats` → Statistiques sur les types d’événements enregistrés.  
- `POST /logs/normalize` → Uniformisation des logs avant transmission à Gaia.  

## 🚀 Optimisation et Sécurité
✅ **Chiffrement des logs sensibles** pour éviter l’exposition de données critiques.  
✅ **Accès restreint aux logs non-anonymisés** pour protéger la confidentialité.  
✅ **Rotation automatique des logs** pour éviter une surcharge du stockage.  
✅ **Filtrage des logs avant transmission à Gaia** pour éviter un afflux massif de données inutiles.  

---
