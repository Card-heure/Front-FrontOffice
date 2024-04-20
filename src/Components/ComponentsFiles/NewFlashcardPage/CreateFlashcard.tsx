import {useState} from "react";

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
            className="enterTitle flex ml-[2%] w-[26%] leading-[34px] border-b-[1px] border-b-[solid] border-b-[black] font-extralight"
            onChange={handleTitleEntered}/>);

    const create = () => {
        setDisplayOptions(true);
        setEnterTitle("enterButtonIcon cursor-auto");
        setFlashSetTitle(
            <h1
                className="enterTitle flex ml-[2%] w-[26%] leading-[34px] border-b-[1px] border-b-[solid] border-b-[black] font-semibold"
                onChange={handleTitleEntered}> {cardTitleSave} </h1>);
    }

    const addOrSave = () => {
        return displayOptions ? <p className="checkmark"></p> : '+';
    };

    const [enterTitle, setEnterTitle] = useState("enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] mb-[12px] rounded-[50%] bg-[black] text-[white] font-normal text-center");
    const [titleEntered, setTitleEntered] = useState(false);
    const [cardTitleSave, setCardTitleSave] = useState("");
    const [displayOptions, setDisplayOptions] = useState(false);

    // 4% extra
    return (
        <>
            <div className="subjectAndTitle flex h-[50px] items-center w-[55%] mx-[auto] mt-[75px] text-[160%] font-extralight text-left justify-center">
                <h1 className="subject max-w-[10%]"> Subject:</h1>
                <h1 className="subjectTitle max-w-[25%] ml-[2%] font-semibold">{titleSave}</h1>
                <h1 className="divider w-[2%] mx-[2%] text-center"> | </h1>
                <h1 className="flashcardSet max-w-[25%]"> Flashcard Set: </h1>
                {flashSetTitle}

                <div className="enterButton w-[5%] mx-[3%] pt-[12px]">
                    <button
                        className={titleEntered ? enterTitle : "enterButtonIcon hidden"}
                        onClick={create}>
                        {addOrSave()}
                    </button>
                </div>
            </div>

            <div className = {displayOptions ? "cardSection" : "cardSection hidden"}>
                <h1> Test </h1>
            </div>

        </>
    )
}