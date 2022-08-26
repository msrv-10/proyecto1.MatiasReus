import { memo } from 'react'

const CartList = ({ usuarios }) => {

    return (
        <section>
            <h2>lista usuarios</h2>
            {usuarios.map(usuario => (
                <article key={usuario.nombre}>
                    <h3>{usuario.nombre} {usuario.apellido}</h3>
                </article>
            ))}
        </section>
    )
}
export default memo(CartList);