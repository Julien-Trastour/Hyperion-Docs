# 📌 Schéma de la Base de Données - Kronos

## 🚀 Objectif
Le schéma relationnel de `database` définit la structure des données utilisées par **tous les sous-microservices de Kronos**. Il garantit **l’intégrité, la performance et la sécurité** des informations stockées.

## 📂 Tables par Microservice

### 1️⃣ **`auth-service`** *(Gestion de l’authentification et des tokens)*
```sql
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    token TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP
);
```
✅ **Stocke les sessions utilisateurs** (JWT, OAuth, expiration).

### 2️⃣ **`user-service`** *(Gestion des utilisateurs et des rôles)*
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    téléphone VARCHAR(20) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role_id UUID REFERENCES roles(id) ON DELETE SET NULL,
    created_by UUID REFERENCES users(id),
    updated_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE permissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE role_permissions (
    role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
    permission_id UUID REFERENCES permissions(id) ON DELETE CASCADE,
    PRIMARY KEY (role_id, permission_id)
);
```
✅ **Associe les utilisateurs à leurs rôles et permissions avec une table de liaison.**

### 3️⃣ **`log-service`** *(Stockage des logs pour Gaia)*
```sql
CREATE TABLE logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_name VARCHAR(255) NOT NULL,
    level VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    user_id UUID REFERENCES users(id),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
✅ **Stocke les logs générés par les microservices et les relie aux utilisateurs.**

### 4️⃣ **`cache-service`** *(Stockage temporaire des données)*
```sql
CREATE TABLE cache (
    key VARCHAR(255) PRIMARY KEY,
    value TEXT NOT NULL,
    expires_at TIMESTAMP
);
```
✅ **Permet de stocker des données temporairement** (sessions, permissions, etc.).

### 5️⃣ **`router-service`** *(Gestion des routes API et des quotas d’accès)*
```sql
CREATE TABLE routes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    path VARCHAR(255) UNIQUE NOT NULL,
    service VARCHAR(255) NOT NULL,
    method VARCHAR(10) NOT NULL
);

CREATE TABLE rate_limits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    route_id UUID REFERENCES routes(id),
    request_count INT DEFAULT 0,
    last_request TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
✅ **Permet de limiter l’accès à certaines routes API**.

### 6️⃣ **`messaging-service`** *(Gestion des files d’attente Kafka/RabbitMQ)*
```sql
CREATE TABLE message_queue (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    topic VARCHAR(255) NOT NULL,
    payload TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'pending'
);
```
✅ **Stocke temporairement les messages en attente de traitement**.

### 7️⃣ **`database`** *(Stockage des backups et requêtes internes)*
```sql
CREATE TABLE backups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    file_path TEXT NOT NULL
);
```
✅ **Gère les sauvegardes automatiques de la base**.

## 🔗 Relations et Contraintes
- **Chaque utilisateur** appartient à un **rôle unique** (`users.role_id → roles.id`).
- **Les permissions sont stockées dans une table dédiée et liées aux rôles via `role_permissions`**.
- **Les logs sont reliés aux utilisateurs et microservices**.
- **Les sessions expirent automatiquement après un certain délai**.
- **Les quotas d’API sont suivis par utilisateur et par route**.
- **Les messages non traités restent en attente dans `message_queue`**.

## 🚀 Optimisation et Sécurité
✅ **UUID utilisé comme clé primaire pour une meilleure évolutivité**.  
✅ **Indexation des champs fréquemment recherchés (`email`, `username`, `service_name`)**.  
✅ **Chiffrement des mots de passe avec Argon2**.  
✅ **Expiration automatique des sessions inactives**.  
✅ **Partitionnement des logs pour améliorer les performances**.  
✅ **Monitoring des requêtes lentes et analyse des index SQL**.  
✅ **Respect des principes de `Least Privilege` pour la gestion des permissions.**  

---
