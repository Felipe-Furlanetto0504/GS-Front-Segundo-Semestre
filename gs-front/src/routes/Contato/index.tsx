import { useEffect } from "react";

export default function Contato(){

    useEffect(()=>{
        document.title = "Contato";
    },[]);

    return(
        <main>
            <h1>Contato</h1>
            <section>
                <div>
                    <h2>Email:</h2>
                    <div>
                        <p>TeamUp@gmail.com.br</p>
                    </div>
                </div>

                <div>
                    <h2>Telefone:</h2>
                    <div>
                        <p>+55 (11) 57901-3981</p>
                    </div>
                </div>
            </section>
        </main>
    );
}