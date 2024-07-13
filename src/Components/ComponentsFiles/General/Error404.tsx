export default function Error404() {

    return (
        <>
            <div className = "w-[60%] justify-center mx-[auto] mt-[150px] text-center">
            <h1 className = "text-[250%] font-bold mb-[25px]"> ERREUR 404 </h1>
                <h3>&#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639;</h3>
                <h2 className = "font-light mt-[25px]"> La page que vous recherchez semble introuvable </h2>
                <button className = "text-[95%] mt-[25px] italic">
                    <a href="/">
                        Cliquer ici pour revenir à la page d'atterrissage
                    </a>
                    </button>
            </div>
        </>
    )
}