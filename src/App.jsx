import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Main from './page/Main.jsx'
import Nav from './components/Header.jsx'
import MovieList from './page/MovieList.jsx'
import MovieDetail from './page/MovieDetail.jsx'

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route index element={<Main />}></Route>
                <Route path="/list/:type" element={<MovieList />}></Route>
                <Route path="/movie/:id" element={<MovieDetail />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
