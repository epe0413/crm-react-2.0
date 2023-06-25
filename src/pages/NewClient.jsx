import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error';
import { agregarCliente } from '../data/clientes';

export async function action({request}){
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);

    const email = formData.get('email')
    
    //Validación
    const errores = [];
    if(Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(!regex.test(email)){
        errores.push('El Email no es válido')
    }

    if(Object.keys(errores).length){
        return errores
    }
    
    await agregarCliente(datos);

    return redirect('/')
}

const NewClient = () => {

    const errores = useActionData()
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

                {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method='post'
                    noValidate
                >
                    <Formulario/>

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

export default NewClient