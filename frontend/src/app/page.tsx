import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        
        <h1 className="text-4xl m-3">サドリビア</h1>
        
        <div className="flex flex-col">
          <div className="flex justify-center">
            <form className="flex flex-col justify-center w-3/4">
              <div className="flex flex-col mx-3">
                <label htmlFor="keyword">Keyword</label>
                <input type="text" id="keyword" className="w-full h-10" />
              </div>
              <div className="flex">
                <div className="flex flex-col w-1/2 mx-3">
                  <label htmlFor="category">Category</label>
                  <select className="w-full h-10" id="category">
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
                  <select className="w-full h-10" id="language">
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
                <button className="bg-blue-500 text-white font-bold w-1/2 py-2 px-4 mx-3 my-3 rounded hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </form>     
          </div>

          <Link href={`detail/1`} className="hover:opacity-75">
            <div className="flex flex-col my-3">
              <div className="flex justify-center">
                <div className="flex rounded overflow-hidden shadow-lg bg-white w-3/4">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Card Title Card Title Card Title Card Title Card Title</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href={`detail/1`} className="hover:opacity-75">
            <div className="flex flex-col my-3">
              <div className="flex justify-center">
                <div className="flex rounded overflow-hidden shadow-lg bg-white w-3/4">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Card Title Card Title Card Title Card Title Card Title</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

        </div>
        
      </div>
    </div>
  );
}
