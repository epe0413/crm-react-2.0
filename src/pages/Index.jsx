import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Cliente';
import { obtenerClientes } from '../data/clientes';

export function loader(){
    const clientes = obtenerClientes();
    return clientes
}

const Index = () => {
    const clientes = useLoaderData();
    return (
        <>
            <h1 className="font-black text-2xl text-cyan-900">Clientes</h1>
            <p className="mt-1">Administra tus clientes</p>

            {clientes.length ? (
                <table className='w-full bg-white shadow mt-3 table-auto'>
                    <thead className='bg-cyan-800 text-white'>
                        <tr>
                            <th className='p-1'>Cliente</th>
                            <th className='p-1'>Contacto</th>
                            <th className='p-1'>Acciones</th>
                        </tr>

                    </thead>
                    <tbody>
                        { clientes.map( cliente => (
                            <Cliente
                                cliente= { cliente }
                                key = {cliente.id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className='text-center mt-5'>No hay datos</p>
            ) }
        </>
    )
}

export default Index