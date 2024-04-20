export default function CreateFlashcard() {
    const titleSave = localStorage.getItem('titleSave');
    return (
        <>
        <div className = "subjectAndTitle flex w-[70%] mx-[15%] mt-[75px] text-[160%] font-light text-left justify-center">
            <h1 className = "subject max-w-[40%] border-[black]"> Subject: <span className = "subjectTitle font-semibold">{titleSave}</span></h1>
            <h1 className = "divider w-[2%] mx-[2%] text-center"> | </h1>
            <h1 className = "flashcardSet max-w-[50%]"> Flashcard Set: Temporary</h1>
        </div>
        </>
    )
}