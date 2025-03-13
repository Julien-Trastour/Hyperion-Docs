# 📌 ElasticSearch - Indexation et Recherche des Logs

## 🚀 Rôle
ElasticSearch est utilisé dans `log-service` pour **indexer, rechercher et analyser les logs** des microservices de Kronos. Il permet une **recherche rapide et efficace** des événements enregistrés.

## 🔑 Fonctionnalités clés
✅ **Indexation automatique des logs en temps réel**.  
✅ **Requêtes avancées pour rechercher des erreurs spécifiques**.  
✅ **Agrégations pour l’analyse des tendances et des anomalies**.  
✅ **Intégration avec Kibana pour la visualisation des logs**.  
✅ **Support du scaling horizontal pour gérer un grand volume de logs**.  

## 🛠 Technologies utilisées
- **ElasticSearch** pour le stockage et l’indexation.  
- **Kibana** pour la visualisation et l’analyse des logs.  
- **Logstash/Filebeat** pour la collecte et la transmission des logs.  
- **Node.js + Winston** pour générer et structurer les logs côté application.  

## 📡 Requêtes API ElasticSearch
### 🔍 **Recherche de Logs**
- `GET /logs/search?q=error` → Recherche des logs contenant "error".  
- `GET /logs/search?level=ERROR` → Recherche des logs de niveau "ERROR".  
- `GET /logs/search?service=auth-service` → Recherche des logs liés à `auth-service`.  

### 📊 **Agrégations et Statistiques**
- `GET /logs/stats/errors` → Nombre d’erreurs par service.  
- `GET /logs/stats/requests` → Volume des requêtes traitées par heure.  

## 🚀 Optimisation et Sécurité
✅ **Rétention des logs configurable** pour éviter une surcharge.  
✅ **Chiffrement des données sensibles dans les logs**.  
✅ **Indexation optimisée avec mappings adaptés** pour améliorer la recherche.  
✅ **Gestion des accès aux logs via API et permissions restreintes**.  

---