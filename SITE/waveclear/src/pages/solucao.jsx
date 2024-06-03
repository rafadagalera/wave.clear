import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Solucao() {
    const cards = [
        {
            id: 1,
            title: 'Alertas de tempestades e ventanias em áreas de acúmulo de lixo.',
            button: <a href="./previsao">Clique aqui para saber mais.</a>,
            description: " Nos vastos oceanos, enfrentamos um desafio urgente: a poluição marinha. Áreas de acúmulo de lixo representam uma ameaça séria não apenas para a vida marinha, mas também para comunidades costeiras. O que torna essa ameaça ainda mais crítica são as tempestades, que carregam o lixo dos rios para o mar, agravando o problema da poluição marinha. Para enfrentar esse desafio, desenvolvemos um software inovador. Este software fornece alertas sobre tempestades e ventos intensos em áreas de acúmulo de lixo. Esses alertas capacitam comunidades, governos e voluntários a agir rapidamente, protegendo nossos oceanos e ecossistemas costeiros. Juntos, podemos fazer a diferença na preservação dos nossos preciosos recursos marinhos. " ,
            bgColor: 'bg-primary-white'
        },
        {
            id: 2,
            title: 'Solução 2',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
            bgColor: 'bg-primary-white'
        },
        {
            id: 3,
            title: 'Solução 3',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
            bgColor: 'bg-primary-white'
        },
        {
            id: 4,
            title: 'Solução 4',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
            bgColor: 'bg-primary-white'
        },
        {
            id: 5,
            title: 'Solução 5',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
            bgColor: 'bg-primary-white'
        }
    ]
    return (
        <>
<<<<<<< HEAD
        <div className='w-full h-screen bg-secondary-blue'>
            <h2>wave.clear visa mudar a forma como pensamos no combate à poluição marítma</h2>
=======
        <div className='w-full md:w-3/4 md:m-auto h-screen bg-primary-white'>
            <h1 className='text-6xl p-12 pb-0 md:mt-20 text-teal-700'>A nossa <b>solução</b></h1>
>>>>>>> taiki-tests
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
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
                    <div  key={card.id} className={`${card.bgColor} p-12`}>
                        <div className='text-lg'>
                            <h2 className='mb-3 text-2xl'> <b>{card.title}</b></h2>
                            <p className='text-justify '>{card.description}</p>
                            <span><b>{card.button}</b></span>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
        </>
    );
}

export default Solucao;
