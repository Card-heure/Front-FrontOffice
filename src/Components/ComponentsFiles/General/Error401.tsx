export default function Error401() {

    return (
        <>
            <div className = "w-[60%] justify-center mx-[auto] mt-[150px] text-center">
                <h1 className = "text-[250%] font-bold mb-[25px]"> ERREUR 401 </h1>
                <h3>&#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639;</h3>
                <h2 className = "font-light mt-[25px]"> Saperlipopette ! </h2>
                <h2 className = "font-light mt-[25px]"> Vous n'êtes pas pas autoriser d'acceder à cet URL... </h2>
                <button className = "text-[95%] mt-[25px] italic">
                    <a href="/">
                        Cliquer ici pour revenir à la page d'atterrissage
                    </a>
                </button>
            </div>
        </>
    )
}