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
import SignUp from "#Components/SignUp/SignUp.tsx";
import Profile from "#Components/Main/Profile.tsx";
import EditTest from "#Components/Main/EditTest.tsx";
import EditFlashcard from "#Components/Main/EditFlashcard.tsx";
import Error404 from "#ComponentsFiles/General/Error404.tsx";
import Error401 from "#ComponentsFiles/General/Error401.tsx";
import {isAuthenticated} from "../../Utils/utils.ts";



export default function App() {
  const navigate = useNavigate();
  const notRedirect = ["/login", "/signup", "/"];
  useEffect(() => {
    if (!isAuthenticated() && window.location.pathname in notRedirect) {
      navigate("/")
    } else if (isAuthenticated() && window.location.pathname === "/LogIn") {
      navigate("/home")
    }
  }, [navigate]);
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <Suspense fallback={<Loading/>}>
            <Main/>
          </Suspense>
        }
      />
      <Route
        path={"/login"}
        element={
          <Suspense fallback={<Loading/>}>
            <Login/>
          </Suspense>
        }
      />
      <Route
        path={"/signup"}
        element={
          <Suspense fallback={<Loading/>}>
            <SignUp/>
          </Suspense>
        }
      />
      <Route
        path={"/home"}
        element={
          <Suspense fallback={<Loading/>}>
            <Home/>
          </Suspense>
        }
      />
      <Route
        path={"/profile"}
        element={
          <Suspense fallback={<Loading/>}>
            <Profile/>
          </Suspense>
        }
      />
      <Route
        path={"/new-subject"}
        element={
          <Suspense fallback={<Loading/>}>
            <NewSubject/>
          </Suspense>
        }
      />
      <Route
        path={"/new-flashCard"}
        element={
          <Suspense fallback={<Loading/>}>
            <NewFlashcard/>
          </Suspense>
        }
      />
      <Route
        path={"/study-flashCard/:cardSetId"}
        element={
          <Suspense fallback={<Loading/>}>
            <StudyFlashcardSet/>
          </Suspense>
        }
      />
      <Route
        path={"/new-test"}
        element={
          <Suspense fallback={<Loading/>}>
            <NewTest/>
          </Suspense>
        }
      />
        <Route
            path={"/404"}
            element={
                <Suspense fallback={<Loading/>}>
                    <Error404/>
                </Suspense>
            }
        />
        <Route
            path={"/401"}
            element={
                <Suspense fallback={<Loading/>}>
                    <Error401/>
                </Suspense>
            }
        />
      <Route
        path={"/subject-view/:subjectId"}
        element={
          <Suspense fallback={<Loading/>}>
            <SubjectView/>
          </Suspense>
        }
      />
        <Route
            path={"/edit-test/:cardSetId"}
            element={
                <Suspense fallback={<Loading/>}>
                    <EditTest/>
                </Suspense>
            }
        />
        <Route
            path={"/edit-flashcards/:cardSetId"}
            element={
                <Suspense fallback={<Loading/>}>
                    <EditFlashcard/>
                </Suspense>
            }
        />
      <Route
        path={"/study-test/:cardSetId"}
        element={
          <Suspense fallback={<Loading/>}>
            <TakeATest/>
          </Suspense>
        }
      />
    </Routes>
  )
}