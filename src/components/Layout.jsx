import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/5 bg-cyan-800 px-5 py-5'>
                <h2 className='text-2xl font-black text-center text-white'>CRM - Cliente</h2>
            </aside>
            <div className="md:w-4/5 p-5 md:h-screen overflow-scroll">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout