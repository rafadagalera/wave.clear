function Equipe() {
  return (
    <>

      <div className=" md:py-24 sm:py-32 mb-12 lg:py-48 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl mt-12 font-bold text-teal-700 text-center mb-8 sm:mb-12">Conheça a equipe</h2>
          <p className="text-lg lg:text-xl text-gray-950text-center leading-7 lg:leading-9 mb-12 sm:mb-16 lg:mb-20">A solução foi idealizada por dois alunos do primeiro ano de Engenharia de Software na Faculdade de Informática e Administração Paulista - FIAP.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2   gap-8 sm:gap-12 lg:gap-16 justify-center"> 
            <div className="flex flex-col items-center gap-4">
              <img className="h-40 w-40 lg:h-64 lg:w-64 rounded-lg mx-auto"src="https://media.licdn.com/dms/image/D4D03AQEt-87icdyWAQ/profile-displayphoto-shrink_200_200/0/1711988061323?e=1722470400&v=beta&t=cK2rTmuhqwqqmeZ1do8pzlQy462MBbECEQNempl8Vis" alt="imagem do participante Vinicius Taiki" />
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-semibold text-teal-900">Vinicius Taiki</h3>
                <p className="text-base lg:text-lg font-semibold">RM - 554226</p>
                <a className="text-base lg:text-lg font-semibold text-primary-gray" href="https://www.linkedin.com/in/taikitaiki/">Linkedin</a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <img className="h-40 w-40 lg:h-64 lg:w-64 rounded-lg mx-auto" src="https://media.licdn.com/dms/image/D4E03AQHA5bVjCd6pEQ/profile-displayphoto-shrink_200_200/0/1695610485408?e=1722470400&v=beta&t=Fv8bzab5glMGxOxJvj9Z9hfB0p1qPER2lE5YSH761TA" alt="imagem do participante Rafael Nascimento" />
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-semibold  text-teal-900">Rafael Nascimento</h3>
                <p className="text-base lg:text-lg font-semibold">RM - 554226</p>
                <a className="text-base lg:text-lg font-semibold text-primary-gray" href="https://www.linkedin.com/in/devdagalera/">Linkedin</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
    
  );
}

export default Equipe;
