import {useState} from "react";

export default function Error404() {

    const s1 = document.getElementById("1");
    const s2 = document.getElementById("2");
    const s3 = document.getElementById("3");
    const s4 = document.getElementById("4");
    const s5 = document.getElementById("5");
    const s6 = document.getElementById("6");
    const s7 = document.getElementById("7");
    const s8 = document.getElementById("8");
    const s9 = document.getElementById("9");

    const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [tictactoe, setTicTacToe] = useState("hidden");
    let count = 0;

    const showGame = (event) => {
        setTicTacToe("tictactoe text-center items-center leading-[100px] my-[100px] w-[auto] mx-[auto] justify-center grid grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px]");
        event.target.disabled = true;
    }

    const tester = (event) => {
        const idNum = Number(event.target.id);
        const index = squares.indexOf(idNum);
        count += 1;

        if (count == 5) {
            console.log(true);

        }

        // @ts-ignore
        if (s1.innerHTML == "X" && s2.innerHTML == "X" && s3.innerHTML == "X") {

        }
        // @ts-ignore
        if (s4.innerHTML == "X" && s5.innerHTML == "X" && s6.innerHTML == "X") {

        }
        // @ts-ignore
        if (s7.innerHTML == "X" && s8.innerHTML == "X" && s9.innerHTML == "X") {

        }
        // @ts-ignore
        if (s1.innerHTML == "X" && s4.innerHTML == "X" && s7.innerHTML == "X") {

        }
        // @ts-ignore
        if (s2.innerHTML == "X" && s5.innerHTML == "X" && s8.innerHTML == "X") {

        }
        // @ts-ignore
        if (s3.innerHTML == "X" && s6.innerHTML == "X" && s9.innerHTML == "X") {

        }
        // @ts-ignore
        if (s1.innerHTML == "X" && s5.innerHTML == "X" && s9.innerHTML == "X") {

        }
        // @ts-ignore
        if (s3.innerHTML == "X" && s5.innerHTML == "X" && s7.innerHTML == "X") {

        }
        // @ts-ignore
        if (s1.innerHTML == "X" && s2.innerHTML == "X" && s3.innerHTML == "O") {

        }
        // @ts-ignore
        if (s4.innerHTML == "X" && s5.innerHTML == "X" && s6.innerHTML == "O") {

        }
        // @ts-ignore
        if (s7.innerHTML == "X" && s8.innerHTML == "X" && s9.innerHTML == "O") {

        }
        // @ts-ignore
        if (s1.innerHTML == "X" && s4.innerHTML == "X" && s7.innerHTML == "O") {

        }
        // @ts-ignore
        if (s2.innerHTML == "X" && s5.innerHTML == "X" && s8.innerHTML == "O") {

        }
        // @ts-ignore
        if (s3.innerHTML == "X" && s6.innerHTML == "X" && s9.innerHTML == "O") {

        }
        // @ts-ignore
        if (s1.innerHTML == "X" && s5.innerHTML == "X" && s9.innerHTML == "O") {

        }
        // @ts-ignore
        if (s3.innerHTML == "X" && s5.innerHTML == "X" && s7.innerHTML == "O") {

        }
        else {
            if (index != -1) {
                squares.splice(index, 1);

                event.target.innerHTML = "X";
                event.target.disabled = true;

                const randomIndex = Math.floor(Math.random() * squares.length);
                const randomSquareId = squares[randomIndex];
                const computer = document.getElementById(String(randomSquareId));

                // @ts-ignore
                computer.innerHTML = "O";
                // @ts-ignore
                computer.disabled = true;

                squares.splice(randomIndex, 1);
            }
        }
    };

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
                <button className= "EasterEgg w-[100%] mt-[25px]"
                        onClick = {showGame}>
                    &#x263A;
                </button>
            </div>
            <div className = {tictactoe}>
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