import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse:        false,  // reverse the tilt direction
  max:            15,     // max tilt rotation (degrees)
  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:          1.025,    // 2 = 200%, 1.5 = 150%, etc..
  speed:          5,   // Speed of the enter/exit transition
  transition:     true,   // Set a transition on enter/exit.
  axis:           null,   // What axis should be disabled. Can be X or Y.
  reset:          true,    // If the tilt effect has to be reset on exit.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


export default function SkillCard({experience, skillName, shotDescription, illustration}){
  return (
    <Tilt options = {defaultOptions} style={{minWidth: 300, minHeight: 450}}>
      <div className='
        hover:z-40 hover:order-1
        bg-[#1A1A1A] p-[16px] rounded-xl min-w-[300px] min-h-[450px]
        border-[1px] border-white/10
        flex flex-col gap-4
        shadow hover:shadow-2xl hover:shadow-fuchsia-800
    '>
        <p className='text-white font-medium text-m text-white/40'>{experience}</p>

        <img className='opacity-20 hover:opacity-100' src={illustration}></img>


        <div>
          <p className='text-white font-bold text-2xl'>{skillName}</p>
          <p className='text-white font-medium text-m text-white/40'>{shotDescription}</p>
        </div>
      </div>
    </Tilt>

  )
}