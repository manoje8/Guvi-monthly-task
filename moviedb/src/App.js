import './App.css';
import Header from './components/Header';
import MovieProvider from './context/Movie';

const App = ({ children }) => {
  return (
    <MovieProvider url="https://api.tvmaze.com/shows">
      <Header />
      {children}
    </MovieProvider>
  );
}

export default App;
