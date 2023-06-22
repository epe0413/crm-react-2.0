
const Cliente = ({cliente}) => {

    const { nombre, empresa, email, telefono, id } = cliente
    return (
        <tr className="hover:bg-cyan-50">
            <td className='p-2'>
                {nombre}
            </td>
        </tr>
    )
}

export default Cliente