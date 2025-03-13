# 📌 Database - Stockage Centralisé pour Kronos

## 🚀 Rôle
`database` est le microservice responsable **du stockage et de la gestion des données centralisées** pour Kronos. Il assure la **cohérence, la sécurité et la performance des accès aux données** utilisées par les autres microservices. Chaque sous-microservice possède ses propres tables pour garantir **l’indépendance et la scalabilité**.

## 🔑 Fonctions principales
✅ **Stockage des utilisateurs, rôles et permissions** (`user-service`).  
✅ **Gestion des tokens de session et authentification** (`auth-service`).  
✅ **Persistance des logs structurés** pour `log-service`.  
✅ **Indexation et accès optimisé aux données** pour `cache-service`.  
✅ **Gestion des routes et quotas API** pour `router-service`.  
✅ **Stockage des messages en attente** pour `messaging-service`.  
✅ **Sauvegarde et récupération des données critiques**.  

## 🛠 Technologies utilisées
- **PostgreSQL** comme base de données relationnelle principale.  
- **Redis** pour la gestion des sessions et du cache.  
- **Sequelize** (ORM) pour interagir avec PostgreSQL en Node.js.  
- **pgBouncer** pour l’optimisation des connexions SQL.  
- **Prometheus/Grafana** pour la surveillance des performances.

## 🔗 Interactions avec les autres microservices
| 📌 Microservice | 🔄 Interaction avec `database` |
|----------------|----------------------------------|
| **[auth-service](../auth_service/index.md)** | Stockage des utilisateurs et tokens JWT |
| **[user-service](../user_service/index.md)** | Gestion des rôles et permissions |
| **[log-service](../log_service/index.md)** | Stockage des logs persistants |
| **[cache-service](../cache_service/index.md)** | Accès rapide aux données mises en cache |
| **[router-service](../router_service/index.md)** | Consultation des autorisations des endpoints |
| **[messaging-service](../messaging_service/index.md)** | Stockage temporaire des messages |

## 📡 Endpoints API Principaux
### 🔍 **Gestion des Données**
- `GET /db/status` → Vérifier l’état de la base de données.  
- `POST /db/query` → Exécuter une requête SQL (restreinte).  
- `GET /db/backups` → Lister les sauvegardes disponibles.  
- `POST /db/backup` → Lancer une sauvegarde instantanée.  

## 🚀 Optimisation et Sécurité
✅ **Chiffrement des données sensibles en base**.  
✅ **Mise en cache des requêtes lourdes pour optimiser la performance**.  
✅ **Sauvegardes automatiques et récupération rapide**.  
✅ **Monitoring des requêtes lentes et optimisation des index SQL**.  

---