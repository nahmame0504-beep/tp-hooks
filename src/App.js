import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>TP Hooks Avancés – Niveau Débutant</h1>

      <section>
        <h2>Compteur avec useReducer</h2>
        <Compteur />
      </section>

      <section>
        <h2>Mettre le focus avec useRef</h2>
        <FocusInput />
      </section>

      <section>
        <h2>Compteur de rendus</h2>
        <CompteurRendu />
      </section>

      <section>
        <h2>Liste d'articles avec useFetch</h2>
        <ListeArticles />
      </section>

      <section>
        <h2>Timer avec nettoyage d'effet</h2>
        <Timer />
      </section>
    </div>
  );
}

export default App;