import React from 'react';
import teamData from './teaminfo.json';

function Equipe() {
  return (
    <div className=" md:py-24 sm:py-32 mb-12 lg:py-48 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl mt-12 font-bold text-teal-700 text-center mb-8 sm:mb-12">Conheça a equipe</h2>
        <p className="text-lg lg:text-xl text-gray-950 text-center leading-7 lg:leading-9 mb-12 sm:mb-16 lg:mb-20">A solução foi idealizada por dois alunos do primeiro ano de Engenharia de Software na Faculdade de Informática e Administração Paulista - FIAP.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2   gap-8 sm:gap-12 lg:gap-16 justify-center"> 
          {teamData.team_members.map(member => (
            <div key={member.id} className="flex flex-col items-center gap-4">
              <img className="h-40 w-40 lg:h-64 lg:w-64 rounded-lg mx-auto" src={member.img} alt={`Imagem do participante ${member.nome}`} />
              <div className="text-center">
                <h2 className="text-xl lg:text-xl font-semibold text-teal-900">{member.nome}</h2>
                <p className="text-base lg:text-lg font-semibold">RM - {member.id}</p>
                <a className="text-base lg:text-lg font-semibold text-primary-gray" href={member.linkedin}>Linkedin</a>
                <h3 className="text-lg lg:text-xl font-semibold text-teal-900">{member.curso}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Equipe;
