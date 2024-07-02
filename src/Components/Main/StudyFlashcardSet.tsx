import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import StudyFlashSet from "#ComponentsFiles/StudyFlashcardPage/StudyFlashSet.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiRequest} from "../../Utils/ApiRequest.ts";
import {TCard} from "../../Types/TCard.ts";
import {TSubject} from "../../Types/TSubject.ts";

export default function StudyFlashcardSet() {
  const {cardSetId} = useParams();
  const [card, setCard] = useState<TCard | null>(null)
  const [subject, setSubject] = useState<TSubject | null>(null)

  useEffect(() => {
    apiRequest<null, TCard>(`api/card/${cardSetId}`, 'GET').then((response) => {
      setCard(response.response)
    })
  }, [cardSetId]);
  useEffect(() => {
    if(card) {
      apiRequest<null, TSubject>(`api/subject/${card.subject_id}`, 'GET').then((response) => {
        setSubject(response.response as TSubject)
      })
    }
  }, [card]);
  return (
    <>
      <HeaderNoGreeting/>
      {card && subject && <StudyFlashSet card={card} subject={subject}/>}

    </>
  )
}