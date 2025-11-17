import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/contato">Contato</Link>
            <Link to = "/faq">Faq</Link>
            <Link to = "/sobre">Sobre</Link>
            <Link to = "/integrantes">integrantes</Link>
        </nav>
    );
}