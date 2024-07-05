import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import TakeTest from "#ComponentsFiles/TakeTestPage/TakeTest.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {TCard} from "../../Types/TCard.ts";
import {TSubject} from "../../Types/TSubject.ts";
import {apiRequest} from "../../Utils/ApiRequest.ts";
import Footer from "#ComponentsFiles/General/Footer.tsx";

export default function TakeATest() {
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
      {card && subject && <TakeTest subject={subject} card={card}/>}
      <Footer/>
    </>
  );
}