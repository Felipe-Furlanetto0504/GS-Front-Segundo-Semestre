import { useEffect } from "react";

export default function Faq(){

    useEffect(()=>{
        document.title = "FAQ";
    },[]);

    return(
    <main>
        <h1>FAQ</h1>
    </main>
  );
}

