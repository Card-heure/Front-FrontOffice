export default function Loading() {

  return (
    <div className={"fixed z-30 flex h-screen w-screen items-center justify-center bg-white"}>
      <img
        className={"absolute h-40"}
        alt={"Logo"}
        src={"/logo-espace_perso.png"}
      />
      <div className={"h-56 w-56 animate-spin rounded-full border-4 border-primary border-t-transparent"}/>
    </div>
  )
}