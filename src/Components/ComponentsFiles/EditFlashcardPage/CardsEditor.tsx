import React, { useState, useRef } from 'react';
import { TCard, TCreateCard } from "../../../Types/TCard.ts";
import { ECardType } from "../../../Types/enum/ECardType.ts";
import { apiRequest } from "../../../Utils/ApiRequest.ts";
import { useNavigate } from "react-router-dom";
import { TSubject } from "../../../Types/TSubject.ts";
import { TFlashCard } from "../../../Types/TFlashCard.ts";

export default function CardsEditor(props: { card: TCard, subject: TSubject, cardTitle: string, subjectId: number }) {
    const navigate = useNavigate();
    const initialTerms = props.card.content as TFlashCard[];
    const [terms, setTerms] = useState<TFlashCard[]>(initialTerms);

    const [newTerm, setNewTerm] = useState('');
    const [newDefinition, setNewDefinition] = useState('');
    const [editTerm, setEditTerm] = useState('');
    const [editDefinition, setEditDefinition] = useState('');
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const iconRefs = useRef<(HTMLImageElement | null)[]>([]);

    function saveCard() {
        const createCard: TCreateCard = {} as TCreateCard;
        createCard.title = props.cardTitle;
        createCard.content = JSON.stringify(terms);
        createCard.content_type = ECardType.FlashCard;
        createCard.subject_id = props.subjectId;
        apiRequest<TCreateCard, TCard>(`api/card`, 'POST', createCard).then(() => {
            navigate(`/subject-view/${props.subjectId}`);
        });
    }

    const autoResize = (textarea: HTMLTextAreaElement) => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    const resetSize = () => {
        const termElement = document.getElementById('termSide') as HTMLTextAreaElement;
        const definitionElement = document.getElementById('definitionSide') as HTMLTextAreaElement;
        if (termElement) termElement.style.height = '75px';
        if (definitionElement) definitionElement.style.height = '75px';
    };

    const handleNewTermChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewTerm(event.target.value);
        autoResize(event.target);
    };

    const handleNewDefinitionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewDefinition(event.target.value);
        autoResize(event.target);
    };

    const handleEditTermChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditTerm(event.target.value);
        autoResize(event.target);
    };

    const handleEditDefinitionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditDefinition(event.target.value);
        autoResize(event.target);
    };

    const handleSave = () => {
        if (editingIndex !== null) {
            const updatedTerms = [...terms];
            updatedTerms[editingIndex] = { term: editTerm.trim(), definition: editDefinition.trim() };
            setTerms(updatedTerms);
            setEditingIndex(null);
            setEditTerm('');
            setEditDefinition('');
        } else if (newTerm.trim() !== '' && newDefinition.trim() !== '') {
            const newQA = [...terms, { term: newTerm.trim(), definition: newDefinition.trim() }];
            setTerms(newQA);
            setNewTerm('');
            setNewDefinition('');
        }
        resetSize();
    };

    const handleEdit = (index: number) => {
        if (editingIndex === index) {
            handleSave();
        } else {
            setEditingIndex(index);
            setEditTerm(terms[index].term);
            setEditDefinition(terms[index].definition);
            setNewTerm('');
            setNewDefinition('');
        }
    };

    const handleDelete = (index: number) => {
        const updatedTerms = terms.filter((_, i) => i !== index);
        setTerms(updatedTerms);
    };

    return (
        <>
            <div className="headers flex w-[90%] mx-[auto]">
                <h2 className="frontHeader flex justify-center text-center font-light italic text-[120%] w-[45%] h-[50px] mb-[20px]">Term</h2>
                <h2 className="backHeader flex justify-center text-center font-light italic text-[120%] w-[45%] h-[50px] mb-[20px]">Definition</h2>
                <div className="w-[10%]"></div>
            </div>

            <div className="entriesAndListsContainer">
                <div className="entries flex justify-between flex-wrap w-[82%] ml-[9%] h-[auto] relative">
                    <textarea
                        className="termSide flex focus:outline-none w-[40%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
                        id="termSide"
                        maxLength={650}
                        value={newTerm}
                        onChange={handleNewTermChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    />

                    <textarea
                        className="definitionSide flex termSide focus:outline-none ml-[6%] w-[40%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
                        id="definitionSide"
                        maxLength={650}
                        value={newDefinition}
                        onChange={handleNewDefinitionChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    />
                    <div className="flex w-[8%] pl-[30px] mt-[15px]">
                        <button
                            className="clicker text-[175%] w-[40px] h-[40px] rounded-[50%] border-[1px] border-[solid] border-[black] flex justify-center items-center"
                            id="clicker"
                            onClick={handleSave}>
                            +
                        </button>
                    </div>
                </div>

                <div className="lists flex flex-wrap w-[90%] mx-[auto] h-[auto] mt-[60px] relative">
                    {terms.slice().reverse().map((term, index) => (
                        <div className="termList w-[100%] flex flex-wrap items-start" key={terms.length - index - 1}>
                            <div className="w-[45%] mb-[50px]">
                                <div className="qaBox w-[80%] mx-[auto] justify-center">
                                    {editingIndex === terms.length - index - 1 ? (
                                        <textarea
                                            className="qaBox w-[80%] mx-[auto] justify-center"
                                            value={editTerm}
                                            onChange={handleEditTermChange}
                                        />
                                    ) : (
                                        <h3>{term.term}</h3>
                                    )}
                                </div>
                            </div>
                            <div className="flex w-[45%] mb-[50px]">
                                <div className="qaBox w-[80%] mx-[auto] justify-center">
                                    {editingIndex === terms.length - index - 1 ? (
                                        <textarea
                                            className="qaBox w-[80%] mx-[auto] justify-center"
                                            value={editDefinition}
                                            onChange={handleEditDefinitionChange}
                                        />
                                    ) : (
                                        <h3>{term.definition}</h3>
                                    )}
                                </div>
                            </div>
                            <div className="verticalLine"></div>
                            <div className="flex w-[5%] mt-[15px]">
                                <div className="w-[40px] h-[40px] rounded-[50%] bg-[black] flex text-[white] items-center justify-center">
                                    {terms.length - index}
                                </div>
                            </div>
                            <div className="w-[5%] flex items-center mt-[20px]">
                                <button
                                    className="editOutline w-[25px] h-[auto] mr-[12px] flex items-center"
                                    onClick={() => handleEdit(terms.length - index - 1)}>
                                    <img
                                        src={editingIndex === terms.length - index - 1 ? "/src/assets/saveCheckIcon.png" : "/src/assets/whitePencilIcon.png"}
                                        ref={el => iconRefs.current[terms.length - index - 1] = el}
                                    />
                                </button>
                                <button
                                    className="editOutline w-[19px] h-[auto] ml-[12px] flex items-center"
                                    onClick={() => handleDelete(terms.length - index - 1)}>
                                    <img src="/src/assets/deleteIcon.png"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="termCountAndSave flex mt-[50px] mb-[50px] w-[50%] mx-[auto] justify-center items-center">
                <h4 className="totalTerms flex items-center">Total Terms: {terms.length}</h4>
                <button
                    className="saveButton flex items-center w-[70px] h-[50px] bg-[black] text-[white] justify-center rounded-[15px] ml-[30px]"
                    onClick={saveCard}>
                    Save
                </button>
            </div>
        </>
    );
}

