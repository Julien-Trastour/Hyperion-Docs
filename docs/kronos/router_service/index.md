# 📌 Router-Service - API Gateway et Routage des Requêtes

## 🚀 Rôle
`router-service` est l’**API Gateway** de Kronos. Il gère **l’acheminement des requêtes** vers les microservices appropriés, **sécurise l’accès aux endpoints**, et **équilibre la charge** entre les services pour optimiser la performance.

## 🔑 Fonctions principales
✅ **Routage des requêtes API** en fonction des endpoints.  
✅ **Gestion des permissions et authentification** via JWT/OAuth.  
✅ **Équilibrage de charge** entre les instances de microservices.  
✅ **Filtrage et validation des requêtes** pour éviter les attaques.  
✅ **Mise en cache des réponses courantes** pour accélérer les temps de réponse.  
✅ **Gestion des quotas et protection contre l’abus d’API (Rate Limiting).**  

## 🛠 Technologies utilisées
- **Nginx** pour le reverse proxy et l’équilibrage de charge.  
- **Node.js + Express** pour la logique API Gateway.  
- **JWT/OAuth2** pour la gestion des accès.  
- **Redis** pour la mise en cache des routes et le contrôle du Rate Limiting.  
- **Traefik (optionnel)** pour la gestion avancée des règles de routage.

## 🔗 Interactions avec les autres microservices
| 📌 Microservice | 🔄 Interaction avec `router-service` |
|----------------|----------------------------------|
| **[auth-service](../auth_service/index.md)** | Vérification des tokens JWT et permissions |
| **[user-service](../user_service/index.md)** | Gestion des accès utilisateurs et des rôles |
| **[log-service](../log_service/index.md)** | Enregistrement des logs des requêtes API |
| **[cache-service](../cache_service/index.md)** | Mise en cache des requêtes fréquentes |
| **[Ouranos CRM](../../ouranos_crm/ouranos_crm_index.md)** | Routage des requêtes client |
| **[Hypérion](../../hyperion/hyperion_index.md)** | Redirection des commandes vers le robot |

## 📡 Endpoints API Principaux
### 🔀 **Gestion du Routage**
- `GET /route/status` → Vérification de l’état des services.  
- `POST /route/register` → Ajout dynamique d’une nouvelle route.  
- `DELETE /route/remove/:id` → Suppression d’une route.

### 🔐 **Sécurisation des API**
- `GET /auth/validate` → Vérification d’un token JWT.  
- `GET /rate-limit` → Statut du contrôle des quotas API.  

## 🚀 Optimisation et Sécurité
✅ **Reverse proxy sécurisé** pour protéger les microservices.  
✅ **Détection des requêtes suspectes** et blocage automatique.  
✅ **Scalabilité avec équilibrage de charge** sur plusieurs instances.  
✅ **Surveillance et monitoring des requêtes** avec Prometheus/Grafana.  

---