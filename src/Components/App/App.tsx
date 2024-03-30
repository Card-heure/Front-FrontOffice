import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import Loading from "#Components/Loading/Loading.tsx";
import Main from "#Components/Main/Main.tsx";
import HomeP from "#Components/Main/Home.tsx";

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
            path={"/home"}
            element={
                <Suspense fallback={<Loading/>}>
                    <HomeP/>
                </Suspense>
            }
        />
    </Routes>
  )
}