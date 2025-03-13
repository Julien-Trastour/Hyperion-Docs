# 📌 JWT - Gestion des Tokens d'Authentification

## 🚀 Rôle
JSON Web Token (**JWT**) est utilisé dans `auth-service` pour gérer **l’authentification des utilisateurs** et **la validation des accès aux microservices**.

## 🔑 Fonctionnement
1️⃣ **Connexion utilisateur** → Un utilisateur s’authentifie avec son identifiant/mot de passe.  
2️⃣ **Génération du JWT** → Un token signé est créé et renvoyé au client.  
3️⃣ **Utilisation du JWT** → Le client envoie ce token avec chaque requête pour prouver son identité.  
4️⃣ **Validation du JWT** → Les microservices vérifient la signature et les permissions associées.  

## 🛠 Structure d’un Token JWT
Un token JWT est composé de **trois parties** :
```
HEADER.PAYLOAD.SIGNATURE
```
Exemple :
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNjY0NTU1NSwiZXhwIjoxNjI2NjQ5MTU1fQ.PMCqQ7dOdDjsyT7s5pVxWwhg6Jv8hQc9bvV7x9dO51g
```
- **Header** : Algorithme et type de token (ex: HS256, RS256)  
- **Payload** : Données utilisateur (ID, rôle, expiration, etc.)  
- **Signature** : Sécurise le token pour éviter les falsifications  

## 🔗 Interactions avec les microservices
| 📌 Microservice | 🔄 Rôle avec JWT |
|----------------|-------------------|
| **[auth-service](../auth_service/index.md)** | Gère la génération et validation des tokens |
| **[user-service](../user_service/index.md)** | Associe les utilisateurs aux tokens |
| **[router-service](../router_service/index.md)** | Vérifie les permissions via JWT |

## 📡 Endpoints API
- `POST /auth/login` → Génération du JWT après authentification.  
- `POST /auth/refresh` → Rafraîchissement du token d’accès.  
- `POST /auth/logout` → Invalidation du token.  

## 🔐 Sécurité et Bonnes Pratiques
✅ **Expiration des tokens** → Éviter les tokens à durée infinie.  
✅ **Signature robuste** → Utiliser HS256 ou RS256.  
✅ **Stockage sécurisé** → Ne pas stocker les tokens en localStorage côté client.  

---