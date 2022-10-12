import React from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { PharmacyList } from './PharmacyList';

export interface Pharmacy {
  fecha: string; 
  local_id: string;
  local_nombre: string;
  comuna_nombre: string;
  localidad_nombre: string;
  local_direccion: string;
  funcionamiento_hora_apertura: string;
  funcionamiento_hora_cierre:  string;
  local_telefono:  string;
  local_lat:  string;
  local_lng: string;
  funcionamiento_dia:  string;
}

const getPharmacyNightShift = async (): Promise<Pharmacy[]> => {
  const response = await axios('/osi/pharmacyNightShift')
  return response.data
}


const Home = () => {
    const { data, isLoading, error} = useQuery(['pharmacyNightShift'], getPharmacyNightShift)
  return (
    <>
     {isLoading && 
      (<Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" /><LinearProgress color="success" /><LinearProgress color="inherit" />
        </Stack>)}

      {data && <PharmacyList pharmacies={data} /> }
      {error && <p>Error</p>}
    </>
  )
}

export default Home