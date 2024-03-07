
import './App.css'

import IncidenciasTable from './Components/IncidenciasTable';
import { useState } from 'react';
 const initialData = [
    {
      id: 1,
      titulo: 'Problema con la impresora',
      descripcion: 'La impresora no imprime correctamente',
      fecha: '2024-03-07',
      usuario: 'Usuario1',
      estado: 'Abierta',
      edificio: 'Edificio A',
      departamento: 'IT'
    },
    {
      id: 2,
      titulo: 'Error en la aplicación',
      descripcion: 'La aplicación muestra un mensaje de error al iniciar sesión',
      fecha: '2024-03-06',
      usuario: 'Usuario2',
      estado: 'Cerrada',
      edificio: 'Edificio B',
      departamento: 'Desarrollo'
    }
  ];
function App() {
  const [incidencias, ] = useState(initialData);

 

  return (
    <>
    
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tabla de Incidencias</h1>
      <IncidenciasTable data={incidencias} />
    </div>
     
     
    </>
  )
}

export default App
