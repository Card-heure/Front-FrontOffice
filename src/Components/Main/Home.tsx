import Header from "#ComponentsFiles/HomePage/Header.tsx";
import HomePage from "#ComponentsFiles/HomePage/HomePage.tsx";
import {useEffect, useState} from "react";
import {TUser} from "../../Types/TUser.ts";
import {useApi} from "../../Utils/useApi.ts";

export default function Home() {
  const [user, setUser] = useState<TUser | null>(null)
  const {data: rawLink} = useApi<TUser>('me', {})
  useEffect(() => {
    if (rawLink) {
      setUser(rawLink)
    }
  }, [rawLink, user])
  return (
    <>
      <Header username={user?.fullName}/>
      <HomePage/>
    </>
  )
}