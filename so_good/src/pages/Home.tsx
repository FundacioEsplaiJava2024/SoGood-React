import { Button } from '@radix-ui/themes/src/index.js';
import styles, { styled } from 'styled-components';

function Home() {

    const HeroWrapper = styles.div`
        width: 100%;
        height: calc(100vh - 60px);
        position: relative;
    `;

    const Video = styles.video`
        width: 100%;
        height: calc(100vh - 60px);
        object-fit: cover;
    `;

    const HeroContent = styles.div`
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    `;

    const Title = styles.h1`
        font-size: 50px;
        width: fit-content;
        color: white;
    `;

    const CallToAction = styles.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3rem;
        gap: 50px;
        margin-top: 50px;
        margin-bottom: 50px;
    `

    const Left = styles.div`
        width: 39.9%;
    `

    const Right = styles.div`
        width: fit-content; 
        text-align: left; 
        padding: 20px;
        width: 49.9%;
    `

    const SecondaryTitle = styles.div`
        font-size: 35px;
        font-weight: bold;
        width: fit-content;
    `
    const Paragraph = styles.div`
        width: fit-content;
        margin-top: 10px;
        margin-bottom: 20px;
    `
    const ParagraphTitle = styles.div`
    width: fit-content;
    margin-top: 10px;
    margin-bottom: 20px;
`

    const HowUse = styles.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    `

    const Image = styled.img`

    `
    
    return (
        <>
            <HeroWrapper>
                <Video 
                autoPlay 
                muted 
                loop 
                playsInline
                >
                    <source src="../public/videohero1.mp4" />
                </Video>
                <HeroContent>
                    <Title>
                        Reduce el desperdicio de alimentos.
                    </Title>
                </HeroContent>
            </HeroWrapper>
            <CallToAction>
                <Left>
                    <Video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    style={{ borderRadius: "20px" }}
                    >
                        <source src="../public/calltoaction.mp4" />
                    </Video>
                </Left>
                <Right>
                    <SecondaryTitle>
                        ¡Únete a la revolución de la reducción de desperdicio de alimentos!
                    </SecondaryTitle>
                    <ParagraphTitle>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga totam nesciunt reiciendis odio amet est animi quasi illum fugiat, ratione quod, labore quisquam. A culpa porro pariatur delectus, quam reiciendis illo officiis dolor aliquid commodi necessitatibus! Numquam corrupti repellendus distinctio facilis unde labore quisquam dolores sequi odio cupiditate! Sequi, veniam.
                    </ParagraphTitle>
                    <Button>
                        Empieza ahora
                    </Button>
                </Right>
            </CallToAction>
            <HowUse>
                <Title
                style={{ color: "#0f0f0f" }}>
                    ¿Cómo funciona?
                </Title>
                <Paragraph>
                Es una plataforma innovadora diseñada para reducir el desperdicio de alimentos en los restaurantes, ofreciendo comidas a precios reducidos. La idea es simple: los restaurantes pueden listar sus comidas excedentes o próximas a caducar en la plataforma, permitiendo a los usuarios comprar estos alimentos a un costo menor. Esto no solo ayuda a los restaurantes a minimizar pérdidas, sino que también ofrece a los consumidores la oportunidad de disfrutar de comidas deliciosas a precios accesibles. Además, promueve la sostenibilidad y el aprovechamiento responsable de los recursos alimenticios.</Paragraph>
                <Image src='../public/'>

                </Image>
            </HowUse>
        </>
    )
}
export default Home;