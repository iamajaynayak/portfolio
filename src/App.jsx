import { Contact, Introduction, Skillsets, SocialMedia } from "./components"
import './App.css'

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around  w-full h-full">
      <div className="left-Panel bg-primary !gap-3  px-2 flex flex-col justify-center w-full md:w-[50%] lg:w-[50%] border-b-2 md:border-b-0 lg:border-b-0 md:border-r-2 lg:border-r-2 border-base-content/20">
        <Introduction />
        <div className="flex flex-col gap-3 md:flex-col lg:flex-row justify-start items-start lg:items-end my-2">
          <Contact />
          <SocialMedia />
        </div>
      </div>
      <div className="right-panel bg-neutral text-base-300 flex justify-center items-center md:h-full lg:h-full w-full md:w-[50%] lg:w-[50%] px-2">
        <Skillsets />
      </div>
     </div>
    </>
  )
}

export default App
