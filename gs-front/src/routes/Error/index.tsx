import { useEffect } from "react";

export default function Error(){

    useEffect(()=>{
        document.title = "Page Not Found - Erro 404";
    },[]);

    return(
        <main>
            <h1>Not Found - Erro 404</h1>
        </main>
    );
}