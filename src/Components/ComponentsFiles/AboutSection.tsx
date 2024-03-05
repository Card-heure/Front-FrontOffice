
export default function AboutSection() {
    return (
        <div className = "aboutContainer mt-[250px] mb-[400px] mx-auto w-[1300px] h-[500px] flex items-center">
            <div className = "circle p-[40px] border-[1px] border-[solid] border-[black] rounded-[50%] w-[420px] h-[420px] text-center items-center flex text-[200%] italic m-auto" >
                <p> WHAT WAS THE INSPIRATION BEHIND CARD'HEURE ? </p>
            </div>

            <div className = "verticalContainer w-[50px]">
                <div className = "vertical border-l-[1px] border-l-[solid] border-l-[black] w-[4px] h-[435px] ml-[65%] [box-shadow:-12px_10px_1px_rgb(178,201,178)]">
                </div>
            </div>
            <div className = "aboutText w-[550px] h-[400px] m-auto text-[125%]">
                <p> Card’heure a été conçu pour répondre à <span className = "bold">un besoin en croissance constante des étudiants : La possibilité de créer et de partager du
                    matériel d’étude sans être limité par un paywall.</span> Il existe de nombreux sites Web et applications qui vous permettent de créer et de
                    partager des documents d'étude, mais il est presque impossible d'en trouver un qui soit à la fois gratuit et offre un large éventail
                    d'options de format. </p>
                <br/> <br/>
                <p> <span className = "bold">C’est cette problématique qui nous a inspiré à développer une ressource gratuite, polyvalente et centralisée pour aider les étudiants
                    à réussir leurs études.</span> </p>
            </div>
            {/* verticalContainer : border-[1px] border-[solid] border-[blue]
            aboutContainer : border-[1px] border-[solid] border-[black]
            aboutText ; border-[1px] border-[solid] border-[red] */}
        </div>
    );
}