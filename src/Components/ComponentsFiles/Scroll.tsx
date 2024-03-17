export default function Scroll() {
    return (
        <>
            <div className="scrollMarker fixed top-[0] right-[0] w-[100px] h-[400px] pt-[20px] mr-[10px] items-stretch flex flex-wrap">
                <button className="scrollButton home">
                    <div
                        className="scrollCircle home w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(0,_0,_0)]"
                        id="homeCircle">
                    </div>
                    <div className="scrollText home w-[80px] mt-[20px]">
                        <p>Home</p>
                    </div>
                </button>

                <button className="scrollButton about">
                    <div
                        className="scrollCircle about w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]"
                        id="aboutCircle">
                    </div>
                    <div className="scrollText about w-[80px] mt-[20px]">
                        <p>About</p>
                    </div>
                </button>

                <button className="scrollButton login">
                    <div
                        className="scrollCircle login w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]"
                        id="loginCircle">
                    </div>
                    <div className="scrollText login w-[80px] mt-[20px]">
                    <p>Log in</p>
                    </div>
                </button>
            </div>
        </>
    );
}