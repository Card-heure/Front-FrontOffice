import {Route, Routes, useNavigate} from "react-router-dom";
import {Suspense, useEffect} from "react";
import Loading from "#Components/Loading/Loading.tsx";
import Main from "#Components/Main/Main.tsx";
import Home from "#Components/Main/Home.tsx";
import NewSubject from "#Components/Main/NewSubject.tsx";
import NewFlashcard from "#Components/Main/NewFlashcard.tsx";
import StudyFlashcardSet from "#Components/Main/StudyFlashcardSet.tsx";
import SubjectView from "#Components/Main/SubjectView.tsx";
import NewTest from "#Components/Main/NewTest.tsx";
import TakeATest from "#Components/Main/TakeATest.tsx";
import Login from "#Components/Login/Login.tsx";
import Profile from "#Components/Main/Profile.tsx";
import {isAuthenticated} from "../../Utils/utils.ts";

export default function App() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated() && window.location.pathname !== "/login" && window.location.pathname !== "/") {
			navigate("/")
		} else if (isAuthenticated() && window.location.pathname === "/login") {
			navigate("/home")
		}
	}, [navigate]);
	return (
		<Routes>
			<Route
				path={"/login"}
				element={
					<Suspense fallback={<Loading/>}>
						<Login/>
					</Suspense>
				}
			/>
			<Route
				path={"/"}
				element={
					<Suspense fallback={<Loading/>}>
						<Main/>
					</Suspense>
				}
			/>
			<Route
				path={"/Home"}
				element={
					<Suspense fallback={<Loading/>}>
						<Home/>
					</Suspense>
				}
			/>
			<Route
				path={"/NewSubject"}
				element={
					<Suspense fallback={<Loading/>}>
						<NewSubject/>
					</Suspense>
				}
			/>
			<Route
				path={"/NewFlashCard"}
				element={
					<Suspense fallback={<Loading/>}>
						<NewFlashcard/>
					</Suspense>
				}
			/>
			<Route
				path={"/Home/NewSubject/NewFlashCard/StudyFlashCardSet"}
				element={
					<Suspense fallback={<Loading/>}>
						<StudyFlashcardSet/>
					</Suspense>
				}
			/>
			<Route
				path={"/Home/NewTest"}
				element={
					<Suspense fallback={<Loading/>}>
						<NewTest/>
					</Suspense>
				}
			/>
			<Route
				path={"/SubjectView/:subjectId"}
				element={
					<Suspense fallback={<Loading/>}>
						<SubjectView/>
					</Suspense>
				}
			/>
			<Route
				path={"/Home/TakeATest"}
				element={
					<Suspense fallback={<Loading/>}>
						<TakeATest/>
					</Suspense>
				}
			/>
      <Route
            path={"/Home/Profile"}
            element={
                <Suspense fallback={<Loading/>}>
                    <Profile/>
                </Suspense>
            }
        />
		</Routes>
	)
}