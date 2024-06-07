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
            maxLength={45}
            className="enterTitle flex w-[60%] max-w-[80%] border-b-[1px] border-b-[solid] border-b-[black] font-extralight"
            onChange={handleTitleEntered}/>);

    const create = () => {
        setDisplayOptions(true);
        setEnterButton("enterButtonIcon mb-[16px] cursor-auto");
        setTestTitle(
            <h1
                className="enterTitle flex max-w-[70%] font-semibold"
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
            <div className="subjectTitle flex items-center w-[50%] mx-[auto] mt-[55px] text-[140%] font-extralight text-left justify-center overflow-clip">
                <h1 className="subject flex w-[10%] mr-[20px]"> Subject:</h1>
                <h1 className="subjectTitle flex max-w-[70%] font-semibold">{titleSave}</h1>
            </div>

            <div className="testTitle flex items-center h-[35px] w-[50%] mx-[auto] mt-[25px] mb-[100px] text-[140%] font-extralight text-left justify-center">
                <h1 className="flashcardSet flex w-[10%]"> Test: </h1>
                {testTitle}

                <div className="enterButton w-[5%] ml-[28px] pt-[5px]">
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