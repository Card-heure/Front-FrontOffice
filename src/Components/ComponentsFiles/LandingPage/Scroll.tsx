export default function Scroll() {

  window.addEventListener("scroll", function () {
    const scroll_y = this.scrollY;
    if (scroll_y <= 325) {
      // @ts-ignore
      document.getElementById("homeCircle").className = "scrollCircle home w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(0,_0,_0)]";
      // @ts-ignore
      document.getElementById("aboutCircle").className = "scrollCircle about w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
      // @ts-ignore
      document.getElementById("loginCircle").className = "scrollCircle login w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
    }

    if (scroll_y > 325 && scroll_y <= 750) {
      // @ts-ignore
      document.getElementById("homeCircle").className = "scrollCircle home w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
      // @ts-ignore
      document.getElementById("aboutCircle").className = "scrollCircle about w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(0,_0,_0)]";
      // @ts-ignore
      document.getElementById("loginCircle").className = "scrollCircle login w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
    }

    if (scroll_y > 750) {
      // @ts-ignore
      document.getElementById("homeCircle").className = "scrollCircle home w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
      // @ts-ignore
      document.getElementById("aboutCircle").className = "scrollCircle about w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]";
      // @ts-ignore
      document.getElementById("loginCircle").className = "scrollCircle login w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(0,_0,_0)]";
    }

  });

  const toHome = () => {
    // @ts-ignore
    document.getElementById("landingHeader").scrollIntoView({behavior: "smooth"});
  };

  const toAbout = () => {
    // @ts-ignore
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
  };

  const toLogin = () => {
    // @ts-ignore
    document.getElementById("logIn").scrollIntoView({behavior: "smooth"});
  };

  return (
    <>
      <div className="scrollMarker fixed top-[0] right-[0] w-[100px] h-[400px] pt-[20px] mr-[10px] items-stretch flex flex-wrap">
        <button className="scrollButton home" id="homeButton" onClick={toHome}>
          <div
            className="scrollCircle home w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(0,_0,_0)]"
            id="homeCircle">
          </div>
          <div className="scrollText home w-[80px] mt-[20px]">
            <p>Accueil</p>
          </div>
        </button>

        <button className="scrollButton about" id="aboutButton" onClick={toAbout}>
          <div
            className="scrollCircle about w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]"
            id="aboutCircle">
          </div>
          <div className="scrollText about w-[80px] mt-[20px]">
            <p>A propos</p>
          </div>
        </button>

        <button className="scrollButton login" id="loginButton" onClick={toLogin}>
          <div
            className="scrollCircle login w-[20px] h-[20px] rounded-[50%] border-[1px] border-[solid] border-[black] m-auto bg-[rgb(255,_255,_255)]"
            id="loginCircle">
          </div>
          <div className="scrollText login w-[80px] mt-[20px]">
            <p> Connexion</p>
          </div>
        </button>
      </div>
    </>
  );
}