import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Solucao() {
    const solucaoCards = [
        {
            id: 1,
            title: 'Solução 1',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
        },
        {
            id: 2,
            title: 'Solução 2',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
        },
        {
            id: 3,
            title: 'Solução 3',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
        },
        {
            id: 4,
            title: 'Solução 4',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
        },
        {
            id: 5,
            title: 'Solução 5',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, turpis et luctus varius, sapien lacus porttitor sapien, sit amet tempus nisi justo et est. Curabitur pharetra ultricies pulvinar. Cras sit amet dapibus sem, nec hendrerit diam. Nulla eu diam ultrices, placerat ipsum at, posuere ligula.",
        }
    ]
  return (  
    <>
      <h1>solucao</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
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
            items: 3,
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
            items: 2,
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
        {solucaoCards.map((card)=>(
            <div key={card.id}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
            </div>
        ))}
      </Carousel>
    </>
  );
}

export default Solucao;
