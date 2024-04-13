import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import Loading from "#Components/Loading/Loading.tsx";
import Main from "#Components/Main/Main.tsx";
import Home from "#Components/Main/Home.tsx";
import NewSubject from "#Components/Main/NewSubject.tsx";

export default function App() {
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
    </Routes>
  )
}