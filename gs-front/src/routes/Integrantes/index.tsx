import { useEffect } from "react";
import felipe from "../../img/felipe.jpg";
import joao from "../../img/joao.jpg";
import joaocc from "../../img/joaocc.jpg";

export default function Integrantes(){

    useEffect(()=>{
        document.title = "Integrantes";
    },[]);

    return(
        <main>
            <h1>Integrantes</h1>
            <section>
                <div>
                    <img src={felipe} alt="felipe"/>
                    <p>Nome: Felipe Furlanetto</p>
                    <p>RM: 562766</p>
                    <p>Turma: 1TDSPF</p>
                    <div>
                        <a href = "https://github.com/Felipe-Furlanetto0504" >GitHub</a>
                        <a href = "https://www.linkedin.com/in/felipe-furlanetto-a64671364/" >LinkedIn</a>
                    </div>
                </div>

                <div>
                    <img src={joao}/>
                    <p>Nome: João Victor Bueno Castelini Da Silva</p>
                    <p>RM: 564115</p>
                    <p>Turma: 1TDSPF</p>
                    <div>
                        <a href = "https://github.com/Buenozw" >Github</a>
                        <a href="https://www.linkedin.com/in/victor-bueno%E3%83%84-116757350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" >LinkedIn</a>
                    </div>
                </div>

                <div>
                    <img src={joaocc} />
                    <p>Nome: João Victor Caetano Alves Da Silva </p>
                    <p>RM: 562074 </p>
                    <p>Turma: 1TDSPF</p>
                    <div>
                        <a href = "https://github.com/joaocaetano1310">GitHub</a>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-caetano-b853222b6/">LinkedIn</a>
                    </div>
                </div>
            </section>
        </main>
    );
}