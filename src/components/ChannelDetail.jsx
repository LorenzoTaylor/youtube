import React from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { Videos, ChannelCard } from '.';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {
  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null);

  const{id} = useParams();

  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])
  return (
    <Box minHeight={'95vh'}>
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(174,226,238,1) 0%, rgba(0,62,145,1) 100%)',
          zIndex: 10,
          height: '300px'
        }} />
        <ChannelCard channelDetail={channelDetail}
        marginTop='-110px'/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: { xs: '20vw', md: '150px'}}}/>
          <Videos videos={videos}/>
      </Box>

    </Box>
  )
}

export default ChannelDetail;