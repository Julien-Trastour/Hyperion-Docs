# 📌 Hypérion - API Embarquée dans le Robot

## 🚀 Rôle
L’API Hypérion assure la **communication entre le robot et les autres microservices**. Elle est responsable de la **transmission des diagnostics**, de la **gestion des alertes**, des **mises à jour du robot**, et de la liaison entre **le robot et le compte utilisateur**.

## 📊 Fonctions principales
✅ **Transmission des diagnostics** vers Ouranos Desk et Gaia.  
✅ **Envoi d’alertes en cas de problème détecté** (pannes, anomalies, erreurs).  
✅ **Réception et gestion des mises à jour du firmware** envoyées depuis Kronos.  
✅ **Accès à distance pour le dépannage et la maintenance** via Ouranos Desk.  
✅ **Liaison entre le robot et le compte utilisateur** via Hermès et Ouranos CRM.  

## ⚙️ Interactions avec les autres microservices
📌 **Hypérion → Ouranos Desk** : Envoi des diagnostics et état du robot.  
📌 **Hypérion → Gaia** : Transmission des logs et alertes système.  
📌 **Hypérion → Kronos** : Réception des mises à jour et commandes à distance.  
📌 **Hypérion → Hermès** : Association du robot à un compte utilisateur.  

## 🔗 Mode de fonctionnement
- **Hypérion envoie automatiquement les diagnostics et alertes** aux services concernés.  
- **Il ne prend pas d’ordres directs des autres services**, sauf pour les mises à jour et le dépannage à distance via Kronos.  
- **Il assure une communication fiable et continue** entre le robot et l’environnement cloud.  

📌 **Prochaine étape** : Définir les spécifications techniques et les endpoints API. 🚀
