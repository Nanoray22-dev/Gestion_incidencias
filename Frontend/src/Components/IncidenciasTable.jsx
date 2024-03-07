




// Componente de tabla de incidencias
const IncidenciasTable = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edificio</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departamento</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map(incidencia => (
          <tr key={incidencia.id}>
            <td className="px-6 py-4 whitespace-nowrap">{incidencia.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{incidencia.titulo}</td>
            <td className="px-6 py-4 whitespace-nowrap">{incidencia.descripcion}</td>
            <td className="px-6 py-4 whitespace-nowrap">{incidencia.fecha}</td>
            <td className="px-6 py-4 whitespace-nowrap">{incidencia.usuario}</td>
            <td className="px-6 py-4 whitespace-nowrap">{incidencia.estado}</td>
            <td className="px-6 py-4 whitespace-nowrap">{incidencia.edificio}</td>
            <td className="px-6 py-4 whitespace-nowrap">{incidencia.departamento}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IncidenciasTable;

