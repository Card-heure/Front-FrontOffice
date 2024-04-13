export default function HeaderNoGreeting() {
    return (
        <>
            <div className="header h-[130px] flex items-center">
                <div className = "headerSect logo text-center justify-center w-[15%]">
                    <h1 className = "text-6xl font-bold">C'h</h1>
                </div>

                <div className = "headerSect greeting flex justify-center items-center mx-[10%] w-[50%]">
                </div>

                <div className = "headerSect flex justify-center profile w-[15%]">
                    <div className = "profileBox rounded-[12px] p-[1px]">
                        <img src = "src/assets/profileIcon.png" className = "w-[50px] h-[auto]"/>
                    </div>
                </div>
            </div>
        </>
    )
}