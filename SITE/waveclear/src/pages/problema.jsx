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
            title: "A poluição dos oceanos é um problema grave.",
            text: "A poluição dos oceanos é um problema sério que afeta negativamente os ecossistemas marinhos, a vida selvagem, a saúde humana e a economia global. Substâncias tóxicas como produtos químicos industriais, pesticidas, metais pesados e plásticos contaminam os habitats marinhos, causando danos aos organismos e afetando seu ciclo de vida, reprodução e saúde geral. Além disso, a poluição leva à degradação de habitats costeiros, recifes de coral e áreas de reprodução de espécies marinhas, resultando na perda de biodiversidade e na diminuição da produtividade dos ecossistemas marinhos. A poluição oceânica também tem impactos negativos na saúde humana, pois a ingestão de frutos do mar contaminados por substâncias tóxicas pode causar doenças e problemas de saúde. Além disso, a poluição dos oceanos tem consequências econômicas significativas, afetando indústrias como pesca, turismo e transporte marítimo. É crucial tomar medidas urgentes para reduzir e prevenir a poluição dos oceanos, protegendo assim esses ecossistemas vitais para a vida na Terra.",
            bgColor: 'bg-gradient-to-b from-primary-lightblue to-primary-white',
            img: ocean2
        },
        {
            id: 3,
            title: "Como os lixos chegam ao oceano.",
            text: "Os lixos chegam aos oceanos de diversas maneiras, sendo as chuvas e tempestades um dos principais vetores. Em áreas urbanas, resíduos mal descartados nas ruas e calçadas são levados pelas águas pluviais para os sistemas de esgoto e drenagem. Durante tempestades, a intensidade da água aumenta, transportando uma quantidade ainda maior de lixo para os rios. Esses rios, por sua vez, deságuam no oceano, carregando consigo uma vasta quantidade de detritos. Além disso, enchentes exacerbam esse problema ao arrastar lixo diretamente das margens e terrenos alagados para os cursos d'água. Assim, as precipitações atuam como uma espécie de condutor, conectando o lixo urbano às vias fluviais e, eventualmente, aos oceanos, onde causam sérios danos ambientais e à vida marinha.",
            bgColor: 'bg-gradient-to-b from-primary-white via-primary-lightblue to-primary-white',
            img: ocean3
        }
    ];
    return (
        <>
            <div className="flex flex-col">
                {sections.map((section ) => (
                    <div key={section.id} className={` md:h-auto ${section.bgColor} flex justify-between`}>
                        <div className='w-full md:w-3/4 m-auto mb-3'>
                            <h2 className='mt-14 md:mt-16 ml-5 text-5xl md:text-3xl font-bold mx-auto  text-teal-700'>{section.title}</h2>
                            <div className='mt-[80px] md:mt-8 ml-5 md:ml-0 justify-center text-justify grid md:grid-cols-2 gap-5 grid-rows-1'>

                                <div className='w-4/5 text-center items-center m-auto md:w-11/12 text-base w md:text-base tracking-wide'>
                                    <p className='md:col-start-1 '>{section.text}</p>
                                </div>
                                
                                <img
                                    className=' m-auto max-w-96 md:min-h-[300px] object-cover '
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
