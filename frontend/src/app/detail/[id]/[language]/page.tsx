import Link from "next/link";
import React from "react";

const DetailView = async ({params}: {params: {id: string; language: string }}) => {

  const res = await fetch(`http://127.0.0.1:8000/get_trivia/${params.id}`);
  const trivia = await res.json();

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col m-3">
          <div className="flex justify-center">
            <div className="flex rounded overflow-hidden shadow-lg bg-white w-3/4">
              <div className="m-4">
                <h1 className="text-4xl">
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
                
                <div className="m-2">
                  <h2 className="text-2xl">Category</h2>
                  <p>{trivia.category}</p>
                </div>
                
                <div className="m-2">
                  <h2 className="text-2xl">Map</h2>
                  {
                    trivia.address1 ?
                    <iframe src={trivia.address1} width={400} height={300}></iframe> :
                    <div></div>
                  }  
                </div>

                <div className="m-2">
                  {
                    trivia.address2 ?
                    <iframe src={trivia.address1} width={400} height={300}></iframe> :
                    <div></div>
                  }  
                </div>

                <div className="m-2">
                  <h2 className="text-2xl">Reference</h2>
                  {
                    trivia.url1 ?
                    <Link href={trivia.url1}>{trivia.url1}</Link> :
                    <div></div>
                  }
                </div>

                <div className="m-2">
                  {
                    trivia.url2 ?
                    <Link href={trivia.url2}>{trivia.url2}</Link> :
                    <div></div>
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailView
