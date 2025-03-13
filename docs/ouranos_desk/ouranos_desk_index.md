# 📌 Ouranos Desk - Gestion du SAV & Monitoring Individuel des Robots

## 🚀 Rôle
Ouranos Desk est le **centre de gestion du service après-vente (SAV) et du monitoring des robots**. Il assure le **suivi individuel** de chaque robot en analysant ses diagnostics et détecte **proactivement** les pannes. Lorsqu’un problème est identifié, Ouranos Desk **ouvre automatiquement un ticket d’intervention** avant que le client ne le signale.

## 📊 Fonctions principales
✅ **Surveillance en temps réel de l’état des robots individuellement**.  
✅ **Création et suivi des tickets de maintenance** (ouverture automatique en cas de panne).  
✅ **Gestion des interventions techniques** (planning, techniciens assignés, durée estimée).  
✅ **Consultation de l’historique des problèmes détectés et résolus** pour chaque robot.  
✅ **Accès aux diagnostics envoyés par Hypérion** pour analyse et dépannage.  
✅ **Traitement des alertes générées par Gaia** (si un problème touche plusieurs robots ou services).  
✅ **Gestion des retours et réparations des robots** (suivi logistique, pièces détachées).  

## ⚠️ Ce que Ouranos Desk ne gère PAS
❌ **L’analyse des tendances globales et récurrentes** → Gérée par Gaia.  
❌ **La communication avec le client** → Gérée par Ouranos CRM et Hermès.  

## 🔗 Différence entre Ouranos Desk et Gaia
- **Ouranos Desk** → **Surveille et détecte les pannes individuelles** et ouvre des **tickets automatiques**.  
- **Gaia** → **Surveille les tendances globales** pour **détecter des anomalies à grande échelle** (ex : un bug affectant tous les robots).  

## 🔗 Interactions avec les autres microservices
📌 **Ouranos Desk → Hypérion** : Consultation des diagnostics et logs envoyés.  
📌 **Ouranos Desk → Gaia** : Réception des alertes sur l’état global des systèmes.  
📌 **Ouranos Desk → Kronos** : Centralisation des accès et synchronisation des services.  
📌 **Ouranos Desk → Ouranos CRM** : Association des robots aux clients pour le suivi du SAV.  

📌 **Prochaine étape** : Définir les spécifications techniques et les endpoints API. 🚀