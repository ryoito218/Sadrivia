import React from "react";

const DetailView = async ({params}: {params: {id: string; language: string }}) => {

  const res = await fetch(`http://127.0.0.1:8000/get_trivia/${params.id}`);
  const trivia = await res.json();

  return (
    <div className="">
      <h1>
        {
          params.language === "japanese" ? trivia.japanese :
          params.language === "english" ? trivia.english:
          params.language === "chinese1" ? trivia.chinese1:
          params.language === "chinese2" ? trivia.chinese2:
          params.language === "korean" ? trivia.korean:
          params.language === "mongolian" ? trivia.mongolian:
          trivia.japanese
        }
      </h1>
      <p></p>
    </div>
  );
}

export default DetailView
