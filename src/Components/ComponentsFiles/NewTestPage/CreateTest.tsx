import { useEffect, useState } from "react";
import TestQuestions from "#ComponentsFiles/NewTestPage/TestQuestions.tsx";
import { TSubject } from "../../../Types/TSubject.ts";
import { apiRequest } from "../../../Utils/ApiRequest.ts";

export default function CreateTest() {
  const subjectId = localStorage.getItem('subjectId');
  const [subject, setSubject] = useState<TSubject | undefined>(undefined);
  const [enterButton, setEnterButton] = useState("enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] mb-[12px] rounded-[50%] bg-[black] text-[white] font-normal text-center");
  const [titleEntered, setTitleEntered] = useState(false);
  const [testTitleSave, setTestTitleSave] = useState("");
  const [displayOptions, setDisplayOptions] = useState(false);
  const [isTitleSaved, setIsTitleSaved] = useState(false);

  useEffect(() => {
    apiRequest<null, TSubject>(`api/subject/${subjectId}`, 'GET').then((response) => {
      setSubject(response.response);
    });
  }, [subjectId]);

  const handleTitleEntered = (event) => {
    const inputValue = event.target.value;
    setTestTitleSave(inputValue);
    if (inputValue.trim().length > 2) {
      setTitleEntered(true);
    } else {
      setTitleEntered(false);
    }
  };

  const create = () => {
    setDisplayOptions(true);
    setEnterButton("enterButtonIcon mb-[16px] cursor-auto");
    setIsTitleSaved(true);
  };

  const enterInitiate = (event) => {
    if (event.key === 'Enter') {
      create();
    }
  };

  const addOrSave = () => {
    return displayOptions ? <p className="checkmark"></p> : '+';
  };

  return (
      <>
        <div className="subjectTitle flex items-center w-[80%] mx-[auto] justify-center mt-[55px] text-[140%] font-extralight text-left overflow-clip mb-[100px]">
          <h1 className="subject mr-[20px]"> Sujet:</h1>
          <h1 className="subjectTitle flex font-semibold">{subject?.name}</h1>
          <h1 className="divider mx-[30px]">|</h1>
          <h1 className="testSet flex mr-[20px]"> Nom du test: </h1>
          {isTitleSaved ? (
              <h1 className="enterTitle flex font-semibold">
                {testTitleSave}
              </h1>
          ) : (
              <input
                  type="text"
                  maxLength={45}
                  className="enterTitle flex max-w-[80%] border-b-[1px] border-b-[solid] border-b-[black] font-extralight"
                  onChange={handleTitleEntered}
                  onKeyDown={enterInitiate}
                  value={testTitleSave}
              />
          )}

          <div className="enterButton flex ml-[28px] pt-[5px]">
            <button className={titleEntered ? enterButton : "enterButtonIcon hidden"} onClick={create}>
              {addOrSave()}
            </button>
          </div>
        </div>

        <div className={displayOptions ? "cardSection" : "cardSection hidden"}>
          {testTitleSave && subject && <TestQuestions cardTitle={testTitleSave} subjectId={subject.id} />}
        </div>
      </>
  );
}
