"use client";
import Link from "next/link"
import { useState, useEffect } from "react";

type Trivia = {
  id: string;
  japanese: string;
  english: string;
  chinese1: string;
  chinese2: string;
  korean: string;
  mongolian: string;
  category: string;
  url1: string;
  url2: string;
  address1: string;
  address2: string; 
}

export default function Home() {

  const [keyword, setKeyword] = useState<string>("");
  const [category, setCategory] = useState<string>("unselected");
  const [language, setLanguage] = useState<string>("japanese");
  const [trivias, setTrivias] = useState<Trivia[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/get_trivias?keyword=${keyword}&category=${category}&language=${language}`
      );
      const data = await res.json();
      setTrivias(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  }
  
  return (
    <div>
      <div className="container mx-auto">
        
        <h1 className="text-4xl m-3">サドリビア</h1>
        
        <div className="flex flex-col">
          <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center w-3/4">
              <div className="flex flex-col mx-3">
                <label htmlFor="keyword">Keyword</label>
                <input type="text" id="keyword" className="w-full h-10 p-2" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
              </div>
              <div className="flex">
                <div className="flex flex-col w-1/2 mx-3">
                  <label htmlFor="category">Category</label>
                  <select className="w-full h-10 p-2" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="unselected">Unselected（未選択）</option>
                    <option value="history">History（歴史）</option>
                    <option value="person">Person（人物）</option>
                    <option value="nature">Nature（自然）</option>
                    <option value="tradition">Tradition（伝統）</option>
                    <option value="sport">Sport（スポーツ）</option>
                    <option value="food">Food（食）</option>
                    <option value="culture">Culture（文化）</option>
                    <option value="entertainment">Entertainment（芸能）</option>
                    <option value="goods">Goods（特産品）</option>
                    <option value="dialect">Dialect（方言）</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/2 mx-3">
                  <label htmlFor="language">Language</label>
                  <select className="w-full h-10 p-2" id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="japanese">Japanese（日本語）</option>
                    <option value="english">English（英語）</option>
                    <option value="chinese1">Chinese（簡体字中国語）</option>
                    <option value="chinese2">Chinese（繁体字中国語）</option>
                    <option value="korean">Korean（韓国語）</option>
                    <option value="mongolish">Mongolish（モンゴル語）</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-blue-500 text-white font-bold w-1/2 py-2 px-4 mx-3 my-3 rounded hover:bg-blue-700">Submit</button>
              </div>
            </form>     
          </div>

          { trivias.length ? 
            <div>
              {trivias.map((trivia, index) => (
                <div key={trivia.id} className="flex flex-col my-3">
                  <div className="flex justify-center">
                    <Link href={`detail/${trivia.id}/${language}`} className="flex rounded overflow-hidden shadow-lg bg-white w-3/4 hover:opacity-75">
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          {index+1}. 
                          {
                            language === "japanese" ? trivia.japanese :
                            language === "english" ? trivia.english:
                            language === "chinese1" ? trivia.chinese1:
                            language === "chinese2" ? trivia.chinese2:
                            language === "korean" ? trivia.korean:
                            language === "mongolian" ? trivia.mongolian:
                            trivia.japanese
                          }
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>:
            <div className="flex flex-col my-3">
              <div className="flex justify-center">
                <div className="w-3/4">
                <p className="text-4xl m-3">Not Found</p>
                </div>
              </div>
            </div>
          }
          

        </div>
        
      </div>
    </div>
  );
}
