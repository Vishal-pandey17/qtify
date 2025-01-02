import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material/styles';
import { generatePath, Outlet } from 'react-router-dom';

import {
  fetchFilters,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums
} from "./api/api";

function App() {
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data)  => {
      setData((prevState) => {
         return {...prevState, [key] : data}; // {topAlbum: [], newAlbums: [], songs: [], genres:[]}
      });
    });
  };

  useEffect(() => {
     generateData("topAlbums", fetchTopAlbums);
     generateData("newAlbums", fetchNewAlbums);
     generateData("songs", fetchSongs);
     generateData("genres", fetchFilters);
  }, []);
  
  console.log(data);
  const {topAlbums: [], newAlbumss: [], songs: [], genres:[]} = data;
  
  return (
    <>  
       <StyledEngineProvider injectFirst> 
         <Navbar/>
         <Outlet context={{data}}/>
       </StyledEngineProvider>
    </>
  );
}

export default App;
