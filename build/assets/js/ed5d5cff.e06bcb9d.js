"use strict";(self.webpackChunkhyperion_docs=self.webpackChunkhyperion_docs||[]).push([[8731],{1596:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"kronos/user_service/permissions","title":"\ud83d\udccc Permissions et R\xf4les - User-Service","description":"\ud83d\ude80 R\xf4le","source":"@site/docs/kronos/user_service/permissions.md","sourceDirName":"kronos/user_service","slug":"/kronos/user_service/permissions","permalink":"/hyperion-docs/docs/kronos/user_service/permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/Julien-Trastour/Hyperion-Docs.git/edit/main/docs/kronos/user_service/permissions.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"\ud83d\udccc User-Service - Gestion des Utilisateurs et des R\xf4les","permalink":"/hyperion-docs/docs/kronos/user_service/"},"next":{"title":"\ud83d\udccc Log-Service - Pr\xe9paration et Centralisation des Logs","permalink":"/hyperion-docs/docs/kronos/log_service/"}}');var i=r(4848),t=r(8453);const o={},l="\ud83d\udccc Permissions et R\xf4les - User-Service",d={},c=[{value:"\ud83d\ude80 R\xf4le",id:"-r\xf4le",level:2},{value:"\ud83d\udd11 Mod\xe8le RBAC",id:"-mod\xe8le-rbac",level:2},{value:"\ud83d\udcc2 Liste des R\xf4les et Permissions",id:"-liste-des-r\xf4les-et-permissions",level:2},{value:"\ud83d\udce1 Endpoints API",id:"-endpoints-api",level:2},{value:"\ud83d\udd10 S\xe9curit\xe9 et Bonnes Pratiques",id:"-s\xe9curit\xe9-et-bonnes-pratiques",level:2}];function a(e){const s={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"-permissions-et-r\xf4les---user-service",children:"\ud83d\udccc Permissions et R\xf4les - User-Service"})}),"\n",(0,i.jsx)(s.h2,{id:"-r\xf4le",children:"\ud83d\ude80 R\xf4le"}),"\n",(0,i.jsxs)(s.p,{children:["La gestion des ",(0,i.jsx)(s.strong,{children:"permissions et r\xf4les"})," dans ",(0,i.jsx)(s.code,{children:"user-service"})," est bas\xe9e sur le mod\xe8le ",(0,i.jsx)(s.strong,{children:"RBAC (Role-Based Access Control)"}),". Cela permet de ",(0,i.jsx)(s.strong,{children:"contr\xf4ler finement les acc\xe8s"})," en attribuant des droits sp\xe9cifiques \xe0 chaque utilisateur selon son r\xf4le."]}),"\n",(0,i.jsx)(s.h2,{id:"-mod\xe8le-rbac",children:"\ud83d\udd11 Mod\xe8le RBAC"}),"\n",(0,i.jsxs)(s.p,{children:["RBAC repose sur ",(0,i.jsx)(s.strong,{children:"trois concepts principaux"})," :\n1\ufe0f\u20e3 ",(0,i.jsx)(s.strong,{children:"Utilisateurs"})," \u2192 Entit\xe9s authentifi\xe9es dans le syst\xe8me.",(0,i.jsx)(s.br,{}),"\n","2\ufe0f\u20e3 ",(0,i.jsx)(s.strong,{children:"R\xf4les"})," \u2192 Groupes d\u2019autorisations attribu\xe9s aux utilisateurs.",(0,i.jsx)(s.br,{}),"\n","3\ufe0f\u20e3 ",(0,i.jsx)(s.strong,{children:"Permissions"})," \u2192 Actions sp\xe9cifiques qu\u2019un r\xf4le peut effectuer."]}),"\n",(0,i.jsx)(s.p,{children:"Exemple de relation RBAC :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Utilisateur \u2192 R\xf4le \u2192 Permissions\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Alice \u2192 Administrateur \u2192 Peut g\xe9rer les utilisateurs\nBob \u2192 Technicien \u2192 Peut acc\xe9der aux tickets SAV\nCharlie \u2192 Client \u2192 Peut voir son abonnement\n"})}),"\n",(0,i.jsx)(s.h2,{id:"-liste-des-r\xf4les-et-permissions",children:"\ud83d\udcc2 Liste des R\xf4les et Permissions"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\ud83d\udccc R\xf4le"}),(0,i.jsx)(s.th,{children:"\ud83d\udd11 Permissions"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Super-Admin"})}),(0,i.jsx)(s.td,{children:"Acc\xe8s total \xe0 tous les syst\xe8mes, gestion des param\xe8tres critiques"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Admin"})}),(0,i.jsx)(s.td,{children:"G\xe9rer les utilisateurs, r\xf4les, logs, acc\xe8s API, monitoring g\xe9n\xe9ral"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Technicien"})}),(0,i.jsx)(s.td,{children:"Acc\xe9der aux tickets SAV, g\xe9rer les interventions"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Client"})}),(0,i.jsx)(s.td,{children:"Voir son abonnement, g\xe9rer son profil, contacter le support"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Robot"})}),(0,i.jsx)(s.td,{children:"Envoyer des diagnostics, r\xe9cup\xe9rer des mises \xe0 jour, ex\xe9cuter des commandes API"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Vendeur"})}),(0,i.jsx)(s.td,{children:"Acc\xe9der aux informations clients, g\xe9rer les ventes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Manager"})}),(0,i.jsx)(s.td,{children:"Superviser les techniciens et vendeurs, analyser les performances"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"-endpoints-api",children:"\ud83d\udce1 Endpoints API"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"GET /roles"})," \u2192 Liste des r\xf4les existants."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"POST /roles"})," \u2192 Cr\xe9ation d\u2019un r\xf4le personnalis\xe9."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DELETE /roles/:id"})," \u2192 Suppression d\u2019un r\xf4le."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"GET /permissions"})," \u2192 Liste des permissions disponibles."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"PATCH /users/:id/roles"})," \u2192 Attribution d\u2019un r\xf4le \xe0 un utilisateur."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"-s\xe9curit\xe9-et-bonnes-pratiques",children:"\ud83d\udd10 S\xe9curit\xe9 et Bonnes Pratiques"}),"\n",(0,i.jsxs)(s.p,{children:["\u2705 ",(0,i.jsx)(s.strong,{children:"Principe du moindre privil\xe8ge"})," \u2192 Un utilisateur n\u2019a acc\xe8s qu\u2019aux actions n\xe9cessaires.",(0,i.jsx)(s.br,{}),"\n","\u2705 ",(0,i.jsx)(s.strong,{children:"R\xf4les hi\xe9rarchiques"})," \u2192 Permet de d\xe9l\xe9guer certaines responsabilit\xe9s.",(0,i.jsx)(s.br,{}),"\n","\u2705 ",(0,i.jsx)(s.strong,{children:"Journaux d\u2019acc\xe8s"})," \u2192 Chaque action administrative est enregistr\xe9e pour audit."]}),"\n",(0,i.jsx)(s.hr,{})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>l});var n=r(6540);const i={},t=n.createContext(i);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);