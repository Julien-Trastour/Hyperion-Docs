# 📌 Load Balancing - Équilibrage de Charge dans `router-service`

## 🚀 Objectif
L’équilibrage de charge permet de **répartir les requêtes** de manière optimale entre plusieurs instances de microservices afin d’assurer **performance, disponibilité et résilience**.

## 🔑 Stratégies d’Équilibrage de Charge
### 1️⃣ **Round Robin** *(Par défaut)*
✅ Répartition égale des requêtes entre les instances disponibles.  
✅ Simple à implémenter, efficace pour des charges équilibrées.  
```nginx
upstream backend {
    server microservice1:3000;
    server microservice2:3000;
}
server {
    location /api/ {
        proxy_pass http://backend;
    }
}
```

### 2️⃣ **Least Connections** *(Préféré si certaines requêtes sont longues)*
✅ Redirige les nouvelles connexions vers les instances les moins occupées.  
✅ Idéal pour des microservices ayant des temps de traitement variables.  
```nginx
upstream backend {
    least_conn;
    server microservice1:3000;
    server microservice2:3000;
}
```

### 3️⃣ **IP Hashing** *(Préserve la cohérence des sessions utilisateur)*
✅ Redirige un utilisateur donné vers **la même instance** à chaque requête.  
✅ Utile pour éviter la perte de session sur des services nécessitant une continuité.  
```nginx
upstream backend {
    ip_hash;
    server microservice1:3000;
    server microservice2:3000;
}
```

### 4️⃣ **Load Balancing Dynamique avec Traefik** *(Option avancée)*
✅ Traefik détecte **automatiquement les nouvelles instances** et ajuste le load balancing.  
✅ Intégration avec Kubernetes pour **auto-scaling**.  
```toml
[http.services]
  [http.services.api.loadBalancer]
    [[http.services.api.loadBalancer.servers]]
      url = "http://microservice1:3000"
    [[http.services.api.loadBalancer.servers]]
      url = "http://microservice2:3000"
```

## 📊 Surveillance et Optimisation
✅ **Monitoring avec Prometheus/Grafana** pour visualiser la répartition de charge.  
✅ **Détection automatique des instances défaillantes** et réallocation des requêtes.  
✅ **Ajustement des paramètres Nginx** pour éviter la surcharge d’une instance.

## 🚀 Bonnes Pratiques
✅ Toujours utiliser **un équilibrage de charge** pour assurer la scalabilité.  
✅ **Configurer une stratégie adaptée** selon le type de microservice.  
✅ **Surveiller la latence et la charge** pour ajuster dynamiquement les ressources.  

---