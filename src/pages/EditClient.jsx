import { Form, useNavigate, useLoaderData } from 'react-router-dom'
import Formulario from "../components/Formulario";
import { obtenerCliente } from "../data/clientes";

export async function loader({params}){
    const cliente = await obtenerCliente(params.clientId)

    if( Object.values(cliente).length === 0 ){
        throw new Response('', {
            status: 404,
            statusText: 'No hay resultados'
        })
    }

    return cliente
}

const EditClient = () => {

    const navigate = useNavigate();
    const cliente = useLoaderData()

    return (
        <>
            <h1 className="font-black text-2xl text-cyan-900">Editar Cliente</h1>
            <p className="mt-1">A continuación podras modificar los datos de un cliente</p>
            <div className="flex justify-end">
                <button
                    className="bg-cyan-800 text-white px-2 py-1 font-bold uppercase rounded-md hover:bg-cyan-900"
                    onClick={() => navigate('/')}
                >Volver</button>
            </div>

            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-3 py-5 mt-5'>

                {/* {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error>)} */}

                <Form
                    method='post'
                    noValidate
                >
                    <Formulario
                        cliente={cliente}
                    />

                    <input
                        type="submit"
                        className='mt-5 w-full bg-cyan-800 p-2 uppercase font-bold text-white rounded-md hover:bg-cyan-900 hover:cursor-pointer'
                        value="Registrar Cliente"
                    />
                </Form>
            </div>
        </>
    )
}

export default EditClient