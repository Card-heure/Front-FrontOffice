export default function Scroll() {

    const toHome = () => {
        document.getElementById("home").scrollIntoView({behavior: "smooth"});
        document.getElementById("homeCircle").className = "scrollCircle home w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(0,_0,_0)]";
        document.getElementById("aboutCircle").className = "scrollCircle about w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
        document.getElementById("loginCircle").className = "scrollCircle login w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
            };

    const toAbout = () => {
        document.getElementById("about").scrollIntoView({behavior: "smooth"});
        document.getElementById("homeCircle").className = "scrollCircle home w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
        document.getElementById("aboutCircle").className = "scrollCircle about w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(0,_0,_0)]";
        document.getElementById("loginCircle").className = "scrollCircle login w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
    };

    const toLogin = () => {
        document.getElementById("logIn").scrollIntoView({behavior: "smooth"});
        document.getElementById("homeCircle").className = "scrollCircle home w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
        document.getElementById("aboutCircle").className = "scrollCircle about w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
        document.getElementById("loginCircle").className = "scrollCircle login w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(0,_0,_0)]";
    };


    return (
        <>
            <div className = "scrollMarker fixed top-[0] right-[0] w-[100px] h-[400px] pt-[20px] mr-[10px] items-stretch flex flex-wrap">
                <button className = "scrollButton home" id = "homeButton" onClick = {toHome}>
                    <div
                        className = "scrollCircle home w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(0,_0,_0)]"
                        id = "homeCircle">
                    </div>
                    <div className = "scrollText home w-[80px] mt-[20px]">
                        <p>Home</p>
                    </div>
                </button>

                <button className = "scrollButton about" id = "aboutButton" onClick = {toAbout}>
                    <div
                        className = "scrollCircle about w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]"
                        id = "aboutCircle">
                    </div>
                    <div className = "scrollText about w-[80px] mt-[20px]">
                        <p>About</p>
                    </div>
                </button>

                <button className = "scrollButton login" id = "loginButton" onClick = {toLogin}>
                    <div
                        className = "scrollCircle login w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]"
                        id = "loginCircle">
                    </div>
                    <div className = "scrollText login w-[80px] mt-[20px]">
                    <p>Log in</p>
                    </div>
                </button>
            </div>
        </>
    );
}