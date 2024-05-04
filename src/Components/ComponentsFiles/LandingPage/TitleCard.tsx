export default function TitleCard() {
    return (
        <div className ="introCard border-[1px] border-[solid] border-[black]
        rounded-[40px] c w-[950px]
        h-[350px] mt-[80px] mx-[auto] mb-[180px] pt-[50px] pr-[30px] pb-[15px] pl-[0] flex">
            <div className = "title w-[47%]">
                <h2 className = "text-[375%] font-bold text-center"> Card'heure </h2>
                <p className = "one"> /Cardheure/ </p>
                <p className = "two"> nom masculin </p>
            </div>

            <div className = "definition w-[53%]">
                <ol className = "list-decimal pt-[11%] pr-[8%] pb-[0] pl-[6%] text-[112%] font-extralight not-italic">
                    <li className="one font-normal italic mb-[40px]"> La plateforme pour les étudiants, par des étudiants.</li>
                    <li className="two"> Un regroupement moderne de méthodes d'apprentissage
                        comprenant des cartes flash, des QCM et des fichiers
                        texte qui permet aux étudiants d'étudier à la fois de
                        manière indépendante et collaborative.
                    </li>
                </ol>
            </div>
        </div>
    );
}