import { useNavigate, Form, redirect } from "react-router-dom"
import { eliminarCliente } from '../data/clientes'

export async function action ({params}){
    await eliminarCliente(params.clientId)
    return redirect('/');
}

const Cliente = ({cliente}) => {
    const navigate = useNavigate();

    const { nombre, empresa, email, telefono, id } = cliente
    return (
        <tr className="hover:bg-gray-100 border-b">
            <td className='p-2 space-y-1'>
                <p className="text-lg text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className='p-2'>
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">EMAIL: </span>{email}</p>
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
            </td>
            <td className='p-2 flex gap-2 justify-center'>
                <button
                    type="button"
                    className="text-cyan-600 hover:text-cyan-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clients/${id}/edit`)}
                >Editar</button>

                <Form
                    method='post'
                    action= {`/clientes/${id}/eliminar`}
                    onSubmit={(e) => {
                        if(!confirm('¿Deseas eliminar este registro?')){
                            e.preventDefault()
                        }
                    }}
                >
                    <button
                        type="submit"
                        className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                    >Eliminar</button>
                </Form>
            </td>
        </tr>
    )
}

export default Cliente