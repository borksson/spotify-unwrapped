import { ChakraProvider } from '@chakra-ui/react'
import TopTracksPage from './pages/TopTracksPage'
import TopArtistsPage from './pages/TopArtistsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* TODO: Add with navbar*/}
          {/* TODO: Replace with homepage */}
          <Route path="/top-tracks" element={<TopTracksPage/>}/>
          <Route path="/top-artists" element={<TopArtistsPage/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )

}

export default App
