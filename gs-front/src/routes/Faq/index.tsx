import { useEffect } from "react";

export default function Faq(){

    useEffect(()=>{
        document.title = "FAQ";
    },[]);

    return(
    <main>
        <h1>FAQ</h1>
        <section>
            <div>
                <h2>Como funciona?</h2>
                <p>Esse site te ajuda a ficar mais inspirado no seu trabalho.</p>
            </div>

            <div>
                <h2>Como funciona as recompensas por tarefas concluídas?</h2>
                <p>Após terminar a tarefa fale com a sua empresa para a recompensa.</p>
            </div>

            <div>
                <h2>A plataforma funciona em dispositivos móveis?</h2>
                <p>Sim. O site segue padrões responsivos já estabelecidos no mercado, garantindo usabilidade consistente em desktops, tablets e smartphones.</p>
            </div>
        </section>
    </main>
  );
}

