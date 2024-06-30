import HeaderNoGreeting from "#ComponentsFiles/General/HeaderNoGreeting.tsx";
import Breadcrumbs from "#ComponentsFiles/General/Breadcrumbs.tsx";
import SubjectDisplays from "#ComponentsFiles/AllSubjectsPage/SubjectDisplays.tsx";
import {useEffect, useState} from "react";
import {TSubject} from "../../Types/TSubject.ts";
import {useParams} from "react-router-dom";
import {apiRequest} from "../../Utils/ApiRequest.ts";

export default function SubjectView() {
	const {subjectId} = useParams();
	const [subject, setSubject] = useState<TSubject | undefined>(undefined)
	useEffect(() => {
		apiRequest<null, TSubject>(`api/subject/${subjectId}`, 'GET').then((response) => {
			setSubject(response.response)
		})
	}, [subjectId])

	return (
		<>
			<HeaderNoGreeting/>
			<Breadcrumbs/>
			<SubjectDisplays subject={subject}/>
		</>
	)
}