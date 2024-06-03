import {Route, Routes, useNavigate} from "react-router-dom";
import {Suspense, useEffect} from "react";
import Loading from "#Components/Loading/Loading.tsx";
import Main from "#Components/Main/Main.tsx";
import Home from "#Components/Main/Home.tsx";
import NewSubject from "#Components/Main/NewSubject.tsx";
import NewFlashcard from "#Components/Main/NewFlashcard.tsx";
import StudyFlashcardSet from "#Components/Main/StudyFlashcardSet.tsx";
import SubjectView from "#Components/Main/SubjectView.tsx";
import {isAuthenticated} from "../../Utils/utils.ts";
import Login from "#Components/Login/Login.tsx";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated() && window.location.pathname !== "/login" && window.location.pathname !== "/") {
      navigate("/")
    }else if(isAuthenticated() && window.location.pathname === "/login"){
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
        path={"/Home/SubjectView"}
        element={
          <Suspense fallback={<Loading/>}>
            <SubjectView/>
          </Suspense>
        }
      />
    </Routes>
  )
}