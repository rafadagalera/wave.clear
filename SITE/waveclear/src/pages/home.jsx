import { Link } from 'react-router-dom';
function Home() {
    const cards = [
        {
            id: 1,
            title: "Abordando a questão em pauta: A saúde dos oceanos.",
            description: "A saúde dos oceanos é crucial para a vida na Terra. No entanto, enfrenta desafios sérios, como a poluição por plásticos, a acidificação e a sobrepesca. Proteger os oceanos é essencial para manter o equilíbrio ecológico, a biodiversidade marinha e a segurança alimentar global.",
            link: "/problema"
        },
        {
            id: 2,
            title: "Podemos combater o lixo antes mesmo de chegar aos oceanos?",
            description: "Sim. Para combatermos o acúmulo de lixo nos oceanos, devemos olhar primeiramente de onde vêm todo esse lixo. Cerca de 80% do plástico encontrado nos oceanos são provenientes de rios e cursos d'água que estão ligados diretamente aos oceanos. Agora, como o lixo chega até esses rios? Clique em saiba mais para entender.",
            link: "/solucao"
        },
        {
            id: 3,
            title: "Experiencie uma demonstração prática de nossa solução.",
            description: "Faça uma simulação de nosso software, onde você poderá ver com facilidade onde haverá uma tempestade ou ventania e receber um alerta caso o nível desse evento natural seja forte o suficiente para levar detritos das cidades até os rios e cursos de água, consequentemente poluindo oceano.",
            link: "/previsao"
        }
    ]
    return (  
        <>
        <section className='bg-white'>   

            <div className='flex p-10 flex-col gap-4 mt-5 md:w-3/4 md:m-auto'>
                <div className='flex justify-center md:max-h-40 max-h-20 '>
                    <h1 className='md:text-6xl mt-5 text-2xl md:mt-11 md:mr-2  text-teal-700'>Nós somos a <b>wave.clear</b></h1>
                    <img className="md:w-40 w-24 " src="src\assets\b8jIDQs.png" alt="" />
                </div>
                
                <p className='max-w-3xl m-auto mt-6 text-center '>A Wave.Clear é uma empresa comprometida em diminuir significativamente a poluição por plásticos nos oceanos, oferecendo soluções acessíveis e inovadoras. Nosso foco está na criação de tecnologias sustentáveis e acessíveis, garantindo que indivíduos, comunidades e empresas possam participar ativamente da proteção dos ecossistemas marinhos. Cada iniciativa da Wave.Clear é projetada para gerar um impacto positivo tangível, promovendo não apenas a redução da poluição por plásticos, mas também a conservação dos recursos oceânicos para as gerações futuras.
                </p>
            </div>
            <div className=" p-10 flex flex-col gap-8 md:flex-row md:w-3/4 md:m-auto md:mt-20">
                {cards.map((card) => (
                    <div key={card.id} className="group relative box-border border-2 border-primary-white rounded-xl p-5 ">
                        <h2 className="text-3xl pb-3">{card.title}</h2>
                        <p className="text-xl ">{card.description}</p>
                        <button className="flex m-auto mt-4 box-border border-1 border-primary-black bg-teal-700 text-primary-white h-14 w-44 items-center justify-center rounded-md md:mt-20"><Link to={card.link}>Saiba mais</Link></button>
                    </div>
                ))}
            </div>

        </section>
        
        </>
    );
}

export default Home;