import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";
import Header from "./components/Header";
import BandPage from "./pages/BandPage";
import "bootstrap/dist/css/bootstrap.min.css";
import 'leaflet/dist/leaflet.css';
import "./App.css"
import ArtistPage from "./pages/ArtistPage";
import ArtistListPage from "./pages/ArtistListPage";
import BandListPage from "./pages/BandListPage";
import AlbumListPage from "./pages/AlbumListPage";

const App = () => {
  const appName = import.meta.env.VITE_APPLICATION_NAME;

  return (
    <>
      <Header title={appName} />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/artists" element={<ArtistListPage />} />
        <Route path="/bands" element={<BandListPage />} />
        <Route path="/albums" element={<AlbumListPage />} />
        <Route path="/bands/:bandId" element={<BandPage />} />
        <Route path="/albums/:albumId" element={<AlbumPage />} />
        <Route path="/artists/:artistId" element={<ArtistPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
