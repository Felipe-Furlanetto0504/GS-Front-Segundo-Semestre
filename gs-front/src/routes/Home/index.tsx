import { useEffect } from "react";
import imagem from "../../img/imagem.jpg"

export default function Home(){

    useEffect(()=>{
        document.title = "Home";
    },[]);
    
    return(
        <main>
            <h1>Home</h1>
            <section>
                <div>
                    <img src = {imagem} alt = "escritorio"/>
                    <h2>Bem-Vindo</h2>
                    <div>
                        <p>
                            Neste ambiente, reforçamos o valor do trabalho bem-executado, da disciplina e do compromisso com as entregas. Aqui, cada colaborador encontra motivação para manter a produtividade em alta, seguindo práticas consolidadas que sempre sustentaram a excelência no mundo corporativo.
                        </p>
                        <p>
                           Nosso objetivo é promover uma cultura onde o esforço diário é reconhecido, a constância é valorizada e o profissional se sente estimulado a cumprir suas metas com clareza, foco e responsabilidade. Ao manter o olhar no que realmente importa — a execução consistente — abrimos espaço para conquistas sólidas e duradouras.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}