import { useEffect } from "react";

export default function Integrantes(){

    useEffect(()=>{
        document.title = "Integrantes";
    },[]);

    return(
        <main>
            <h1>Integrantes</h1>
        </main>
    );
}