import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
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

export default function App() {
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
            path={"/Home/NewSubject"}
            element={
                <Suspense fallback={<Loading/>}>
                    <NewSubject/>
                </Suspense>
            }
        />
        <Route
            path={"/Home/NewSubject/NewFlashCard"}
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
            path={"/Home/NewSubject/NewTest"}
            element={
                <Suspense fallback={<Loading/>}>
                    <NewTest/>
                </Suspense>
            }
        />
        <Route
            path={"/Home/SubjectView"}
            element={
                <Suspense fallback={<Loading/>}>
                    <SubjectView/>
                </Suspense>
            }
        />
        <Route
            path={"/Home/SubjectView/TakeATest"}
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