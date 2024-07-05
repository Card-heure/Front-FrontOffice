import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import SubjectDisplays from "#ComponentsFiles/AllSubjectsPage/SubjectDisplays.tsx";
import {useEffect, useState} from "react";
import {TSubject} from "../../Types/TSubject.ts";
import {useParams} from "react-router-dom";
import {apiRequest} from "../../Utils/ApiRequest.ts";
import {TCard} from "../../Types/TCard.ts";
import Footer from "#ComponentsFiles/General/Footer.tsx";

export default function SubjectView() {
  const {subjectId} = useParams();
  const [subject, setSubject] = useState<TSubject | undefined>(undefined)
  const [cards, setCards] = useState<TCard[]>([])
  useEffect(() => {
    apiRequest<null, TSubject>(`api/subject/${subjectId}`, 'GET').then((response) => {
      setSubject(response.response)
    })
    apiRequest<null, TCard[]>(`api/cards/subject/${subjectId}`, 'GET').then((response) => {
      setCards(response.response)
    })
  }, [subjectId])
  return (
    <>
      <HeaderNoGreeting/>
      <SubjectDisplays subject={subject} cards={cards}/>
      <Footer/>
    </>
  )
}