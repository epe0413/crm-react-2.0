const Formulario = ({cliente}) => {
    return (
        <>
            <div className="md:flex md:items-center md:gap-4 w-full">
                <div className="mb-4 md:w-1/2">
                    <label
                        className="text-gray-800"
                        htmlFor="nombre"
                    >Nombre:</label>
                    <input 
                        id="nombre"
                        type="text"
                        className="mt-1 block w-full p-2 bg-gray-50"
                        placeholder="Nombre del Cliente"
                        name="nombre"
                    />
                </div>
                <div className="mb-4 md:w-1/2">
                    <label
                        className="text-gray-800"
                        htmlFor="empresa"
                    >Empresa:</label>
                    <input 
                        id="empresa"
                        type="text"
                        className="mt-1 block w-full p-2 bg-gray-50"
                        placeholder="Empresa del Cliente"
                        name="empresa"
                    />
                </div>
                
            </div>

            <div className="md:flex md:items-center md:gap-4 w-full">
                <div className="mb-4 md:w-1/2">
                    <label
                        className="text-gray-800"
                        htmlFor="email"
                    >E-mail:</label>
                    <input 
                        id="email"
                        type="email"
                        className="mt-1 block w-full p-2 bg-gray-50"
                        placeholder="Email del Cliente"
                        name="email"
                    />
                </div>

                <div className="mb-4 md:w-1/2">
                    <label
                        className="text-gray-800"
                        htmlFor="telefono"
                    >Teléfono:</label>
                    <input 
                        id="telefono"
                        type="tel"
                        className="mt-1 block w-full p-2 bg-gray-50"
                        placeholder="Teléfono del Cliente"
                        name="telefono"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-1 block w-full p-2 bg-gray-50 h-30 align-self"
                    placeholder="Notas del Cliente"
                    name="notas"
                />
            </div>
        </>
    )
}

export default Formulario