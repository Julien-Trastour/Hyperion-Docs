# 📌 Cache-Service - Optimisation des Accès aux Données

## 🚀 Rôle
`cache-service` est responsable de **l’optimisation des performances** en stockant temporairement des données fréquemment utilisées. Il permet **de réduire la charge sur la base de données**, d’améliorer **la vitesse de réponse des API** et d’optimiser **l’expérience utilisateur**.

## 🔑 Fonctions principales
✅ **Mise en cache des requêtes fréquentes** pour limiter les accès à la base de données.  
✅ **Stockage temporaire des sessions utilisateurs** pour accélérer l’authentification.  
✅ **Gestion du cache des permissions et rôles** pour `user-service`.  
✅ **Équilibrage entre persistance et expiration automatique des données**.  
✅ **Suppression intelligente du cache** pour éviter l’obsolescence des données.  

## 🛠 Technologies utilisées
- **Redis** pour le stockage en mémoire haute performance.  
- **Node.js + ioredis** pour l’intégration avec Kronos.  
- **TTL (Time-To-Live)** pour gérer l’expiration automatique des entrées en cache.  
- **Cluster Redis (optionnel)** pour la haute disponibilité et la scalabilité.  

## 🔗 Interactions avec les autres microservices
| 📌 Microservice | 🔄 Interaction avec `cache-service` |
|----------------|----------------------------------|
| **[auth-service](../auth_service/index.md)** | Mise en cache des sessions et des tokens JWT |
| **[user-service](../user_service/index.md)** | Stockage temporaire des permissions et rôles |
| **[router-service](../router_service/index.md)** | Optimisation des routes fréquemment utilisées |
| **[Ouranos Desk](../../ouranos_desk/ouranos_desk_index.md)** | Accélération de l’accès aux tickets SAV |
| **[Hypérion](../../hyperion/hyperion_index.md)** | Cache des derniers diagnostics envoyés |

## 📡 Endpoints API Principaux
### 🗄️ **Gestion du Cache**
- `POST /cache/set` → Ajout d’une clé en cache.  
- `GET /cache/get/:key` → Récupération d’une valeur en cache.  
- `DELETE /cache/clear/:key` → Suppression d’une entrée spécifique.  
- `DELETE /cache/flush` → Vidage complet du cache.  

## 🚀 Stratégie de Cache
✅ **Expiration automatique** avec TTL pour éviter les données obsolètes.  
✅ **Mise à jour proactive** en cas de modification des données sources.  
✅ **Priorisation des données critiques** pour optimiser l’utilisation de la mémoire.  
✅ **Sécurisation des accès au cache** pour éviter les corruptions de données.  

---