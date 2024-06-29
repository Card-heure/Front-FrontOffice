export default function HeaderNoGreeting() {
    return (
        <>
            <div className="header h-[130px] flex items-center">
                <div className = "headerSect logo text-center justify-center w-[15%]">
                    <button>
                        <a href="http://localhost:5173/home">
                            <h1 className="text-6xl font-bold">C'h</h1>
                        </a>
                    </button>

                </div>

                <div className="headerSect greeting flex justify-center items-center mx-[10%] w-[50%]">
                </div>

                <div className = "headerSect flex justify-center profile w-[15%]">
                    <button className="profileBox rounded-[12px] p-[1px]">
                        <img src="/src/assets/profileIcon.png" className="w-[50px] h-[auto]"/>
                    </button>
                </div>
            </div>
        </>
    )
}