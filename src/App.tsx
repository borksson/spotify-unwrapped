import { ChakraProvider } from '@chakra-ui/react';
import TopTracksPage from './pages/TopTracksPage';
import TopArtistsPage from './pages/TopArtistsPage';
import WelcomePage from './pages/WelcomePage'; // Import the new component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserProfilePage from './pages/UserProfilePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<WelcomePage />} />
          <Route path="/top-tracks" element={<TopTracksPage />} />
          <Route path="/top-artists" element={<TopArtistsPage />} />
          <Route path="/user-profile" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;