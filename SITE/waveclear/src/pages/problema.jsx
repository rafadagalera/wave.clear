import ocean1 from '../assets/ocean.png';
import ocean2 from '../assets/poluicao.jpg';
import ocean3 from '../assets/ocean3.jpg';

function Problema() {
    const sections = [
        {
            id: 1,
            title: "A importância dos oceanos.",
            text:  "Os oceanos são os pulmões da Terra, sustentando a vida em nosso planeta de maneiras que muitas vezes subestimamos. Cobrindo mais de 70% da superfície da Terra, esses vastos corpos de água desempenham um papel crítico na regulação do clima global, na manutenção da biodiversidade e na sustentação de ecossistemas vitais. Além de sua imensidão física, os oceanos também abrigam uma riqueza incrível de vida, desde as mais minúsculas formas de vida até as majestosas baleias. Sua importância não se limita apenas ao ambiente marinho, mas também tem impactos significativos na economia global, na segurança alimentar e nas culturas humanas ao redor do mundo. Em última análise, os oceanos são essenciais para a saúde e o bem-estar de toda a vida na Terra, e protegê-los é uma responsabilidade que todos compartilhamos.",
            bgColor: 'bg-gradient-to-b from-primary-white to-primary-lightblue',
            img: ocean1
        },
        {
            id: 2,
            title: "A poluilção dos oceanos é um problema grave.",
            text: "A poluição dos oceanos é um problema sério que afeta negativamente os ecossistemas marinhos, a vida selvagem, a saúde humana e a economia global. Substâncias tóxicas como produtos químicos industriais, pesticidas, metais pesados e plásticos contaminam os habitats marinhos, causando danos aos organismos e afetando seu ciclo de vida, reprodução e saúde geral. Além disso, a poluição leva à degradação de habitats costeiros, recifes de coral e áreas de reprodução de espécies marinhas, resultando na perda de biodiversidade e na diminuição da produtividade dos ecossistemas marinhos. A poluição oceânica também tem impactos negativos na saúde humana, pois a ingestão de frutos do mar contaminados por substâncias tóxicas pode causar doenças e problemas de saúde. Além disso, a poluição dos oceanos tem consequências econômicas significativas, afetando indústrias como pesca, turismo e transporte marítimo. É crucial tomar medidas urgentes para reduzir e prevenir a poluição dos oceanos, protegendo assim esses ecossistemas vitais para a vida na Terra.",
            bgColor: 'bg-gradient-to-b from-primary-lightblue to-primary-white',
            img: ocean2
        },
        {
            id: 3,
            title: "Como os lixos chegam ao oceano.",
            text: "Os oceanos são os pulmões da Terra, sustentando a vida em nosso planeta de maneiras que muitas vezes subestimamos. Cobrindo mais de 70% da superfície da Terra, esses vastos corpos de água desempenham um papel crítico na regulação do clima global, na manutenção da biodiversidade e na sustentação de ecossistemas vitais. Além de sua imensidão física, os oceanos também abrigam uma riqueza incrível de vida, desde as mais minúsculas formas de vida até as majestosas baleias. Sua importância não se limita apenas ao ambiente marinho, mas também tem impactos significativos na economia global, na segurança alimentar e nas culturas humanas ao redor do mundo. Em última análise, os oceanos são essenciais para a saúde e o bem-estar de toda a vida na Terra, e protegê-los é uma responsabilidade que todos compartilhamos.",
            bgColor: 'bg-gradient-to-b from-primary-white via-primary-lightblue to-primary-white',
            img: ocean3
        }
    ];
    return (
        <>
            <div className="flex flex-col">
                {sections.map((section ) => (
                    <div key={section.id} className={`w-screen md:h-auto ${section.bgColor} flex justify-between`}>
                        <div className='w-full md:w-3/4 m-auto mb-32'>
                            <h2 className='mt-[150px] md:mt-16 ml-5 text-5xl md:text-3xl font-bold mx-auto'>{section.title}</h2>
                            <div className='mt-[80px] md:mt-8 ml-5 md:ml-0 justify-center text-justify grid md:grid-cols-2 gap-5 grid-rows-1'>

                                <div className='w-full md:w-11/12 text-lg md:text-base tracking-wide'>
                                    <p className='md:col-start-1 mr-12'>{section.text}</p>
                                </div>
                                
                                <img
                                    className='pt-10 max-w-[600px] min-h-[300px] object-cover '
                                    src={section.img}
                                    alt={`imagem do oceano da seção ${section.title}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Problema;
