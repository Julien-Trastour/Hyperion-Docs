"use strict";(self.webpackChunkhyperion_docs=self.webpackChunkhyperion_docs||[]).push([[1584],{3307:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"kronos/user_service/index","title":"\ud83d\udccc User-Service - Gestion des Utilisateurs et des R\xf4les","description":"\ud83d\ude80 R\xf4le","source":"@site/docs/kronos/user_service/index.md","sourceDirName":"kronos/user_service","slug":"/kronos/user_service/","permalink":"/Hyperion-Docs/docs/kronos/user_service/","draft":false,"unlisted":false,"editUrl":"https://github.com/Julien-Trastour/Hyperion-Docs.git/edit/main/docs/kronos/user_service/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"\ud83d\udccc OAuth - Authentification via Tiers de Confiance","permalink":"/Hyperion-Docs/docs/kronos/auth_service/oauth"},"next":{"title":"\ud83d\udccc Permissions et R\xf4les - User-Service","permalink":"/Hyperion-Docs/docs/kronos/user_service/permissions"}}');var n=i(4848),t=i(8453);const o={},c="\ud83d\udccc User-Service - Gestion des Utilisateurs et des R\xf4les",d={},l=[{value:"\ud83d\ude80 R\xf4le",id:"-r\xf4le",level:2},{value:"\ud83d\udd11 Fonctions principales",id:"-fonctions-principales",level:2},{value:"\ud83d\udee0 Technologies utilis\xe9es",id:"-technologies-utilis\xe9es",level:2},{value:"\ud83d\udd17 Interactions avec les autres microservices",id:"-interactions-avec-les-autres-microservices",level:2},{value:"\ud83d\udce1 Endpoints API Principaux",id:"-endpoints-api-principaux",level:2},{value:"\ud83d\udd11 <strong>Gestion des Utilisateurs</strong>",id:"-gestion-des-utilisateurs",level:3},{value:"\ud83d\udd0f <strong>Gestion des R\xf4les et Permissions</strong>",id:"-gestion-des-r\xf4les-et-permissions",level:3},{value:"\ud83d\udd0d Tests et S\xe9curit\xe9",id:"-tests-et-s\xe9curit\xe9",level:2}];function a(s){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"-user-service---gestion-des-utilisateurs-et-des-r\xf4les",children:"\ud83d\udccc User-Service - Gestion des Utilisateurs et des R\xf4les"})}),"\n",(0,n.jsx)(e.h2,{id:"-r\xf4le",children:"\ud83d\ude80 R\xf4le"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"user-service"})," est responsable de la ",(0,n.jsx)(e.strong,{children:"gestion des utilisateurs, des r\xf4les et des permissions"})," dans l\u2019\xe9cosyst\xe8me Kronos. Il permet l\u2019enregistrement, la modification et la suppression des utilisateurs, ainsi que la gestion avanc\xe9e des r\xf4les et droits d\u2019acc\xe8s."]}),"\n",(0,n.jsx)(e.h2,{id:"-fonctions-principales",children:"\ud83d\udd11 Fonctions principales"}),"\n",(0,n.jsxs)(e.p,{children:["\u2705 ",(0,n.jsx)(e.strong,{children:"Cr\xe9ation, modification et suppression des utilisateurs"}),".",(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsx)(e.strong,{children:"Gestion des r\xf4les et permissions"})," (RBAC - Role-Based Access Control).",(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsx)(e.strong,{children:"Association des utilisateurs aux organisations et services"}),".",(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsx)(e.strong,{children:"V\xe9rification des acc\xe8s pour les autres microservices"}),".",(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsxs)(e.strong,{children:["Synchronisation avec ",(0,n.jsx)(e.code,{children:"auth-service"})," pour l\u2019authentification"]}),".",(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsx)(e.strong,{children:"Stockage des pr\xe9f\xe9rences utilisateur"})," (langue, notifications, etc.).",(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsx)(e.strong,{children:"V\xe9rification et gestion dynamique des permissions"})," via JWT.",(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsxs)(e.strong,{children:["Support des logs d\u2019activit\xe9 et tracking des mises \xe0 jour (",(0,n.jsx)(e.code,{children:"createdBy"}),", ",(0,n.jsx)(e.code,{children:"updatedBy"}),")."]}),(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsx)(e.strong,{children:"Nettoyage automatique des donn\xe9es de test apr\xe8s ex\xe9cution des tests."})]}),"\n",(0,n.jsx)(e.h2,{id:"-technologies-utilis\xe9es",children:"\ud83d\udee0 Technologies utilis\xe9es"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Node.js + Express"})," pour l\u2019API REST."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"PostgreSQL + Prisma"})," pour le stockage des utilisateurs et r\xf4les."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Argon2"})," pour le hachage des mots de passe."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"JWT/OAuth2"})," via ",(0,n.jsx)(e.code,{children:"auth-service"})," pour la gestion des sessions."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Redis"})," pour la mise en cache des profils utilisateurs."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Jest + Supertest"})," pour les tests unitaires et d\u2019int\xe9gration."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"-interactions-avec-les-autres-microservices",children:"\ud83d\udd17 Interactions avec les autres microservices"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\ud83d\udccc Microservice"}),(0,n.jsxs)(e.th,{children:["\ud83d\udd04 Interaction avec ",(0,n.jsx)(e.code,{children:"user-service"})]})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.a,{href:"/Hyperion-Docs/docs/kronos/auth_service/",children:"auth-service"})})}),(0,n.jsx)(e.td,{children:"V\xe9rification des acc\xe8s, gestion des sessions et authentification JWT"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.a,{href:"/Hyperion-Docs/docs/kronos/router_service/",children:"router-service"})})}),(0,n.jsx)(e.td,{children:"V\xe9rification des permissions pour l\u2019acc\xe8s aux routes"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.a,{href:"/Hyperion-Docs/docs/ouranos_crm/ouranos_crm_index",children:"Ouranos CRM"})})}),(0,n.jsx)(e.td,{children:"Gestion des acc\xe8s clients et abonnements"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.a,{href:"/Hyperion-Docs/docs/ouranos_desk/ouranos_desk_index",children:"Ouranos Desk"})})}),(0,n.jsx)(e.td,{children:"Gestion des techniciens et droits d\u2019administration"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.a,{href:"/Hyperion-Docs/docs/hyperion/hyperion_index",children:"Hyp\xe9rion"})})}),(0,n.jsx)(e.td,{children:"Association des utilisateurs aux robots"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.a,{href:"/Hyperion-Docs/docs/hermes/hermes_index",children:"Herm\xe8s"})})}),(0,n.jsx)(e.td,{children:"Gestion des comptes abonn\xe9s"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"-endpoints-api-principaux",children:"\ud83d\udce1 Endpoints API Principaux"}),"\n",(0,n.jsxs)(e.h3,{id:"-gestion-des-utilisateurs",children:["\ud83d\udd11 ",(0,n.jsx)(e.strong,{children:"Gestion des Utilisateurs"})]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"POST /users"})," \u2192 Cr\xe9ation d\u2019un nouvel utilisateur."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"GET /users/:id"})," \u2192 R\xe9cup\xe9ration d\u2019un utilisateur par ID."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"PATCH /users/:id"})," \u2192 Mise \xe0 jour des informations utilisateur."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"DELETE /users/:id"})," \u2192 Suppression d\u2019un utilisateur."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"GET /users"})," \u2192 R\xe9cup\xe9ration de la liste des utilisateurs."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"PATCH /users/:id/roles"})," \u2192 Attribution ou modification d\u2019un r\xf4le utilisateur."]}),"\n"]}),"\n",(0,n.jsxs)(e.h3,{id:"-gestion-des-r\xf4les-et-permissions",children:["\ud83d\udd0f ",(0,n.jsx)(e.strong,{children:"Gestion des R\xf4les et Permissions"})]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"GET /roles"})," \u2192 Liste des r\xf4les disponibles."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"POST /roles"})," \u2192 Cr\xe9ation d\u2019un r\xf4le personnalis\xe9."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"DELETE /roles/:id"})," \u2192 Suppression d\u2019un r\xf4le."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"GET /permissions"})," \u2192 Liste des permissions disponibles."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"PATCH /users/:id/permissions"})," \u2192 Mise \xe0 jour des permissions d\u2019un utilisateur."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"-tests-et-s\xe9curit\xe9",children:"\ud83d\udd0d Tests et S\xe9curit\xe9"}),"\n",(0,n.jsxs)(e.p,{children:["\u2705 ",(0,n.jsx)(e.strong,{children:"JWT V\xe9rifi\xe9 sur chaque requ\xeate s\xe9curis\xe9e."}),(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsx)(e.strong,{children:"Tests Jest valid\xe9s avec couverture compl\xe8te des endpoints."}),(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsxs)(e.strong,{children:["Middleware ",(0,n.jsx)(e.code,{children:"checkPermission"})," am\xe9lior\xe9 avec extraction et v\xe9rification du token."]}),(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsx)(e.strong,{children:"Nettoyage complet de la base de donn\xe9es apr\xe8s chaque test."}),(0,n.jsx)(e.br,{}),"\n","\u2705 ",(0,n.jsx)(e.strong,{children:"Contr\xf4le d\u2019acc\xe8s bas\xe9 sur les permissions stock\xe9es en base."})]}),"\n",(0,n.jsx)(e.hr,{})]})}function u(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(a,{...s})}):a(s)}},8453:(s,e,i)=>{i.d(e,{R:()=>o,x:()=>c});var r=i(6540);const n={},t=r.createContext(n);function o(s){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:o(s.components),r.createElement(t.Provider,{value:e},s.children)}}}]);