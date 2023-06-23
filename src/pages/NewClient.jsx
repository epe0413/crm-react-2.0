import { useNavigate } from 'react-router-dom'
import Formulario from '../components/Formulario'

const NewClient = () => {

    const navigate = useNavigate()
    return (
        <>
            <h1 className="font-black text-2xl text-cyan-900">Nuevo Cliente</h1>
            <p className="mt-1">Llena todos los campos para registrar un nuevo cliente</p>
            <div className="flex justify-end">
                <button
                    className="bg-cyan-800 text-white px-2 py-1 font-bold uppercase rounded-md hover:bg-cyan-900"
                    onClick={() => navigate('/')}
                >Volver</button>
            </div>

            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-3 py-5 mt-5'>

                <form>
                    <Formulario/>

                    <input
                        type="submit"
                        className='mt-5 w-full bg-cyan-800 p-2 uppercase font-bold text-white rounded-md hover:bg-cyan-900 hover:cursor-pointer'
                        value="Registrar Cliente"
                    />
                </form>
            </div>
        </>
    )
}

export default NewClient