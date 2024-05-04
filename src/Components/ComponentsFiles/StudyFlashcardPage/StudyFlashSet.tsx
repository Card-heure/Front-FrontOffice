export default function StudyFlashSet() {
    const titleSave = localStorage.getItem('titleSave');
    const flashSetTitle = localStorage.getItem('flashSetTitle');

    return (
        <>
            <div
                className="subjectAndTitle flex h-[40px] items-center w-[55%] mx-[auto] mt-[75px] mb-[100px] text-[160%] font-extralight text-left justify-center overflow-clip">
                <h1 className="subject max-w-[10%]"> Subject:</h1>
                <h1 className="subjectTitle max-w-[25%] ml-[2%] font-bold">{titleSave}</h1>
                <h1 className="divider w-[2%] mx-[2%] text-center"> | </h1>
                <h1 className="flashcardSet max-w-[25%] h-[35px] items-baseline"> Flashcard Set: </h1>
                <h1 className = "flashSetTitle flex ml-[2%] w-[26%] leading-[34px] items-end font-bold">{flashSetTitle}</h1>
            </div>
        </>
    );
}