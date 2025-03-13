# 📌 Optimisation du Cache - Stratégies et Bonnes Pratiques

## 🚀 Objectif
L’optimisation du cache est essentielle pour garantir **une meilleure performance**, **une disponibilité rapide des données**, et **une gestion efficace de la mémoire**.

## 🔑 Stratégies de Mise en Cache
### 1️⃣ **Expiration Automatique (TTL - Time-To-Live)**
✅ Définir un **temps d’expiration** sur chaque entrée pour éviter l’accumulation de données obsolètes.  
✅ Exemple : Sessions utilisateur expirant après **30 minutes**.

### 2️⃣ **Cache Éviction (Suppression Intelligente)**
✅ Utiliser des stratégies d’éviction (LRU - Least Recently Used) pour ne garder que les données les plus pertinentes.  
✅ Supprimer automatiquement les données les **moins utilisées** lorsque la mémoire est saturée.

### 3️⃣ **Mise à Jour Proactive du Cache**
✅ **Invalider et recharger** une entrée en cache lorsqu’une modification est détectée dans la base de données.  
✅ Exemple : Lorsqu’un utilisateur met à jour son profil, le cache est rafraîchi immédiatement.

### 4️⃣ **Hiérarchisation des Données en Cache**
✅ Prioriser les données **critiques** (sessions, permissions, diagnostics) pour garantir un accès rapide.  
✅ Stocker temporairement les données **moins sensibles** avec des durées de vie plus courtes.

### 5️⃣ **Partitionnement et Scalabilité**
✅ Utiliser un **Cluster Redis** pour distribuer la charge et garantir la **haute disponibilité**.  
✅ Séparer les caches **par microservice** pour éviter la surcharge d’un seul serveur Redis.

## 🛠 Implémentation Technique
### **1️⃣ Configuration d’un TTL sur Redis**
```js
const redis = require('ioredis');
const cache = new redis();

// Stocker une valeur avec une expiration de 30 minutes
cache.set("session:12345", "tokenData", "EX", 1800);
```

### **2️⃣ Invalidation et Rechargement du Cache**
```js
function updateUserProfile(userId, newData) {
  db.update("users", userId, newData);
  cache.del(`user:${userId}`); // Supprimer l’entrée en cache
  cache.set(`user:${userId}`, JSON.stringify(newData), "EX", 3600); // Recharger
}
```

### **3️⃣ Stratégie LRU pour éviter l’encombrement**
```sh
redis-cli config set maxmemory-policy allkeys-lru
```

## 🔐 Sécurisation du Cache
✅ **Chiffrement des données sensibles** avant stockage en cache.  
✅ **Restriction des accès Redis** aux seuls microservices autorisés.  
✅ **Surveillance des performances** avec Prometheus/Grafana pour détecter les surcharges.

---