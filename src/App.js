import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Feed, SearchFeed, VideoDetail, ChanelDetail } from './components';

function App() {
  return (
    <BrowserRouter >
      <Box sx={{ backgroundColor: '#000000' }}>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/video/:id" element={<VideoDetail/>}/>
            <Route path="/chanel/:id" element={<ChanelDetail/>}/>
            <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
