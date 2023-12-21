import {useNavigate} from "react-router-dom";

import avatar from "../../assets/Avatar.png";


export default function HomePage(){
  const navigate = useNavigate()

  return (
    <div className="flex flex-col content-center items-center gap-[48px] p-[80px] min-h-full">
      {/*Avatar*/}
      <div className="flex flex-col">
        {/*Image*/}
        <div className="rounded-full overflow-hidden w-[248px] z-10">
          <img src = {avatar} />
        </div>

        {/*Glow*/}
        <div className="rounded-full overflow-hidden w-[248px] absolute blur-[96px]">
          <img src = {avatar} />
        </div>
      </div>

      {/*Texts*/}
      <div className="flex flex-col items-center gap-[16px]">
        {/*Title*/}
        <p className="font-extrabold text-6xl max-w-[600px] text-center text-white">
          UI/UX Designer and Software engineer
        </p>

        {/*Description*/}
        <p className="font-medium text-xl max-w-[600px] text-center text-white">
          I’m a UI/UX designer with more than 5 years of exp and a software developer with 3 years of exp
        </p>
      </div>

      {/*Button*/}
      <button className="
        hover:bg-white
        text-white hover:text-black
        py-[12px] px-[48px]
        border-[1px]
        font-medium text-xl rounded
        hover:shadow-md hover:shadow-fuchsia-700
      "
        onClick={() => navigate('/about')}
      >
        Learn more
      </button>
    </div>
  )
}