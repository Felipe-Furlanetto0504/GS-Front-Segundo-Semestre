import { useEffect } from "react";

export default function Home(){

    useEffect(()=>{
        document.title = "Home";
    },[]);
    
    return(
        <main>
            <h1>Home</h1>
        </main>
    );
}