import ocean1 from '../assets/ocean.png'
import ocean2 from '../assets/ocean2.jpg'
import ocean3 from '../assets/ocean3.jpg'

function Problema() {
    const sections = [
        {
            id: 1,
            title: "Seção 1",
            subtitle: "Lorem Ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula. Etiam accumsan neque quis nisl rhoncus, et malesuada nisi facilisis. Fusce aliquet elit sit amet mauris hendrerit, eget aliquet turpis pulvinar. Ut vulputate scelerisque lacus, id placerat nisi sodales eu. Praesent vitae blandit est. Vivamus sed augue id justo interdum aliquam et vel mauris. Mauris lacinia pharetra diam id pretium.",
            bgColor: 'bg-secondary-blue',
            img: ocean1
        },
        {
            id: 2,
            title: "Seção 2",
            subtitle: "Lorem Ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula. Etiam accumsan neque quis nisl rhoncus, et malesuada nisi facilisis. Fusce aliquet elit sit amet mauris hendrerit, eget aliquet turpis pulvinar. Ut vulputate scelerisque lacus, id placerat nisi sodales eu. Praesent vitae blandit est. Vivamus sed augue id justo interdum aliquam et vel mauris. Mauris lacinia pharetra diam id pretium.",
            bgColor: 'bg-tertiary-blue',
            img: ocean2
        },
        {
            id: 3,
            title: "Seção 3",
            subtitle: "Lorem Ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula. Etiam accumsan neque quis nisl rhoncus, et malesuada nisi facilisis. Fusce aliquet elit sit amet mauris hendrerit, eget aliquet turpis pulvinar. Ut vulputate scelerisque lacus, id placerat nisi sodales eu. Praesent vitae blandit est. Vivamus sed augue id justo interdum aliquam et vel mauris. Mauris lacinia pharetra diam id pretium.",
            bgColor: 'bg-primary-white',
            img: ocean3
        }
    ]
    return (
        <>
            <div className="flex flex-col">
                {sections.map((section) => (
                    <div key={section.id} className={`w-screen h-[1017px] ${section.bgColor} flex justify-between`}>
                        <div>
                            <h2 className='mt-[300px] ml-5 text-5xl font-bold mx-auto'>{section.title}</h2>
                            <div className='mt-[200px] grid grid-cols-2 gap-5 grid-rows-1'>
                                <h3 className='row-start-1'>{section.subtitle}</h3>
                                <p className='col-start-1'>{section.text}</p>
                                <img
                                    className='w-[600px] h-[423px] object-cover '
                                    src={section.img}
                                    alt={`imagem do oceano da seçao ${section.title}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Problema;