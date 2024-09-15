import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-4xl m-3">サドリビア</h1>
        <div className="flex justify-center">
          <form className="flex flex-col justify-center w-3/4">
            <div className="flex flex-col mx-3">
              <label>Keyword</label>
              <input type="text" className="w-full h-10" />
            </div>
            <div className="flex">
              <div className="flex flex-col w-1/2 mx-3">
                <label>Category</label>
                <input type="text" className="w-full h-10" />
              </div>
              <div className="flex flex-col w-1/2 mx-3">
                <label>Language</label>
                <input type="text" className="w-full h-10" />
              </div>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
}
