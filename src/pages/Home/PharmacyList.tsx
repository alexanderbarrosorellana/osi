import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

// date
// pharmacyName
// communeName
// localityName
// pharmacyAddress
// openningTime
// closingTime
// phone
// latitude
// longitude
// runningDay

const headCells = [
  'Fecha',
  'Nombre',
  'Comuna',
  'Localidad',
  'Dirección',
  'Apertura',
  'Cierre',
  'Teléfono',
  'Latitud',
  'Longitud',
  'Día'
]

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

export interface PharmacyListProps {
  pharmacies: Pharmacy[]
}

export const PharmacyList = ({pharmacies}: PharmacyListProps) => {

  const rows = pharmacies.map((pharmacy: Pharmacy) => {
    return ({
      id: pharmacy.local_id,
      date: pharmacy.fecha,
      pharmacyName: pharmacy.local_nombre,
      communeName: pharmacy.comuna_nombre,
      localityName: pharmacy.localidad_nombre,
      pharmacyAddress: pharmacy.local_direccion,
      openningTime: pharmacy.funcionamiento_hora_apertura,
      closingTime: pharmacy.funcionamiento_hora_cierre,
      phone: pharmacy.local_telefono,
      latitude: pharmacy.local_lat,
      longitude: pharmacy.local_lng,
      runningDay: pharmacy.funcionamiento_dia,
    })
  });

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar>
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Farmacias
          </Typography>
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <TableHead>
              <TableRow>
                {headCells.map(headCell => (
                  <TableCell key={headCell}>
                    {headCell}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>
                    {row.date}
                  </TableCell>
                  <TableCell>
                    {row.pharmacyName}
                  </TableCell>
                  <TableCell>
                    {row.communeName}
                  </TableCell>
                  <TableCell>
                    {row.localityName}
                  </TableCell>
                  <TableCell>
                    {row.pharmacyAddress}
                  </TableCell>
                  <TableCell>
                    {row.openningTime}
                  </TableCell>
                  <TableCell>
                    {row.closingTime}
                  </TableCell>
                  <TableCell>
                    {row.phone}
                  </TableCell>
                  <TableCell>
                    {row.latitude}
                  </TableCell>
                  <TableCell>
                    {row.longitude}
                  </TableCell>
                  <TableCell>
                    {row.runningDay}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
      </Paper>
    </Box>
  )
}
