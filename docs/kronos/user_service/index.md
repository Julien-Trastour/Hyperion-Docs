# 📌 User-Service - Gestion des Utilisateurs et des Rôles

## 🚀 Rôle
`user-service` est responsable de la **gestion des utilisateurs, des rôles et des permissions** dans l’écosystème Kronos. Il permet l’enregistrement, la modification et la suppression des utilisateurs, ainsi que la gestion avancée des rôles et droits d’accès.

## 🔑 Fonctions principales
✅ **Création, modification et suppression des utilisateurs**.  
✅ **Gestion des rôles et permissions** (RBAC - Role-Based Access Control).  
✅ **Association des utilisateurs aux organisations et services**.  
✅ **Vérification des accès pour les autres microservices**.  
✅ **Synchronisation avec `auth-service` pour l’authentification**.  
✅ **Stockage des préférences utilisateur** (langue, notifications, etc.).  
✅ **Vérification et gestion dynamique des permissions** via JWT.  
✅ **Support des logs d’activité et tracking des mises à jour (`createdBy`, `updatedBy`).**  
✅ **Nettoyage automatique des données de test après exécution des tests.**  

## 🛠 Technologies utilisées
- **Node.js + Express** pour l’API REST.  
- **PostgreSQL + Prisma** pour le stockage des utilisateurs et rôles.  
- **Argon2** pour le hachage des mots de passe.  
- **JWT/OAuth2** via `auth-service` pour la gestion des sessions.  
- **Redis** pour la mise en cache des profils utilisateurs.  
- **Jest + Supertest** pour les tests unitaires et d’intégration.  

## 🔗 Interactions avec les autres microservices
| 📌 Microservice | 🔄 Interaction avec `user-service` |
|----------------|----------------------------------|
| **[auth-service](../auth_service/index.md)** | Vérification des accès, gestion des sessions et authentification JWT |
| **[router-service](../router_service/index.md)** | Vérification des permissions pour l’accès aux routes |
| **[Ouranos CRM](../../ouranos_crm/ouranos_crm_index.md)** | Gestion des accès clients et abonnements |
| **[Ouranos Desk](../../ouranos_desk/ouranos_desk_index.md)** | Gestion des techniciens et droits d’administration |
| **[Hypérion](../../hyperion/hyperion_index.md)** | Association des utilisateurs aux robots |
| **[Hermès](../../hermes/hermes_index.md)** | Gestion des comptes abonnés |

## 📡 Endpoints API Principaux
### 🔑 **Gestion des Utilisateurs**
- `POST /users` → Création d’un nouvel utilisateur.  
- `GET /users/:id` → Récupération d’un utilisateur par ID.  
- `PATCH /users/:id` → Mise à jour des informations utilisateur.  
- `DELETE /users/:id` → Suppression d’un utilisateur.  
- `GET /users` → Récupération de la liste des utilisateurs.  
- `PATCH /users/:id/roles` → Attribution ou modification d’un rôle utilisateur.  

### 🔏 **Gestion des Rôles et Permissions**
- `GET /roles` → Liste des rôles disponibles.  
- `POST /roles` → Création d’un rôle personnalisé.  
- `DELETE /roles/:id` → Suppression d’un rôle.  
- `GET /permissions` → Liste des permissions disponibles.  
- `PATCH /users/:id/permissions` → Mise à jour des permissions d’un utilisateur.  

## 🔍 Tests et Sécurité
✅ **JWT Vérifié sur chaque requête sécurisée.**  
✅ **Tests Jest validés avec couverture complète des endpoints.**  
✅ **Middleware `checkPermission` amélioré avec extraction et vérification du token.**  
✅ **Nettoyage complet de la base de données après chaque test.**  
✅ **Contrôle d’accès basé sur les permissions stockées en base.**  

---