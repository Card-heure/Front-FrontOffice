import {useEffect, useState} from "react";
import {TSubject} from "../../../Types/TSubject.ts";
import {apiRequest} from "../../../Utils/ApiRequest.ts";
import {TCard} from "../../../Types/TCard.ts";

export default function TestTitleEditor(props:{subject?: TSubject, card:TCard}) {
    const subjectId = localStorage.getItem('subjectId');
    const [subject, setSubject] = useState<TSubject | undefined>(undefined);
    const [editTitle, setEditTitle] = useState(false);
    const [title, setTitle] = useState(props.card.title);
    const [edited, setEdited] = useState(false);
    const [addSpace, setAddSpace ] = useState("subjectTitleEdit max-w-[30%] font-semibold");

    useEffect(() => {
        apiRequest<null, TSubject>(`api/subject/${subjectId}`, 'GET').then((response) => {
            setSubject(response.response);
        });
    }, [subjectId]);

    const handleSaveTitle = () => {
        setEditTitle(!editTitle)
        if (editTitle) {
            setAddSpace("subjectTitleEdit max-w-[30%] font-semibold")

        }
        if (!editTitle) {
            setAddSpace("subjectTitleEdit font-light text-black border-b-[black] border-b-[solid] border-b-[1px]")
        }
        setEdited(true);
    };

    return (
        <>
            <div
                className="subjectTitle flex items-center w-[80%] mx-[auto] justify-center mt-[55px] text-[140%] font-extralight text-left overflow-clip mb-[100px]">
                <h1 className="subject mr-[20px]"> Sujet:</h1>
                <h1 className="subjectTitle flex font-semibold">{subject?.name}</h1>
                <h1 className="divider mx-[30px]">|</h1>
                <h1 className="testSet flex mr-[20px]"> Nom du test: </h1>
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
                <button className = "editOutline w-[23px] h-[auto] ml-[25px]"
                        onClick={handleSaveTitle}>
                    <img src = {editTitle ? "/src/assets/saveCheckIcon.png" : "/src/assets/whitePencilIcon.png"}/>
                </button>
            </div>

            <div className="cardSection">
            </div>
        </>
    );
}