import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {

    const error = useRouteError()
    
    return (
        <div className='space-y-5'>
            <h1 className='text-center font-black text-2xl text-cyan-900 mt-10'>CRM - Clientes</h1>
            <p className='text-center'>Hubo un error</p>
            <p className='text-center'>{error.message}</p>
        </div>
    )
}