import { ChakraProvider } from '@chakra-ui/react'
import TopTracksPage from './pages/TopTracksPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* TODO: Add with navbar*/}
          {/* TODO: Replace with homepage */}
          <Route path="/" element={<p>Welcome to Spotify Unwrapped!</p>}/>
          <Route path="/top-tracks" element={<TopTracksPage/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
