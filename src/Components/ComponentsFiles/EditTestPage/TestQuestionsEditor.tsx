import React, { useState, useRef } from 'react';
import {TCard, TUpdateCard} from "../../../Types/TCard.ts";
import { apiRequest } from "../../../Utils/ApiRequest.ts";
import { TTest } from "../../../Types/TTest.ts";
import { useNavigate } from "react-router-dom";
import { TSubject } from "../../../Types/TSubject.ts";

export default function TestQuestionsEditor(props: { card: TCard, subject: TSubject, cardTitle: string, subjectId: number }) {
    const navigate = useNavigate();
    const initialQuestions = props.card.content as TTest[];
    const [questions, setQuestions] = useState<TTest[]>(initialQuestions);

    // Separate state variables for new question/answer and editing
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');
    const [editQuestion, setEditQuestion] = useState('');
    const [editAnswer, setEditAnswer] = useState('');
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const iconRefs = useRef<(HTMLImageElement | null)[]>([]);

    function saveCard() {
        const updatecard : TUpdateCard={
            title: props.cardTitle,
            content: JSON.stringify(questions),
        };
        apiRequest<TUpdateCard, TCard>(`api/card/${props.card.id}`, 'PUT', updatecard).then(() => {
            navigate(`/subject-view/${props.subjectId}`);
        });
    }

    const autoResize = (textarea: HTMLTextAreaElement) => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    const resetSize = () => {
        const questionElement = document.getElementById('questionSide') as HTMLTextAreaElement;
        const answerElement = document.getElementById('answerSide') as HTMLTextAreaElement;
        if (questionElement) questionElement.style.height = '75px';
        if (answerElement) answerElement.style.height = '75px';
    };

    const handleNewQuestionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewQuestion(event.target.value);
        autoResize(event.target);
    };

    const handleNewAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewAnswer(event.target.value);
        autoResize(event.target);
    };

    const handleEditQuestionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditQuestion(event.target.value);
        autoResize(event.target);
    };

    const handleEditAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditAnswer(event.target.value);
        autoResize(event.target);
    };

    const handleSave = () => {
        if (editingIndex !== null) {
            // Save changes to existing question/answer
            const updatedQuestions = [...questions];
            updatedQuestions[editingIndex] = { question: editQuestion.trim(), answer: editAnswer.trim() };
            setQuestions(updatedQuestions);
            setEditingIndex(null);
            setEditQuestion('');
            setEditAnswer('');
        } else if (newQuestion.trim() !== '' && newAnswer.trim() !== '') {
            // Add new question/answer
            const newQA = [...questions, { question: newQuestion.trim(), answer: newAnswer.trim() }];
            setQuestions(newQA);
            setNewQuestion('');
            setNewAnswer('');
        }
        resetSize();
    };

    const handleEdit = (index: number) => {
        if (editingIndex === index) {
            // Save changes and exit edit mode
            handleSave();
        } else {
            // Enter edit mode
            setEditingIndex(index);
            setEditQuestion(questions[index].question);
            setEditAnswer(questions[index].answer);
            setNewQuestion('');
            setNewAnswer('');
            const icon = iconRefs.current[index];
            if (icon) {
                icon.src = "/src/assets/saveCheckIcon.png";
            }
        }
    };

    const handleDelete = (index: number) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
    };

    return (
        <>
            <div className="headers flex w-[90%] mx-[auto]">
                <h2 className="frontHeader flex justify-center text-center font-light italic text-[120%] w-[45%] h-[50px] mb-[20px]">Question</h2>
                <h2 className="backHeader flex justify-center text-center font-light italic text-[120%] w-[45%] h-[50px] mb-[20px]">Réponse</h2>
                <div className="w-[10%]"></div>
            </div>

            <div className="entriesAndListsContainer">
                <div className="entries flex justify-between flex-wrap w-[82%] ml-[9%] h-[auto] relative">
                    <textarea
                        className="questionSide flex focus:outline-none w-[40%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
                        id="questionSide"
                        maxLength={650}
                        value={newQuestion}
                        onChange={handleNewQuestionChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    />

                    <textarea
                        className="answerSide flex questionSide focus:outline-none ml-[6%] w-[40%] border-[1px] border-[solid] border-[black] rounded-[15px] p-[25px] font-light overflow-hidden"
                        id="answerSide"
                        maxLength={650}
                        value={newAnswer}
                        onChange={handleNewAnswerChange}
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
                    {questions.slice().reverse().map((question, index) => (
                        <div className="questionList w-[100%] flex flex-wrap items-start" key={questions.length - index - 1}>
                            <div className="w-[45%] mb-[50px]">
                                <div className="qaBox w-[80%] mx-[auto] justify-center">
                                    {editingIndex === questions.length - index - 1 ? (
                                        <textarea
                                            className="qaBox w-[80%] mx-[auto] justify-center"
                                            value={editQuestion}
                                            onChange={handleEditQuestionChange}
                                        />
                                    ) : (
                                        <h3>{question.question}</h3>
                                    )}
                                </div>
                            </div>
                            <div className="flex w-[45%] mb-[50px]">
                                <div className="qaBox w-[80%] mx-[auto] justify-center">
                                    {editingIndex === questions.length - index - 1 ? (
                                        <textarea
                                            className="qaBox w-[80%] mx-[auto] justify-center"
                                            value={editAnswer}
                                            onChange={handleEditAnswerChange}
                                        />
                                    ) : (
                                        <h3>{question.answer}</h3>
                                    )}
                                </div>
                            </div>
                            <div className="verticalLine"></div>
                            <div className="flex w-[5%] mt-[15px]">
                                <div className="w-[40px] h-[40px] rounded-[50%] bg-[black] flex text-[white] items-center justify-center">
                                    {questions.length - index}
                                </div>
                            </div>
                            <div className="w-[5%] flex items-center mt-[20px]">
                                <button
                                    className="editOutline w-[25px] h-[auto] mr-[12px] flex items-center"
                                    onClick={() => handleEdit(questions.length - index - 1)}>
                                    <img
                                        src={editingIndex === questions.length - index - 1 ? "/src/assets/saveCheckIcon.png" : "/src/assets/whitePencilIcon.png"}
                                        ref={el => iconRefs.current[questions.length - index - 1] = el}
                                    />
                                </button>
                                <button
                                    className="editOutline w-[19px] h-[auto] ml-[12px] flex items-center"
                                    onClick={() => handleDelete(questions.length - index - 1)}>
                                    <img src="/src/assets/deleteIcon.png"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="questionCountAndSave flex mt-[50px] mb-[200px] w-[60%] mx-[auto] pr-[10%]">
                <button className="saveSet w-[300px] mx-[auto] border-[1px] border-[solid] border-[black] text-[115%] text-[white] font-light h-[55px] rounded-[20px] bg-[black]" onClick={saveCard}>
                    Enregistrer les modifications
                </button>
            </div>
        </>
    );
}
