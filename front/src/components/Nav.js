const Nav = (props) => {
    return (
        <div>
              <ul className="holder">
                <li><a class="activo" href="index.html">Home</a></li>
                <li><a href="nosotros.html">Sobre nosotros</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="galeria.html">Galeria</a></li>
                <li><a href="novedades.html">Novedades</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </div>
    )
}

export default Nav;