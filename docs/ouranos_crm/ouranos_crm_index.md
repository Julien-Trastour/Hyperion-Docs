# 📌 Ouranos CRM - Gestion de la Relation Client

## 🚀 Rôle
Ouranos CRM est le **cœur de la gestion client**. Il permet de suivre les **abonnements, contrats et historiques** des clients, ainsi que la **facturation et la gestion des paiements**. Il s’intègre avec **Hermès** pour offrir aux abonnés un accès à leurs informations personnelles.

## 📊 Fonctions principales
✅ **Gestion des clients et abonnements** (création, modification, suivi).  
✅ **Suivi des contrats** et gestion des renouvellements.  
✅ **Facturation et paiements** (historique des transactions, relances automatiques).  
✅ **Gestion des licences et accès aux services**.  
✅ **Intégration avec Hermès** pour permettre aux clients de consulter leur compte.  

## ⚠️ Ce que Ouranos CRM ne gère PAS
❌ **Les tickets de support et demandes clients** → Gérés par Ouranos Desk.  
❌ **Le suivi technique des robots** → Géré par Gaia et Ouranos Desk.  

## 🔗 Interactions avec les autres microservices
📌 **Ouranos CRM → Hermès** : Synchronisation des abonnements et factures pour affichage aux abonnés.  
📌 **Ouranos CRM → Kronos** : Gestion centralisée des accès et authentifications.  
📌 **Ouranos CRM → Ouranos Desk** : Transmission des informations clients pour le support, mais **ne gère pas directement les tickets**.  

📌 **Prochaine étape** : Définir les spécifications techniques et les endpoints API. 🚀
