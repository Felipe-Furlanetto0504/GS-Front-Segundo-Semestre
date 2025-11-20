import { useEffect } from "react";

export default function Tarefa(){
    useEffect(()=>{
        document.title = "Tarefas"
    },[]);

    return(
        <div>teste</div>
    );
}