import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/5 bg-cyan-800 px-5 py-5'>
                <h2 className='text-2xl font-black text-center text-white'>CRM - Cliente</h2>

                <nav className='mt-10'>
                    {/* <a href="/">Clientes</a>
                    <a href="/clients/new">Nuevo Clientes</a> */}
                    <Link className='text-xl block mt-2 hover:text-blue-300 text-white' to="/">Clientes</Link>
                    <Link className='text-xl block mt-2 hover:text-blue-300 text-white' to="/clients/new">Nuevo Clientes</Link>

                </nav>
            </aside>
            <div className="md:w-4/5 p-5 md:h-screen overflow-scroll">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout