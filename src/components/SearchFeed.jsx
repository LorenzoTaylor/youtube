import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Typography} from '@mui/material';
import { Videos} from './';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const[videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
  }, [searchTerm]);
  
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2,paddingLeft:{xs:"10%"}}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          Search Results For:   
          <span style={{ color: '#F31503'}}> {searchTerm}</span> Videos
        </Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed;