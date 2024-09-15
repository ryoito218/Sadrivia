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
                  <input type="text" id="category" className="w-full h-10" />
                </div>
                <div className="flex flex-col w-1/2 mx-3">
                  <label htmlFor="language">Language</label>
                  <input type="text" id="language" className="w-full h-10" />
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
