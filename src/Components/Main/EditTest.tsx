import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import TestTitleEditor from "#ComponentsFiles/EditTestPage/TestTitleEditor.tsx";
import TestQuestionsEditor from "#ComponentsFiles/EditTestPage/TestQuestionsEditor.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TCard } from "../../Types/TCard.ts";
import { TSubject } from "../../Types/TSubject.ts";
import { apiRequest } from "../../Utils/ApiRequest.ts";
import Footer from "#ComponentsFiles/General/Footer.tsx";

export default function EditTest() {
    const { cardSetId } = useParams<{ cardSetId: string }>();
    const [card, setCard] = useState<TCard | null>(null);
    const [subject, setSubject] = useState<TSubject | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (cardSetId) {
            apiRequest<null, TCard>(`api/card/${cardSetId}`, 'GET').then((response) => {
                setCard(response.response);
            }).catch((error) => {
                console.error("Error fetching card:", error);
            });
        }
    }, [cardSetId]);

    useEffect(() => {
        if (card) {
            apiRequest<null, TSubject>(`api/subject/${card.subject_id}`, 'GET').then((response) => {
                setSubject(response.response as TSubject);
                setIsLoading(false);
            }).catch((error) => {
                console.error("Error fetching subject:", error);
            });
        }
    }, [card]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!card || !subject) {
        return <div>Error loading data.</div>;
    }

    return (
        <>
            <HeaderNoGreeting />
            <TestTitleEditor card={card}/>
            <TestQuestionsEditor
                card={card}
                subject={subject}
                cardTitle={card.title}
                subjectId={card.subject_id}
            />
            <Footer />
        </>
    );
}
