import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Solucao() {
    const cards = [
        {
            id: 1,
            title: 'Alertas de tempestades e ventanias em áreas de acúmulo de lixo.',
            button: <a href="./previsao">Clique aqui para saber mais.</a>,
            description: (
                <>
                    <p>Nos vastos oceanos, enfrentamos um desafio urgente: a poluição marinha. Áreas de acúmulo de lixo representam uma ameaça séria não apenas para a vida marinha, mas também para comunidades costeiras. O que torna essa ameaça ainda mais crítica são as tempestades, que carregam o lixo dos rios para o mar, agravando o problema da poluição marinha. Para enfrentar esse desafio, desenvolvemos um software inovador.</p>
                    <p>Este software fornece alertas sobre tempestades e ventos intensos em áreas de acúmulo de lixo. Esses alertas capacitam comunidades, governos e voluntários a agir rapidamente, protegendo nossos oceanos e ecossistemas costeiros. Juntos, podemos fazer a diferença na preservação dos nossos preciosos recursos marinhos.</p>
                    
                    
                    <div className='md:flex md:justify-center md:m-auto md:mt-12 md:mb-12'>
                        
                        <img src="src\assets\previsao1.png" alt="" />
                        <img src="src\assets\previsao2.png" alt="" />

                    </div>

                    <p>Nosso software opera de maneira simples e eficaz: os usuários selecionam os locais de interesse, e o sistema consulta uma API em tempo real para obter informações precisas sobre a temperatura nessas áreas. Além disso, o software analisa esses dados para identificar a ocorrência de tempestades. Ao detectar condições climáticas adversas, ele emite alertas imediatos aos usuários, permitindo que estejam cientes e preparados para qualquer mudança repentina no clima. Essa integração de dados em tempo real e alertas automáticos proporciona uma experiência segura e confiável aos usuários, ajudando-os a planejar suas atividades de forma mais eficiente e a se protegerem contra eventos climáticos adversos.</p>
                   
                
                </>
            ),
            bgColor: 'bg-primary-white'
        },
        {
            id: 2,
            title: 'Implementação de contêineres em áreas de grande acúmulo de lixo para amenizar danos aos oceanos de forma geral.',
            description: (
                <>
                    <p className='mt-9'>Uma estratégia inovadora para mitigar os danos aos oceanos causados pelo acúmulo de lixo é a implementação de contêineres inteligentes em áreas propensas ao acúmulo de resíduos, como margens de rios e áreas costeiras.</p>
                    <br />
                    <p>Esses contêineres são equipados com tecnologia avançada, incluindo sensores que detectam e monitoram o nível de lixo dentro deles. A ideia central é criar uma rede de contêineres que sejam capazes de coletar ativamente o lixo flutuante que se acumula nos rios antes que ele chegue aos oceanos. Os sensores instalados nos contêineres são projetados para identificar quando o contêiner atinge sua capacidade máxima. Assim que isso acontece, um alerta é automaticamente acionado, sinalizando a necessidade de esvaziar o contêiner. Essa abordagem tem várias vantagens significativas. Em primeiro lugar, ela ajuda a prevenir que grandes quantidades de resíduos cheguem aos oceanos, reduzindo assim a poluição marinha e seus impactos negativos nos ecossistemas marinhos e na vida selvagem. Além disso, ao concentrar a coleta de lixo em áreas críticas, como margens de rios, podemos direcionar de forma mais eficaz os esforços de limpeza e minimizar o tempo e os recursos necessários para a remoção do lixo.</p>
                    <br />
                    <p>Esses contêineres inteligentes também podem ser integrados a sistemas de coleta de resíduos existentes, permitindo uma abordagem mais holística para a gestão de resíduos. Por exemplo, eles podem ser esvaziados regularmente por equipes de limpeza municipal ou por embarcações especializadas que operam nas áreas costeiras e fluviais. Além disso, a implementação desses contêineres pode aumentar a conscientização pública sobre a importância da redução do lixo plástico e da conservação dos oceanos. Ao ver a tecnologia em ação e compreender o impacto positivo que ela pode ter no meio ambiente, as pessoas podem ser incentivadas a adotar práticas mais sustentáveis de descarte de resíduos e a se envolver ativamente na proteção dos oceanos. Em suma, a implementação de contêineres inteligentes em áreas de grande acúmulo de lixo é uma medida promissora para combater a poluição marinha e proteger os oceanos. Ao aproveitar a tecnologia para monitorar e gerenciar o lixo de forma mais eficiente, podemos dar um passo significativo em direção a um futuro mais limpo e saudável para nossos oceanos e para o planeta como um todo.</p>
                    
                    <img className='w-5/6 m-auto pt-12' src="src\assets\container.png" alt="demonstracao tecnica do container" />
                
                </>
            ),
            bgColor: 'bg-primary-white'
        },
        // Os demais cards...
    ];

    return (
        <div className='w-full md:w-3/4 md:m-auto h-screen  bg-white'>
            <h1 className='text-6xl p-12 pb-0 md:mt-20 md:mb-12 text-teal-700'>A nossa <b>solução</b></h1>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="bg"
                containerClass="container"
                dotListClass=""
                draggable={false}
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl={false}
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {cards.map((card) => (
                    <div key={card.id} className={` rounded-lg bg-slate-200 p-12`}>
                        <div className='text-lg'>
                            <h2 className='mb-3 text-2xl'> <b>{card.title}</b></h2>
                            <div className='text-justify'>{card.description}</div>
                            <span><b>{card.button}</b></span>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Solucao;
