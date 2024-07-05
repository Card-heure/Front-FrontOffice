export default function Error404() {

    const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const tester = (event) => {

        const idNum = Number(event.target.id);
        const index = squares.indexOf(idNum);

        if (index != -1) {
            squares.splice(index, 1);
            // @ts-ignore
            const random = Math.floor(Math.random(squares) * 9) + 1;
            const computer = document.getElementById(String(random));
            // @ts-ignore
            computer.innerHTML = "O";
            // @ts-ignore
            computer.disabled = true;
            // @ts-ignore
            const idComp = Number(computer.id);
            const index2 = squares.indexOf(idComp);

            if (index2 != -1) {
                squares.splice(index2, 1);
            }

            console.log(squares);
            event.target.innerHTML = "X"
            event.target.disabled = true;
        }
    }

    return (
        <>
            <div className = "w-[60%] justify-center mx-[auto] mt-[150px] text-center">
            <h1 className = "text-[250%] font-bold mb-[25px]"> ERREUR 404 </h1>
                <h3>&#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639; &#9785; &#x2639;</h3>
                <h2 className = "font-light mt-[25px]"> La page que vous recherchez semble introuvable </h2>
                <button className = "text-[95%] mt-[25px] font-extralight italic">
                    <a href="/">
                        Cliquer ici pour revenir à la page d'atterrissage
                    </a>
                    </button>
            </div>
            <div
                className="tictactoe text-center items-center leading-[100px] my-[100px] w-[auto] mx-[auto] justify-center grid grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px]">
                <button className="col border-[black] border-[1px] border-[solid]"
                id = "1"
                onClick = {tester}> .
                </button>
                <button className="col border-[black] border-[1px] border-[solid]"
                     id = "2"
                        onClick = {tester}> .
                </button>
                <button className="col border-[black] border-[1px] border-[solid]"
                     id = "3"
                        onClick = {tester}> .
                </button>
                <button className="col border-[black] border-[1px] border-[solid]"
                     id = "4"
                        onClick = {tester}> .
                </button>
                <button className="col border-[black] border-[1px] border-[solid]"
                     id = "5"
                        onClick = {tester}> .
                </button>
                <button className="col border-[black] border-[1px] border-[solid]"
                     id = "6"
                        onClick = {tester}> .
                </button>
                <button className="col border-[black] border-[1px] border-[solid]"
                     id = "7"
                        onClick = {tester}> .
                </button>
                <button className="col border-[black] border-[1px] border-[solid]"
                     id = "8"
                        onClick = {tester}> .
                </button>
                <button className="col border-[black] border-[1px] border-[solid]"
                     id = "9"
                        onClick = {tester}> .
                </button>

            </div>
        </>
    )
}