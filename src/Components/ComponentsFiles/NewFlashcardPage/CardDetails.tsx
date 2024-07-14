import {useState} from 'react';
import {apiRequest} from "../../../Utils/ApiRequest.ts";
import {TCard, TCreateCard} from "../../../Types/TCard.ts";
import {ECardType} from "../../../Types/enum/ECardType.ts";
import {TFlashCard} from "../../../Types/TFlashCard.ts";
import {useNavigate} from "react-router-dom";

export default function CardDetails(props: { cardTitle: string, subjectId: number }) {
    const navigate = useNavigate();

    const [terms, setTerms] = useState<TFlashCard[]>([]);
    const [currentTerm, setCurrentTerm] = useState('');
    const [currentDefinition, setCurrentDefinition] = useState('');
    const [cardCount, setCardCount] = useState(0);
    const [saveButton, setSaveButton] = useState("hidden");
    const [cardOrCards, setCardOrCards] = useState("Carte");

    function saveCard() {
        const createCard: TCreateCard = {} as TCreateCard;
        createCard.title = props.cardTitle;
        createCard.content = JSON.stringify(terms);
        createCard.content_type = ECardType.FlashCard;
        createCard.subject_id = props.subjectId;
        apiRequest<TCreateCard, TCard>(`api/card`, 'POST', createCard).then(() => {
            navigate(`/SubjectView/${props.subjectId}`);
        })
    }

    const autoResize = ({textarea}: { textarea: any }) => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    const resetSize = () => {
        // @ts-ignore
        document.getElementById(`termSide`).setAttribute('style', 'height: 75px;');
        // @ts-ignore
        document.getElementById(`definitionSide`).setAttribute('style', 'height: 75px;');
    }

    const resetCursorToBeginning = (input: HTMLInputElement | HTMLTextAreaElement): void => {
        input.setSelectionRange(0, 0);
        input.focus();
    };
    // @ts-ignore
    const handleTermChange = (event) => {
        setCurrentTerm(event.target.value);
        autoResize({textarea: event.target})
    };

    // @ts-ignore
    const handleDefinitionChange = (event) => {
        setCurrentDefinition(event.target.value);
        autoResize({textarea: event.target});
    };


    // @ts-ignore
    const handleSave = (event) => {

        if (currentTerm.trim() !== '' && currentDefinition.trim() !== '' && (event.key === 'Enter' || event.target.id == "clicker")) {
            // @ts-ignore
            const newTerms = ([...terms, {term: currentTerm.trim(), definition: currentDefinition.trim()}]);
            localStorage.setItem('newFlashSet', JSON.stringify(newTerms));
            // @ts-ignore
            setTerms(newTerms);
            setCurrentTerm('');
            setCurrentDefinition('');
            setCardCount(newTerms.length);
            resetSize();

            const inputElement = document.getElementById('termSide') as HTMLInputElement;
            resetCursorToBeginning(inputElement);

            event.preventDefault(); // prevents the enter key from going to a new line by default
            //event.dispatchEvent(new Event('submit')); // ensures that the enter key's only action is submitting the text


            if (newTerms.length > 0) {
                setSaveButton("saveSet w-[auto] px-[25px] mx-[auto] border-[1px] border-[solid] border-[black] text-[115%] text-[white] font-light min-h-[55px] rounded-[20px] bg-[rgb(18,_18,_18)]")
            }

            if (newTerms.length > 1) {
                setCardOrCards("Cartes");
            }
        }
    }

    return (
        <>
            <div className="headers flex w-[85%] mx-[auto]">
              <h2 className="frontHeader flex justify-center text-center font-light italic text-[120%] w-[45%] h-[50px] mb-[20px]">Recto</h2>
              <h2 className="backHeader flex justify-center text-center font-light italic text-[120%] w-[45%] h-[50px] mb-[20px]">Verso</h2>
              <div className = "w-[10%]"></div>
            </div>

          <div className="entriesAndListsContainer">

            <div
                className="entries flex flex-wrap w-[85%] mx-[auto] h-[auto] relative">
                    <textarea
                        className="termSide flex mx-[auto] focus:outline-none w-[36%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
                        id="termSide"
                        maxLength={650}
                        value={currentTerm}
                        onChange={handleTermChange}
                        onKeyDown={handleSave}
                    />

              <textarea
                  className="definitionSide flex mx-[auto] questionSide focus:outline-none w-[36%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
                  id="definitionSide"
                  maxLength={650}
                  value={currentDefinition}
                  onChange={handleDefinitionChange}
                  onKeyDown={handleSave}
              />
              <div className="flex w-[10%] mt-[15px]">
                <button className = "clicker text-[175%] w-[40px] h-[40px] rounded-[50%] border-[1px] border-[solid] border-[black] flex justify-center items-center"
                id = "clicker"
                onClick = {handleSave}>
                  +
                </button>
              </div>
            </div>

            <div
                className="lists flex flex-wrap w-[85%] mx-[auto] h-[auto] mt-[60px] relative">
              {terms.slice().reverse().map((term, index) => (
                  <div className="termList w-[100%] flex flex-wrap items-start" key={index}>
                    <div className="w-[45%] mb-[50px]">
                      <h3 className="flashcardBox w-[80%] mx-[auto] justify-center"> {term["term"]}</h3>
                    </div>
                    <div className="flex w-[45%] mb-[50px]">
                      <h3 className="flashcardBox w-[80%] mx-[auto] justify-center">{term["definition"]}</h3>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="flex w-[5%] mt-[15px]">
                      <div className = "w-[40px] h-[40px] rounded-[50%] bg-[black] flex text-[white] items-center justify-center"> {terms.length - index} </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          <div className="cardCountAndSave flex mt-[55px] mb-[200px] w-[75%] mx-[auto] pr-[9%]">
                <button className={saveButton}>
                    <button onClick={saveCard}>
                        Sauvegarder {cardCount} {cardOrCards}
                    </button>
                </button>
            </div>
        </>
    )
}