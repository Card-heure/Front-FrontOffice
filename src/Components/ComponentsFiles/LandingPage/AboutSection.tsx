
export default function AboutSection() {
    const inspirationClick = () => {
        inspirationText.className = "buttonText text-[80%] w-[200px] ml-[18px]";
        inspirationCircle.className = "buttonCircle w-[38px] h-[38px] rounded-[50%] bg-[rgb(35,66,18)]";
        createdText.className = "buttonText text-[68%] ml-[18px] w-[125px]";
        createdCircle.className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]";
        processText.className = "buttonText text-[68%] ml-[18px] w-[235px]";
        processCircle.className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]";
        circleText.className = "circle p-[40px] border-[1px] border-[solid] border-[black] rounded-[50%] w-[380px] h-[380px] text-center items-center flex text-[160%] italic m-auto";
        circleText.innerHTML = '<p> WHAT WAS THE INSPIRATION BEHIND CARD\'HEURE ? </p>';
        changeAbout.innerHTML = '<p> Card’heure a été conçu pour répondre à <span style = "font-weight: 400">un besoin en croissance constante des étudiants : ' +
            '                   La possibilité de créer et de partager du matériel d’étude sans être limité par un paywall.</span>' +
            '                   Il existe de nombreux sites Web et applications qui vous permettent de créer et de partager des documents d\'étude, mais ' +
            '                   il est presque impossible d\'en trouver un qui soit à la fois gratuit et offre un large éventail d\'options de format. ' +
            '                   </p>' +
            '                   <br/> <br/>' +
            '                   <p> <span style = "font-weight: 400">C’est cette problématique qui nous a inspiré à développer une ressource gratuite, polyvalente ' +
            '                   et centralisée pour aider les étudiants à réussir leurs études.</span> </p>';
    }

    const createdClick = () => {
        inspirationText.className = "buttonText text-[68%] ml-[18px] w-[200px]";
        inspirationCircle.className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]";
        createdText.className = "buttonText text-[80%] w-[125px] ml-[18px]";
        createdCircle.className = "buttonCircle w-[38px] h-[38px] rounded-[50%] bg-[rgb(35,66,18)]";
        processText.className = "buttonText text-[68%] ml-[18px] w-[235px]";
        processCircle.className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]";
        circleText.className = "circle p-[40px] border-[1px] border-[solid] border-[black] rounded-[50%] w-[380px] h-[380px] text-center items-center flex text-[160%] italic m-auto";
        circleText.innerHTML = '<p> WHO CREATED CARD’HEURE ?</p>';
        changeAbout.innerHTML = '<p><span style = "font-weight: 400">Hugo Combe</span> is the backend developper... Lorem ipsum dolor sit ' +
            '                   amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
            '                   ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>' +
            '                   <br/> <br/>' +
            '                   <p><span style = "font-weight: 400">Madison Owens</span> is the frontend developper... Lorem ipsum dolor sit lopper ' +
            '                   consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ' +
            '                   veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
    }

    const processClick = () => {
        inspirationText.className = "buttonText text-[68%] ml-[18px] w-[200px]";
        inspirationCircle.className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]";
        createdText.className = "buttonText text-[68%] ml-[18px] w-[125px]";
        createdCircle.className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]";
        processText.className = "buttonText text-[80%] ml-[18px] w-[235px]";
        processCircle.className = "buttonCircle w-[38px] h-[38px] rounded-[50%] bg-[rgb(35,66,18)]";
        circleText.className = "circle p-[40px] border-[1px] border-[solid] border-[black] rounded-[50%] w-[380px] h-[380px] text-center items-center flex text-[140%] italic m-auto";
        circleText.innerHTML = '<p> WHAT WAS THE DESIGN AND DEVELOPMENT PROCESS OF CARD’HEURE ?</p>';
        changeAbout.innerHTML = '<p>At vero eos et <span style = "font-weight: 400">accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ' +
            '                   </span> voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non ' +
            '                   provident, similique sunt in culpa qui officia deserunt mollitia animi, <span style = "font-weight: 400">id est laborum et ' +
            '                   dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</span> ' +
            '                   <br/> <br/>' +
            '                   Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere ' +
            '                   <span style = "font-weight: 400">possimus, omnis voluptas assumenda est, omnis dolor repellendus.</span> Temporibus autem ' +
            '                   quibusdam et aut officiis debitis aut </p>';
    }
    return (
        <>
        <div className = "aboutContainer pt-[60px] mx-auto w-[1100px] h-[560px] flex items-center" id = "about">

            <div className = "circle p-[40px] border-[1px] border-[solid] border-[black] rounded-[50%] w-[380px] h-[380px] text-center items-center flex text-[160%] italic m-auto"
                            id = "circleText">
                <p> WHAT WAS THE INSPIRATION BEHIND CARD'HEURE ? </p>
            </div>

            <div className = "verticalContainer w-[50px]">
                <div className = "vertical border-l-[1px] border-l-[solid] border-l-[black] w-[4px] h-[435px] ml-[65%] [box-shadow:-12px_10px_1px_rgb(178,201,178)]">
                </div>
            </div>

            <div className = "aboutText w-[450px] h-[300px] m-auto text-[100%]" id = "changeAbout">
                <p> Card’heure a été conçu pour répondre à <span className = "bold">un besoin en croissance constante des étudiants : La possibilité de créer et de partager du
                    matériel d’étude sans être limité par un paywall.</span> Il existe de nombreux sites Web et applications qui vous permettent de créer et de
                    partager des documents d'étude, mais il est presque impossible d'en trouver un qui soit à la fois gratuit et offre un large éventail
                    d'options de format. </p>
                <br/> <br/>
                <p> <span className = "bold">C’est cette problématique qui nous a inspiré à développer une ressource gratuite, polyvalente et centralisée pour aider les étudiants
                    à réussir leurs études.</span> </p>
            </div>
        </div>

            {/*  button w-[350px] h-[80px] flex items-center*/}
        <div className = "aboutButtons w-[950px] h-[80px] mx-auto mt-[50px] flex justify-around">

            <button className = "button inspiration" onClick = {inspirationClick}>
                <div className = "buttonCircle w-[38px] h-[38px] rounded-[50%] bg-[rgb(35,66,18)]" id = "inspirationCircle"></div>
                <div className = "buttonText text-[80%] w-[200px] ml-[18px]" id = "inspirationText">
                    <p> WHAT WAS THE INSPIRATION BEHIND CARD’HEURE ?</p>
                </div>
            </button>

            <button className = "button created" onClick = {createdClick}>
                <div className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]" id = "createdCircle"></div>
                <div className = "buttonText text-[68%] ml-[18px] w-[125px]" id = "createdText">
                    <p> WHO CREATED CARD’HEURE ?</p>
                </div>
            </button>

            <button className = "button process" onClick={processClick}>
                <div className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]" id = "processCircle"></div>
                <div className = "buttonText text-[68%] ml-[18px] w-[235px]" id = "processText">
                    <p> WHAT WAS THE DESIGN AND DEVELOPMENT PROCESS OF CARD’HEURE ?</p>
                </div>
            </button>
        </div>
        </>
    );
}