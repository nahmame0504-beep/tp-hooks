# TP 6 : Découverte des Hooks Avancés et des Hooks Personnalisés

Ce projet a été réalisé dans le cadre d'un TP d'apprentissage sur React. Il vise à pratiquer la gestion d'état complexe, la manipulation du DOM, les effets avec nettoyage ainsi que la création de Hooks personnalisés.

##  Fonctionnalités réalisées

1. **Gestion d'état complexe avec `useReducer`** (`Compteur.js`)
   - Incrémentation, décrémentation et réinitialisation du compteur via un *reducer* et un système d'actions.

2. **Manipulation du DOM avec `useRef`** (`FocusInput.js`)
   - Prise de focus automatique sur un champ d'entrée de texte lors d'un clic sur un bouton.

3. **Suivi des rendus avec `useRef`** (`CompteurRendu.js`)
   - Comptage du nombre de réaffichages du composant sans déclencher de re-render supplémentaire.

4. **Hook personnalisé de récupération de données** (`useFetch.js` & `ListeArticles.js`)
   - Création d'un Hook sur-mesure `useFetch` gérant les états de données, de chargement et d'erreur.
   - Affichage d'une liste d'articles récupérés depuis une API externe (`jsonplaceholder.typicode.com`).

5. **Gestion d'effets avec nettoyage** (`Timer.js`)
   - Chronomètre incrémenté chaque seconde avec suppression de l'intervalle (`clearInterval`) lors du démontage du composant pour éviter les fuites de mémoire.

---

##  Technologies utilisées

- **React** (Bootstrapped avec [Create React App](https://github.com/facebook/create-react-app))
- **JavaScript (ES6+)**
- **CSS3 / HTML5**

---

##  Structure du projet

```text
src/
├── App.js              # Composant principal assemblant le TP
├── Compteur.js         # Composant utilisant useReducer
├── FocusInput.js       # Composant utilisant useRef pour le focus
├── CompteurRendu.js    # Composant comptant les rendus
├── useFetch.js         # Hook personnalisé pour les requêtes API
├── ListeArticles.js    # Composant utilisant useFetch
└── Timer.js            # Composant avec useEffect et nettoyage
```

<img width="1913" height="922" alt="image" src="https://github.com/user-attachments/assets/ec12a993-23cf-456d-9f63-0249e7cc6d2e" />
<img width="533" height="155" alt="image" src="https://github.com/user-attachments/assets/f955409a-758b-4e84-8d14-ecb0627dceef" />
<img width="542" height="161" alt="image" src="https://github.com/user-attachments/assets/7e09e8b1-e404-4b82-9727-dc6fbfa09c00" />
<img width="355" height="101" alt="image" src="https://github.com/user-attachments/assets/bcfbeebf-3639-4bf0-b4e7-5b5afccba0a1" />
