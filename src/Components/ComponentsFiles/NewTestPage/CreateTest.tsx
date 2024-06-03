import {useState} from "react";
import TestQuestions from "#ComponentsFiles/NewTestPage/TestQuestions.tsx";

export default function CreateTest() {
    const titleSave = localStorage.getItem('titleSave');
    // @ts-ignore
    const handleTitleEntered = (event) => {
        const inputValue = event.target.value;
        setTestTitleSave(inputValue);
        localStorage.setItem('testTitle', inputValue);
        if (inputValue.trim().length > 2) {
            setTitleEntered(true);
        }
        else {
            setTitleEntered(false);
        }
    }

    const [testTitle, setTestTitle] = useState(
        <input
            type="text"
            className="enterTitle w-[30%] items-baseline border-b-[1px] border-b-[solid] border-b-[black] font-extralight"
            onChange={handleTitleEntered}/>);

    const create = () => {
        setDisplayOptions(true);
        setEnterButton("enterButtonIcon mb-[16px] cursor-auto");
        setTestTitle(
            <h1
                className="enterTitle font-semibold max-w-[30%]"
                onChange={handleTitleEntered}> {testTitleSave} </h1>);
    }

    const addOrSave = () => {
        return displayOptions ? <p className="checkmark"></p> : '+';
    };

    const [enterButton, setEnterButton] = useState("enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] mb-[12px] rounded-[50%] bg-[black] text-[white] font-normal text-center");
    const [titleEntered, setTitleEntered] = useState(false);
    const [testTitleSave, setTestTitleSave] = useState("");
    const [displayOptions, setDisplayOptions] = useState(false);

    //
    return (
        <>
            <div className="subjectAndTitle flex h-[40px] items-center w-[55%] mx-[auto] mt-[75px] mb-[100px] text-[160%] font-extralight text-left justify-center overflow-clip">
                <h1 className="subject max-w-[15%] mr-[12px]"> Subject:</h1>
                <h1 className="subjectTitle max-w-[30%] font-semibold">{titleSave}</h1>
                <h1 className="divider w-[2%] mx-[18px] text-center"> | </h1>
                <h1 className="flashcardSet max-w-[20%] mr-[12px]"> Test: </h1>
                {testTitle}

                <div className="enterButton w-[5%] mx-[28px] pt-[8px]">
                    <button
                        className={titleEntered ? enterButton : "enterButtonIcon hidden"}
                        onClick={create}>
                        {addOrSave()}
                    </button>
                </div>
            </div>

            <div className={displayOptions ? "cardSection" : "cardSection hidden"}>
                <TestQuestions/>
            </div>

        </>
    )
}