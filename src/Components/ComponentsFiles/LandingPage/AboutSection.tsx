export default function AboutSection() {
  const inspirationText = document.getElementById("inspirationText")!;
  const inspirationCircle = document.getElementById("inspirationCircle")!;
  const createdText = document.getElementById("createdText")!;
  const createdCircle = document.getElementById("createdCircle")!;
  const processText = document.getElementById("processText")!;
  const processCircle = document.getElementById("processCircle")!;
  const circleText = document.getElementById("circleText")!;
  const changeAbout = document.getElementById("changeAbout")!;
  const inspirationClick = () => {
    inspirationText.className = "buttonText text-[80%] w-[200px] ml-[18px]";
    inspirationCircle.className = "buttonCircle w-[38px] h-[38px] rounded-[50%] bg-[rgb(35,66,18)]";
    createdText.className = "buttonText text-[68%] ml-[18px] w-[150px]";
    createdCircle.className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]";
    processText.className = "buttonText text-[68%] ml-[18px] w-[235px]";
    processCircle.className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]";
    circleText.className = "circle p-[40px] border-[1px] border-[solid] border-[black] rounded-[50%] w-[380px] h-[380px] text-center items-center flex text-[160%] italic m-auto";
    circleText.innerHTML = '<p> QUELLE A ÉTÉ L\'INSPIRATION À L\'ORIGINE DE CARD\'HEURE ?  </p>';
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
    createdText.className = "buttonText text-[80%] w-[200px] ml-[18px]";
    createdCircle.className = "buttonCircle w-[38px] h-[38px] rounded-[50%] bg-[rgb(35,66,18)]";
    processText.className = "buttonText text-[68%] ml-[18px] w-[250px]";
    processCircle.className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]";
    circleText.className = "circle p-[50px] border-[1px] border-[solid] border-[black] rounded-[50%] w-[380px] h-[380px] text-center items-center flex text-[160%] italic m-auto";
    circleText.innerHTML = '<p> QUI A CRÉÉ CARD\'HEURE ?</p>';
    changeAbout.innerHTML = '<p><span style = "font-weight: 400">Hugo Combe</span> est le développeur du backend. Il conçoit et maintient la logique serveur, gère les bases de données et développe des APIs, assurant la performance, la sécurité et la scalabilité des applications web, tout en intégrant les besoins des utilisateurs et des développeurs frontend.</p><br/> <br/>' +
      '<p><span style = "font-weight: 400">Madison Owens</span> est la développeuse front-end du site, qui a été créé en utilisant React, TypeScript, Tailwind CSS et HTML. Elle est originaire de Cleveland, OH, USA, et elle est passionnée par le design. Son espoir pour Card’heure est qu\'il devienne une ressource populaire et accessible pour les étudiants, afin qu\'ils puissent étudier plus efficacement avec moins de distractions.</p>';
  }

  const processClick = () => {
    inspirationText.className = "buttonText text-[68%] ml-[18px] w-[200px]";
    inspirationCircle.className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]";
    createdText.className = "buttonText text-[68%] ml-[18px] w-[150px]";
    createdCircle.className = "buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]";
    processText.className = "buttonText text-[80%] ml-[18px] w-[235px]";
    processCircle.className = "buttonCircle w-[38px] h-[38px] rounded-[50%] bg-[rgb(35,66,18)]";
    circleText.className = "circle p-[40px] pt-[55px] border-[1px] border-[solid] border-[black] rounded-[50%] w-[380px] h-[380px] text-center items-center flex text-[140%] italic m-auto";
    circleText.innerHTML = '<p>QUEL A ÉTÉ LE PROCESSUS DE CONCEPTION ET DE DÉVELOPPEMENT DE CARD\'HEURE ?</p>';
    changeAbout.innerHTML = '' +
        '<p><span style = "font-weight: 400">Card’heure a été conçu à l\'origine comme un projet universitaire de groupe.</span> Conscients qu\'ils souhaitaient étendre le projet au-delà de son intention initiale, ils ont commencé à réfléchir à des fonctionnalités supplémentaires pouvant être intégrées à l\'application.</p><br>'
        +
        '<p><span style = "font-weight: 400">Card’heure n\'avait à l\'origine que 3 fonctionnalités : les tests, les cartes mentales et les flashcards. </span> Après avoir soumis leur projet universitaire, ils ont redessiné l\'application pour inclure ' +
        'des questions à choix multiple, un traitement de texte, des notes, des contacts et collaborations utilisateurs, ainsi que l\'exportation de contenu.</p><br>'
        +
        '<p>Card’heure travaille actuellement à rendre l\'application <span style = "font-weight: 400">disponible en plusieurs langues différentes, afin d\'accroître l\'accessibilité pour les étudiants du monde entier.</span></p>';
  }
  return (
    <>
      <div className="aboutContainer pt-[60px] mx-auto w-[1100px] h-[560px] flex items-center" id="about">

        <div className="circle p-[40px] border-[1px] border-[solid] border-[black] rounded-[50%] w-[380px] h-[380px] text-center items-center flex text-[160%] italic m-auto"
             id="circleText">
          <p>QUELLES SONT LES INSPIRATIONS DERRIÈRE CARD'HEURE ?</p>
        </div>

        <div className="verticalContainer w-[50px]">
          <div className="vertical border-l-[1px] border-l-[solid] border-l-[black] w-[4px] h-[435px] ml-[65%] [box-shadow:-12px_10px_1px_rgb(178,201,178)]">
          </div>
        </div>

        <div className="aboutText w-[450px] h-[300px] m-auto text-[100%]" id="changeAbout">
          <p> Card’heure a été conçu pour répondre à <span className="bold">un besoin en croissance constante des étudiants : La possibilité de créer et de partager du
                    matériel d’étude sans être limité par un paywall.</span> Il existe de nombreux sites Web et applications qui vous permettent de créer et de
            partager des documents d'étude, mais il est presque impossible d'en trouver un qui soit à la fois gratuit et offre un large éventail
            d'options de format. </p>
          <br/> <br/>
          <p> <span className="bold">C’est cette problématique qui nous a inspiré à développer une ressource gratuite, polyvalente et centralisée pour aider les étudiants
                    à réussir leurs études.</span></p>
        </div>
      </div>

      <div className="aboutButtons w-[950px] h-[80px] mx-auto mt-[50px] flex justify-around">

        <button className="button inspiration" onClick={inspirationClick}>
          <div className="buttonCircle w-[38px] h-[38px] rounded-[50%] bg-[rgb(35,66,18)]" id="inspirationCircle"></div>
          <div className="buttonText text-[80%] w-[200px] ml-[18px]" id="inspirationText">
            <p>QUELLE A ÉTÉ L'INSPIRATION À L'ORIGINE DE CARD'HEURE ?</p>
          </div>
        </button>

        <button className="button created" onClick={createdClick}>
          <div className="buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]" id="createdCircle"></div>
          <div className="buttonText text-[68%] ml-[18px] w-[150px]" id="createdText">
            <p>QUI A CRÉÉ CARD'HEURE ?</p>
          </div>
        </button>

        <button className="button process" onClick={processClick}>
          <div className="buttonCircle w-[30px] h-[30px] rounded-[50%] bg-[rgb(117,147,120)]" id="processCircle"></div>
          <div className="buttonText text-[68%] ml-[18px] w-[235px]" id="processText">
            <p>QUEL A ÉTÉ LE PROCESSUS DE CONCEPTION ET DE DÉVELOPPEMENT DE CARD'HEURE ?</p>
          </div>
        </button>
      </div>
    </>
  );
}