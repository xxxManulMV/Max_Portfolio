import {useLocation} from 'react-router-dom'

import HeaderElement from "./HeaderEllement";

export default function Header(){
  const location = useLocation()

  return (
    <header className="
      flex justify-center gap-[16px]
      bg-black/40 backdrop-blur-lg
      border-b-[1px] border-white/20 p-[24px]
      sticky top-0 z-50
    ">
      <HeaderElement path = '/' name = 'Home' currentLocation={location.pathname}/>
      <HeaderElement path = '/about' name = 'About' currentLocation={location.pathname}/>
    </header>
  )
}