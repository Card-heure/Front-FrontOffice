import {useEffect, useState} from "react";
import {TSubject, TUpdateSubject} from "../../../Types/TSubject.ts";
import {TCard} from "../../../Types/TCard.ts";
import {ECardType} from "../../../Types/enum/ECardType.ts";
import {apiRequest} from "../../../Utils/ApiRequest.ts";
import {useNavigate} from "react-router-dom";

export default function SubjectDisplays(props: { subject?: TSubject, cards?: TCard[] }) {
  const [flashcardSet, setFlashcardSet] = useState<TCard[]>([]);
  const [testSet, setTestSet] = useState<TCard[]>([]);
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState(props.subject?.name);
  const [edited, setEdited] = useState(false);
  const [addSpace, setAddSpace] = useState("subjectTitleEdit max-w-[30%] font-semibold");
  const navigation = useNavigate();
  useEffect(() => {
    props.cards?.map((card) => {
      if (card.content_type === ECardType.FlashCard) {
        setFlashcardSet(flashcardSet => [...flashcardSet, card])
      } else if (card.content_type === ECardType.Test) {
        setTestSet(testSet => [...testSet, card])
      }
    })
  }, [props.cards]);

  const [circlesFlashcard, setCirclesFlashcard] = useState(
    <div className="displayCircles w-[25px] h-[34px] justify-center">
      <div className="circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
      <div className="circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
      <div className="circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
    </div>);

  const [circlesTest, setCirclesTest] = useState(
    <div className="displayCircles w-[25px] h-[34px] justify-center">
      <div className="circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
      <div className="circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
      <div className="circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
    </div>);

  /*const [circlesMindmap, setCirclesMindmap] = useState(
    <div className="displayCircles w-[25px] h-[34px] justify-center">
      <div className="circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
      <div className="circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
      <div className="circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
    </div>);*/

  const [enterIconFlashcard, setEnterIconFlashcard] = useState(
    <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
      +
    </h2>
  );

  const [enterIconTest, setEnterIconTest] = useState(
    <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
      +
    </h2>
  );

  /*const [enterIconMindmap, setEnterIconMindmap] = useState(
    <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
      +
    </h2>
  );*/

  const [textColorFlashcard, setTextColorFlashcard] = useState(
    "flashcardDisplay border-y-[1px] border-y-[black] border-y-[solid] flex items-center px-[20px] justify-between"
  );

  const [textColorTest, setTextColorTest] = useState(
    "testDisplay border-b-[1px] border-b-[black] border-b-[solid] flex items-center px-[20px] justify-between"
  );

  const [displayFlashcards, setDisplayFlashcards] = useState(
    "displayFlashcards hidden"
  );
  const [displayTests, setDisplayTests] = useState(
    "displayTests hidden"
  );

  const [showHideFlashcard, setSHFlashcard] = useState(true);
  const [showHideTest, setSHTest] = useState(true);

  const displayDetailsFlashcard = () => {
    showHideFlashcard ? setSHFlashcard(false) : setSHFlashcard(true)
    if (showHideFlashcard) {
      setCirclesFlashcard(
        <div className="displayCircles w-[25px] h-[34px] flex items-center">
          <div
            className="circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
          <div className="circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
          <div className="circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
        </div>);

      setEnterIconFlashcard(
        <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[28px] rounded-[50%] bg-[black] border-[white] border-[1px] border-[solid] font-normal text-[140%] text-center items-center">
          +
        </h2>
      );

      setTextColorFlashcard(
        "flashcardDisplay border-y-[1px] border-y-[black] border-y-[solid] bg-[black] flex items-center px-[20px] justify-between text-[white]"
      );

      setDisplayFlashcards(
        "displayFlashcards border-b-[1px] border-b-[solid] border-b-[black] py-[50px] mx-[auto] justify-center flex"
      );
    } else {
      setCirclesFlashcard(
        <div className="displayCircles w-[25px] h-[34px] justify-center">
          <div className="circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
          <div className="circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
          <div className="circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
        </div>);

      setEnterIconFlashcard(
        <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
          +
        </h2>
      );

      setTextColorFlashcard(
        "flashcardDisplay border-y-[1px] border-y-[black] border-y-[solid] flex items-center px-[20px] justify-between"
      );

      setDisplayFlashcards(
        "displayFlashcards hidden"
      );
    }
  };

  const displayDetailsTest = () => {
    showHideTest ? setSHTest(false) : setSHTest(true)
    if (showHideTest) {
      setCirclesTest(
        <div className="displayCircles w-[25px] h-[34px] flex items-center">
          <div
            className="circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
          <div className="circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
          <div className="circles flex m-auto w-[6px] h-[6px] rounded-[50%] border-[1px] border-[white] bg-[white] border-[solid]"></div>
        </div>);

      setEnterIconTest(
        <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[28px] rounded-[50%] bg-[black] border-[white] border-[1px] border-[solid] font-normal text-[140%] text-center items-center">
          +
        </h2>
      );

      setTextColorTest(
        "testDisplay border-b-[1px] border-b-[black] border-b-[solid] bg-[black] flex items-center px-[20px] justify-between text-[white]"
      );

      setDisplayTests(
        "displayTests border-b-[1px] border-b-[solid] border-b-[black] py-[50px] mx-[auto] justify-center flex"
      );
    } else {
      setCirclesTest(
        <div className="displayCircles w-[25px] h-[34px] justify-center">
          <div className="circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
          <div className="circles m-auto w-[6px] h-[6px] mt-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
          <div className="circles m-auto w-[6px] h-[6px] my-[4px] rounded-[50%] border-[1px] border-[black] border-[solid]"></div>
        </div>);

      setEnterIconTest(
        <h2 className="enterButtonIcon w-[30px] mx-[auto] h-[30px] leading-[30px] rounded-[50%] bg-[black] text-[white] font-normal text-[140%] text-center">
          +
        </h2>
      );

      setTextColorTest(
        "testDisplay border-b-[1px] border-b-[black] border-b-[solid] flex items-center px-[20px] justify-between"
      );

      setDisplayTests(
        "displayTests hidden"
      );
    }
  };

  const handleSaveTitle = () => {
    setEditTitle(!editTitle)
    if (editTitle) {
      setAddSpace("subjectTitleEdit max-w-[30%] font-semibold")
    }
    if (!editTitle) {
      setAddSpace("subjectTitleEdit font-light text-black border-b-[black] border-b-[solid] border-b-[1px]")
    }
    setEdited(true);
    const updateSubject : TUpdateSubject = {
      name: title ?? ""
    }
    apiRequest<TUpdateSubject, TSubject>(`api/subject/${props.subject?.id}`, 'PUT', updateSubject).then((response) => {
      setTitle(response.response.name)
    })
  };

  const editItem = () => {

  }
  function deleteItem(id: number) {
    apiRequest<null, null>(`api/card/${id}`, 'DELETE', ).then(() => {
      window.location.reload()
    })
  }
  const deleteSubject = () => {
    apiRequest<null, null>(`api/subject/${props.subject?.id}`, 'DELETE', ).then(() => {
      navigation('/home')
    })
  }


  return (
    <>
      <div className="subjectAndTitle flex h-[40px] items-center w-[75%] mx-[auto] mt-[75px] mb-[50px] text-[160%] font-extralight text-left justify-center overflow-clip">
        <h1 className="subject max-w-[15%] mr-[12px]"> Sujet :</h1>
        {editTitle ? (
          <input
            type="text"
            placeholder={props.subject?.name}
            maxLength={45}
            onChange={(e) => setTitle(e.target.value)}
            className={addSpace}
          />
        ) : (
          <h1 className={addSpace}>{edited ? title : props.subject?.name} </h1>
        )}
        <button className="editOutline w-[23px] h-[auto] ml-[25px]"
                onClick={handleSaveTitle}>
          <img src={editTitle ? "/src/assets/saveCheckIcon.png" : "/src/assets/whitePencilIcon.png"}/>
        </button>
      </div>

      <div className={textColorFlashcard} onClick={displayDetailsFlashcard}>
        <button className="flashcardDisplayButton w-[45%] flex items-center">
          {circlesFlashcard}
          <h2 className="displayFlashcardText ml-[10px] pt-[25px] pb-[25px]">Afficher tous les jeux de flashcards</h2>
        </button>

        <button className="createFlashcardButton flex justify-start items-center w-[25%]">
          <div className="createFlashcardCircle items-center mr-[25px]">
            {enterIconFlashcard}
          </div>
          <a className="createFlashcardText justify-start" href={"/new-flashCard"} onClick={() => localStorage.setItem('subjectId', props.subject?.id.toString() ?? '')}>Créer un nouveau jeu de flashcards </a>
        </button>
      </div>

      <div className={displayFlashcards}>
        <div>
          {flashcardSet.map((card, index) => (
            <div className="mindmapList mx-[1%] flex justify-center mb-[30px] items-center"
                 key={card.id}>
              <h2 className="indexNumber w-[8%] flex justify-center">
                <div
                  className="indexCircle w-[55px] h-[55px] rounded-[50%] border-[black] border-[1px] border-[solid] text-[black] justify-center flex text-center items-center [box-shadow:-8px_6px_2px_rgb(199,_199,_201)]">
                  {index + 1}
                </div>
              </h2>
              <h1 className="setTitle w-[75%] pl-[75px]">
                <a href={"/study-flashCard/" + card.id}>
                  <button
                    className="titleButton border-[1px] border-[solid] border-[black] p-[15px] rounded-[15px] w-[600px] [box-shadow:-10px_11px_2px_rgb(199,_199,_201)]">
                    {card.title}
                  </button>
                </a>
              </h1>
              <div className="editDelete flex justify-between mx-[auto] items-center ml-[75px]">
                <button className="editOutline w-[25px] h-[auto] mr-[20px]"
                        onClick={editItem}>
                  <a href={"/edit-test/" + card.id}>
                    <img src="/src/assets/whitePencilIcon.png"/>
                  </a>
                </button>
                <button className="editOutline w-[19px] h-[auto] ml-[20px]"
                        onClick={()=>deleteItem(card.id)}>
                  <img src="/src/assets/deleteIcon.png"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={textColorTest} onClick={displayDetailsTest}>
        <button className="testdDisplayButton w-[60%] flex items-center">
          {circlesTest}
          <h2 className="displayTestText ml-[10px] pt-[25px] pb-[25px]">Afficher tous les tests</h2>
        </button>

        <button className="createTestButton flex justify-start items-center w-[25%]">
          <div className="createTestCircle items-center mr-[25px]">
            {enterIconTest}
          </div>
          <a className="createTestText justify-start" href={"/new-test"} onClick={() => localStorage.setItem('subjectId', props.subject?.id.toString() ?? '')}>Créer un nouveau test</a>
        </button>

      </div>
      <div className={displayTests}>
        <div>
          {testSet.map((card, index) => (
            <div className="mindmapList w-full mx-[1%] flex justify-center mb-[30px] items-center"
                 key={card.id}>
              <h2 className="indexNumber w-[8%] flex justify-center">
                <div
                  className="indexCircle w-[55px] h-[55px] rounded-[50%] border-[black] border-[1px] border-[solid] text-[black] justify-center flex text-center items-center [box-shadow:-8px_6px_2px_rgb(199,_199,_201)]">
                  {index + 1}
                </div>
              </h2>
              <h1 className="setTitle w-[75%] pl-[75px]">
                <a href={"/study-test/" + card.id}>
                  <button
                    className="titleButton border-[1px] border-[solid] border-[black] p-[15px] rounded-[15px] w-[600px] [box-shadow:-10px_11px_2px_rgb(199,_199,_201)]">
                    {card.title}
                  </button>
                </a>
              </h1>
              <div className="editDelete flex justify-between mx-[auto] items-center ml-[75px]">
                <button className="editOutline w-[25px] h-[auto] mr-[20px]"
                        onClick={editItem}>
                  <a href={"/edit-test/" + card.id}>
                    <img src="/src/assets/whitePencilIcon.png"/>
                  </a>
                </button>
                <button className="editOutline w-[19px] h-[auto] ml-[20px]"
                        onClick={()=>deleteItem(card.id)}>
                  <img src="/src/assets/deleteIcon.png"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="deleteSubject justify-center mx-[auto] mt-[100px] mb-[200px] flex items-center"
              onClick={deleteSubject}>
        <img className="deleteIcon w-[22px] h-[auto] mr-[15px]" src="/src/assets/deleteIcon.png"/>
        <h2 className="deleteSubjectText text-[115%] font-light text-red-600 hover:font-normal flex"> Supprimer ce sujet </h2>
      </button>
    </>
  )
}