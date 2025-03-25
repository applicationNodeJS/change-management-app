# change-management-app
Application de gestion des demandes de changement avec Node.js + MongoDB


# 📥 Télécharger et installer le projet

## Méthode 1 : Cloner le dépôt (recommandé pour développeurs)
```bash
git clone https://github.com/applicationNodeJS/change-management-app.git
cd change-management-app
```

## Méthode 2 : Télécharger le ZIP
- [Lien direct vers le ZIP](https://github.com/applicationNodeJS/change-management-app/archive/refs/heads/main.zip)
- Extrayez le fichier et ouvrez le dossier.

## Configuration requise
- Node.js v18+
- MongoDB (local ou Atlas)
- Terminal/CMD pour les commandes.

## Installation
1. **Base De Données (Mongo DB)** :
   - Dans MongoDB Compass et dans le local  localhost:27017
   - crée une base de données nommée :change-management avec collection : stories
     
2. **devback** :
   ```bash
   cd devback
   npm install
   cp .env.example .env  # Configurez votre URI MongoDB
   
2.1- code du fichier .env  :

MONGODB_URI=mongodb://localhost:27017/change-management

PORT=3000

dans le terminal de devback execute :
   npm start
   ```
3. **Frontend** :
   - Ouvrez `devfront/index.html` dans un navigateur.



