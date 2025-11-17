import { useEffect } from "react";

export default function Contato(){

    useEffect(()=>{
        document.title = "Contato";
    },[]);

    return(
        <main>
            <h1>Contato</h1>
        </main>
    );
}