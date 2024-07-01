import {useEffect, useState} from "react";
import CardDetails from "#ComponentsFiles/NewFlashcardPage/CardDetails.tsx";
import {TSubject} from "../../../Types/TSubject.ts";
import {apiRequest} from "../../../Utils/ApiRequest.ts";

export default function CreateFlashcard() {
  const subjectId = localStorage.getItem('subjectId');
  const [subject, setSubject] = useState<TSubject | undefined>(undefined)
  useEffect(() => {
    apiRequest<null, TSubject>(`api/subject/${subjectId}`, 'GET').then((response) => {
      setSubject(response.response)
    })
  }, [subjectId])
  console.log(subject);
  const handleTitleEntered = (event) => {
    const inputValue = event.target.value;
    setCardTitleSave(inputValue);
    localStorage.setItem('flashSetTitle', inputValue);
    /*apiRequest('api/subject', 'POST', {name: titleSave})
      .then(r => {
        if (r.status === 200) {
          const response = r.response[0] as TSubject;
          localStorage.setItem('subject', response.id.toString());
        }
      });*/
    if (inputValue.trim().length > 2) {
      setTitleEntered(true);
    } else {
      setTitleEntered(false);
    }
  }

  const [flashSetTitle, setFlashSetTitle] = useState(
    <input type="text"
           maxLength={45}
           className="enterTitle flex max-w-[80%] border-b-[1px] border-b-[solid] border-b-[black] font-extralight"
           onChange={handleTitleEntered}/>);

  const create = () => {
    setDisplayOptions(true);
    setEnterButton("enterButtonIcon mb-[16px] cursor-auto");
    setFlashSetTitle(
      <h1 className="enterTitle flex font-semibold"
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
      <div
        className="subjectTitle flex items-center w-[80%] mx-[auto] justify-center mt-[55px] text-[140%] font-extralight text-left overflow-clip mb-[100px]">
        <h1 className="subject mr-[20px]"> Subject:</h1>
        <h1 className="subjectTitle flex font-semibold">{subject?.name}</h1>
        <h1 className="divider mx-[30px]">|</h1>
        <h1 className="flashcardSet flex mr-[20px]"> Flashcard Set: </h1>
        {flashSetTitle}

        <div className="enterButton w-[5%] flex ml-[28px] pt-[5px]">
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