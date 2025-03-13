# 📌 Auth-Service - Gestion de l'Authentification et des Permissions

## 🚀 Rôle
`auth-service` est le microservice responsable de **l’authentification des utilisateurs et des services** au sein de l’écosystème Kronos. Il gère la **création, validation et expiration des tokens** d’accès et assure la **sécurisation des endpoints API** via des permissions granulaires.

## 🔐 Fonctions principales
✅ **Authentification des utilisateurs** via JWT et OAuth2.  
✅ **Gestion des permissions et rôles** (RBAC - Role-Based Access Control).  
✅ **Gestion des sessions et rafraîchissement des tokens**.  
✅ **Vérification et validation des accès pour les autres microservices**.  
✅ **Support de l’authentification multi-facteurs (MFA) en option**.  
✅ **Journalisation des tentatives de connexion et détection des accès suspects**.  

## 🛠 Technologies utilisées
- **Node.js + Express** pour l’API REST d’authentification.  
- **JWT (JSON Web Token)** pour la gestion des sessions et permissions.  
- **OAuth2/OpenID Connect** pour l’authentification externe.  
- **PostgreSQL** pour stocker les utilisateurs et leurs rôles.  
- **Redis** pour la gestion des sessions et des tokens de rafraîchissement.  
- **argon2** pour le hachage des mots de passe.  
- **2FA/MFA (optionnel)** via TOTP (Time-Based One-Time Password).  

## 🔗 Interactions avec les autres microservices
| 📌 Microservice | 🔄 Interaction avec `auth-service` |
|----------------|----------------------------------|
| **[Kronos](../kronos_index.md)** | Fournit l'authentification et vérifie les accès aux services |
| **[User-Service](../user_service/index.md)** | Gestion des utilisateurs et de leurs permissions |
| **[Router-Service](../router_service/index.md)** | Contrôle l'accès aux routes API via JWT |
| **[Ouranos CRM](../../ouranos_crm/ouranos_crm_index.md)** | Vérification des accès clients et abonnements |
| **[Ouranos Desk](../../ouranos_desk/ouranos_desk_index.md)** | Authentification des techniciens et accès SAV |
| **[Hypérion](../../hyperion/hyperion_index.md)** | Vérification des accès utilisateurs pour le contrôle du robot |
| **[Hermès](../../hermes/hermes_index.md)** | Authentification des abonnés pour leur espace client |

## 🛠 Endpoints API Principaux
### 🔑 **Authentification et Sessions**
- `POST /auth/login` → Connexion et génération de token JWT.  
- `POST /auth/refresh` → Rafraîchissement du token d’accès.  
- `POST /auth/logout` → Déconnexion et invalidation du token.  

### 🔏 **Gestion des Permissions et Rôles**
- `GET /auth/roles` → Récupération des rôles disponibles.  
- `POST /auth/roles` → Création d’un rôle personnalisé.  
- `DELETE /auth/roles/:id` → Suppression d’un rôle.  

### 🔐 **Sécurité et MFA**
- `POST /auth/mfa/setup` → Activation du MFA pour un utilisateur.  
- `POST /auth/mfa/verify` → Vérification du code MFA.  

## 🚀 Sécurité et Bonnes Pratiques
- **Stockage sécurisé des mots de passe** avec bcrypt.  
- **Expiration et rotation automatique des tokens** pour réduire les risques.  
- **Journalisation des connexions** pour détecter les tentatives suspectes.  
- **Mise en cache avec Redis** pour optimiser la gestion des sessions.  

---
