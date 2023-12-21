import SkillCard from "./SkillCard";

import pythonIllustration from './../../assets/Python.png'
import javaIllustration from './../../assets/Java.png'
import cppIllustration from './../../assets/C++.png'
import frontendIllustration from './../../assets/Frontend.png'
import androidIllustration from './../../assets/Android.png'
import reactIllustration from './../../assets/React.png'

export default function AboutPage(){
  return(
    <div className='p-[80px] flex flex-col gap-[64px]'>
      {/*Software skills*/}
      <div className='flex flex-col gap-[24px]'>
        {/*Title*/}
        <p className='text-white text-4xl font-bold'>
          Software skills
        </p>

        <div className='grid grid-cols-3 gap-4'>
          <SkillCard skillName='Pyhton' experience='4 year' shotDescription='Занимался разработкой консольных приложений, анализом данных, написанием GUI приложений под десктоп. Есть опыт работы с Django, Flask и FastAPI' illustration={pythonIllustration}/>
          <SkillCard skillName='Java' experience='3 year' shotDescription='Обладаю уверенными знаниями Java в области многопоточной серврерной разработки. Знаком и отлично владею такими технологиями как Spring и Spring Boot.' illustration={javaIllustration}/>
          <SkillCard skillName='C++' experience='5 year' shotDescription='Активно использую в ежедневной работе для оптимизации узкоспециализированных задач основанных на высислениях. Есть опыт програмирования микроконтроллеров.' illustration={cppIllustration}/>
          <SkillCard skillName='Frontend development' experience='5 year' shotDescription='Активно использую в своих фулстак проектах. Занималюсь как мобильной кросплатформеной разработкой gui приложений так и web.' illustration={frontendIllustration}/>
          <SkillCard skillName='Android development' experience='2 year' shotDescription='Изучаю и применяю на практике разработку android приложений с использованием внешних api.' illustration={androidIllustration}/>
          <SkillCard skillName='React.JS' experience='3 year' shotDescription='Наиболее часто мною используемый инструмент в фронтенд разработке. Есть опыт работы с производными фреймворками: Next.JS например.' illustration={reactIllustration}/>
        </div>
      </div>

      {/*Контактная информация*/}
      <div className='flex flex-col gap-[24px]'>
        {/*Контактная информация*/}
        <p className='text-white text-4xl font-bold'>
          My Contacts
        </p>

        {/*Контакты*/}
        <div className='
          bg-[#1A1A1A] p-[16px] rounded-xl min-w-full
          border-[1px] border-white/10
          gap-[24px]
          flex flex-col
        '>
          <p className='text-white font-bold text-3xl'>Let's talk:</p>

          <div className='flex flex-col gap-[12px]'>
            <div>
              <p className='text-white text-bold text-xl'>Telegram: +7-906-438-37-32</p>
            </div>

            <div>
              <p className='text-white text-bold text-xl'>Whatsapp: +7-995-188-80-36</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}