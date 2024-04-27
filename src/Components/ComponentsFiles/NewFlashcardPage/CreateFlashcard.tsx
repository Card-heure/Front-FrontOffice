import {useState} from "react";
import CardDetails from "#ComponentsFiles/NewFlashcardPage/CardDetails.tsx";

export default function CreateFlashcard() {
    const titleSave = localStorage.getItem('titleSave');
    // @ts-ignore
    const handleTitleEntered = (event) => {
        const inputValue = event.target.value;
        setCardTitleSave(inputValue);
        localStorage.setItem('flashSetTitle', inputValue);
        if (inputValue.trim().length > 2) {
            setTitleEntered(true);
        }
        else {
            setTitleEntered(false);
        }
    }

    const [flashSetTitle, setFlashSetTitle] = useState(
        <input
            type="text"
            className="enterTitle flex ml-[2%] w-[26%] leading-[34px] items-baseline border-b-[1px] border-b-[solid] border-b-[black] font-extralight"
            onChange={handleTitleEntered}/>);

    const create = () => {
        setDisplayOptions(true);
        setEnterButton("enterButtonIcon mb-[16px] cursor-auto");
        setFlashSetTitle(
            <h1
                className="enterTitle flex mx-[2%] mt-[4px] font-semibold"
                onChange={handleTitleEntered}> {cardTitleSave} </h1>);
    }

    const addOrSave = () => {
        return displayOptions ? <p className="checkmark"></p> : '+';
    };

    const [enterButton, setEnterButton] = useState("enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] mb-[12px] rounded-[50%] bg-[black] text-[white] font-normal text-center");
    const [titleEntered, setTitleEntered] = useState(false);
    const [cardTitleSave, setCardTitleSave] = useState("");
    const [displayOptions, setDisplayOptions] = useState(false);

    return (
        <>
            <div className="subjectAndTitle flex h-[40px] items-center w-[55%] mx-[auto] mt-[75px] mb-[100px] text-[160%] font-extralight text-left justify-center overflow-clip">
                <h1 className="subject max-w-[10%]"> Subject:</h1>
                <h1 className="subjectTitle max-w-[25%] ml-[2%] font-semibold">{titleSave}</h1>
                <h1 className="divider w-[2%] mx-[2%] text-center"> | </h1>
                <h1 className="flashcardSet max-w-[25%] h-[35px] items-baseline"> Flashcard Set: </h1>
                {flashSetTitle}

                <div className="enterButton w-[5%] mx-[3%] pt-[12px]">
                    <button
                        className={titleEntered ? enterButton : "enterButtonIcon hidden"}
                        onClick={create}>
                        {addOrSave()}
                    </button>
                </div>
            </div>

            <div className={displayOptions ? "cardSection" : "cardSection hidden"}>
                <CardDetails/>
            </div>

        </>
    )
}