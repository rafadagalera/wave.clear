import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function Home() {
    const cards = [
        {
            id: 1,
            title: "Abordando a questão em pauta: A saúde dos oceanos.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
            link: "/problema"
        },
        {
            id: 2,
            title: "Como combater o lixo antes mesmo de chegar aos oceanos.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
            link: "/solucao"
        },
        {
            id: 3,
            title: "Experiencie uma demonstração prática de nossa solução.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
            link: "/previsao"
        }
    ]
    return (
        <>
            <section className='bg-white'>
                <div>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
                </div>

                <div className='flex p-10 flex-col gap-4 mt-5 md:w-3/4 md:m-auto'>
                    <h1 className='text-6xl m-auto md:mt-20 text-teal-700'>Nós somos a <b>wave.clear</b></h1>
                    <p className='max-w-3xl m-auto mt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.</p>
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