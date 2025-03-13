# 📌 Permissions et Rôles - User-Service

## 🚀 Rôle
La gestion des **permissions et rôles** dans `user-service` est basée sur le modèle **RBAC (Role-Based Access Control)**. Cela permet de **contrôler finement les accès** en attribuant des droits spécifiques à chaque utilisateur selon son rôle.

## 🔑 Modèle RBAC
RBAC repose sur **trois concepts principaux** :
1️⃣ **Utilisateurs** → Entités authentifiées dans le système.  
2️⃣ **Rôles** → Groupes d’autorisations attribués aux utilisateurs.  
3️⃣ **Permissions** → Actions spécifiques qu’un rôle peut effectuer.  

Exemple de relation RBAC :
```
Utilisateur → Rôle → Permissions
```
```
Alice → Administrateur → Peut gérer les utilisateurs
Bob → Technicien → Peut accéder aux tickets SAV
Charlie → Client → Peut voir son abonnement
```

## 📂 Liste des Rôles et Permissions
| 📌 Rôle | 🔑 Permissions |
|----------------|----------------------------------|
| **Super-Admin** | Accès total à tous les systèmes, gestion des paramètres critiques |
| **Admin** | Gérer les utilisateurs, rôles, logs, accès API, monitoring général |
| **Technicien** | Accéder aux tickets SAV, gérer les interventions |
| **Client** | Voir son abonnement, gérer son profil, contacter le support |
| **Robot** | Envoyer des diagnostics, récupérer des mises à jour, exécuter des commandes API |
| **Vendeur** | Accéder aux informations clients, gérer les ventes |
| **Manager** | Superviser les techniciens et vendeurs, analyser les performances |

## 📡 Endpoints API
- `GET /roles` → Liste des rôles existants.  
- `POST /roles` → Création d’un rôle personnalisé.  
- `DELETE /roles/:id` → Suppression d’un rôle.  
- `GET /permissions` → Liste des permissions disponibles.  
- `PATCH /users/:id/roles` → Attribution d’un rôle à un utilisateur.  

## 🔐 Sécurité et Bonnes Pratiques
✅ **Principe du moindre privilège** → Un utilisateur n’a accès qu’aux actions nécessaires.  
✅ **Rôles hiérarchiques** → Permet de déléguer certaines responsabilités.  
✅ **Journaux d’accès** → Chaque action administrative est enregistrée pour audit.  

---