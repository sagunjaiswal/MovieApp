import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Header/>
                  <MovieList/>
                  <Footer/>
                </>
              }
            />
            <Route path="/movie/:id" element={<MovieDetail />} />
            
            <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
        
      </Router>
    </div>
  );
}

export default App;

