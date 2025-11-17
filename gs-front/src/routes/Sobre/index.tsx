import { useEffect } from "react";

export default function Sobre(){
    useEffect(()=>{
        document.title = "Sobre";
    },[]);

    return(
        <main>
            <h1>Sobre</h1>
        </main>
    );

}