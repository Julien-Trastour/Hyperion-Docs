# 📌 OAuth - Authentification via Tiers de Confiance

## 🚀 Rôle
OAuth2 est utilisé dans `auth-service` pour permettre **l’authentification des utilisateurs via des services tiers** (Google, GitHub, etc.). Il permet aux utilisateurs de se connecter **sans mot de passe**, en utilisant un fournisseur d’identité externe.

## 🔑 Fonctionnement
1️⃣ **Demande d’authentification** → L’utilisateur clique sur "Se connecter avec Google".  
2️⃣ **Redirection vers le fournisseur OAuth** → L’utilisateur est redirigé vers Google/GitHub/etc.  
3️⃣ **Autorisation de l’accès** → L’utilisateur accorde l’accès à son compte.  
4️⃣ **Récupération du token OAuth** → Le fournisseur renvoie un **token d’accès** à `auth-service`.  
5️⃣ **Vérification et création de session** → `auth-service` valide le token et génère un JWT pour l’utilisateur.  

## 🔗 Interactions avec les microservices
| 📌 Microservice | 🔄 Rôle avec OAuth |
|----------------|-------------------|
| **[auth-service](../auth_service/index.md)** | Gère l’authentification OAuth et la génération des JWT |
| **[user-service](../user_service/index.md)** | Associe les utilisateurs aux comptes OAuth |
| **[router-service](../router_service/index.md)** | Vérifie les permissions via JWT après OAuth |

## 📡 Endpoints API
- `GET /auth/oauth/google` → Redirige vers Google pour authentification.  
- `GET /auth/oauth/github` → Redirige vers GitHub pour authentification.  
- `POST /auth/oauth/callback` → Vérifie le token OAuth et génère un JWT.  

## 🔐 Sécurité et Bonnes Pratiques
✅ **Ne jamais stocker les tokens OAuth côté client**.  
✅ **Limiter les permissions demandées au strict nécessaire**.  
✅ **Utiliser HTTPS pour sécuriser les échanges de tokens**.  

---