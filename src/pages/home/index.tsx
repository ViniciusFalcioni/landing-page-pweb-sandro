import { useState } from "react";


import Header from '../../components/header'
import Button from '../../components/Button';
import Footer from "../../components/footer";

import HeroRectangleOne from "../../assets/Rectangle-Big.png";
import HeroRectangleTwo from "../../assets/Rectangle-Small.png";

import "../../styles/hero.css";
import "../../styles/section2.css";
import "../../styles/section3.css";
import "../../styles/section4.css";
import "../../styles/section5.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const plans = [
    {
        id: 1,
        title: "Básico",
        price: "Grátis",
        description: "Baixe a ferramenta e comece a utilizar agora mesmo!",
        buttonText: "Baixar agora",
        features: [
            "Com anúncios",
            "Até 10 produtos por dia",
            "Utilize sem limitação X",
        ],
    },
    {
        id: 2,
        title: "Premium",
        price: "R$ 19,90/mês",
        description: "Para quem deseja utilizar nossa ferramenta sem limitações!",
        buttonText: "Experimente de graça",
        features: [
            "Sem interrupção de anúncios",
            "Utilize quantas vezes quiser",
            "Utilize todos os produtos disponíveis na plataforma",
        ],
        featured: true,
    },
    {
        id: 3,
        title: "Empresarial",
        price: "R$ 12,90/mês por dev",
        description: "Utilize nossa solução na sua empresa. Aprimore seu fluxo.",
        buttonText: "Baixar agora",
        features: [
            "Com anúncios",
            "Até 10 produtos por dia",
            "Utilize sem limitação X",
        ],
    },
];

const testimonials = [
    {
        id: 1,
        name: "Lucas Andrade",
        title: "Empreendedor Digital",
        review: "A plataforma X transformou completamente a forma como gerencio meus negócios. A interface intuitiva e as ferramentas poderosas me ajudam a alcançar meus objetivos com muito mais eficiência.",
        rating: 5,
        imgSrc: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Fernanda Oliveira",
        title: "Consultora Financeira",
        review: "Com a plataforma X, consegui otimizar meu trabalho e alcançar novos clientes em um tempo recorde. É incrível como ela se adapta às minhas necessidades diárias.",
        rating: 4,
        imgSrc: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Carlos Alberto",
        title: "CEO - AgroSoluções",
        review: "Utilizamos a plataforma X para conectar nossos serviços a novos mercados e aumentar nossa visibilidade. Os resultados têm sido impressionantes, superando todas as expectativas.",
        rating: 5,
        imgSrc: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        name: "Patrícia Souza",
        title: "Especialista em Marketing",
        review: "Desde que comecei a usar a plataforma X, meu trabalho tornou-se muito mais prático e produtivo. Recomendo a todos que buscam eficiência e inovação.",
        rating: 4,
        imgSrc: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        name: "João Pereira",
        title: "Produtor Rural",
        review: "A plataforma X mudou completamente a forma como comercializo meus produtos. Agora consigo alcançar novos clientes e fechar negócios com rapidez e segurança.",
        rating: 5,
        imgSrc: "https://via.placeholder.com/150",
    },
];


const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Enviando...");

        try {
            const response = await fetch("https://us-central1-temporal-frame-426102-r9.cloudfunctions.net/function-1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer SEU_TOKEN_FIXO",
                },
                body: JSON.stringify({
                    toMail: email,
                    content: message,
                }),
            });

            if (response.ok) {
                setStatus("E-mail enviado com sucesso!");
                setEmail("");
                setMessage("");
            } else {
                const errorData = await response.json();
                setStatus(`Erro: ${errorData.error}`);
            }
        } catch (error) {
            setStatus("Erro ao enviar o e-mail. Tente novamente.");
        }
    };
    return (
        <main className='bg-black'>
            <Header />
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Conecte-se com o mundo em tempo real</h1>
                    <p>Acompanhe o que está acontecendo no mundo em tempo real.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>

            </section>
            <section id="section-2">
                <div className="content">
                    <h3>Descubra novas formas de se conectar e interagir no App X</h3>
                    <p>
                        O <strong>App X</strong> é onde as conversas globais acontecem. Milhões de pessoas compartilham suas ideias, acompanham tendências e se conectam com o que mais importa. Junte-se à comunidade e descubra o poder de se conectar com o mundo.
                    </p>
                    <div className="cards-container">
                        <div className="card">
                            <div className="card-icon">🌍</div>
                            <h4 className="card-title">Acompanhe o que está acontecendo</h4>
                            <p className="card-description">
                                Com o X, você está sempre por dentro das últimas tendências, notícias e tópicos que mais importam, em tempo real.
                            </p>
                        </div>
                        <div className="card">
                            <div className="card-icon">💬</div>
                            <h4 className="card-title">Participe das conversas globais</h4>
                            <p className="card-description">
                                Compartilhe suas ideias com o mundo, interaja com grandes influenciadores e faça sua voz ser ouvida em tópicos de relevância global.
                            </p>
                        </div>
                        <div className="card">
                            <div className="card-icon">🚀</div>
                            <h4 className="card-title">Explore oportunidades</h4>
                            <p className="card-description">
                                O X é uma plataforma que vai além da comunicação. Descubra novos contatos, oportunidades de negócios e muito mais, tudo ao seu alcance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div id="section-3">
                <div className="content">
                    <p>Conselho de quem conhece</p>
                    <h3>Cada cliente importa!</h3>
                    <p>Conheça a opinião de nossos usuários e descubra como a plataforma X tem transformado negócios e impulsionado resultados em diversos setores.</p>
                    <Slider {...settings} className="cards-container">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="card">
                                <img src={testimonial.imgSrc} alt={testimonial.name} />
                                <h4 className="card-title">{testimonial.name}</h4>
                                <p className="card-description">{testimonial.title}</p>
                                <p>{testimonial.review}</p>
                                <div className="rating">
                                    {"★".repeat(testimonial.rating)}
                                    {"☆".repeat(5 - testimonial.rating)}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <section id="section-4">
                <h2>Planos e preços</h2>
                <p>Nossos planos</p>
                <div className="plans-container">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`plan-card ${plan.featured ? "featured" : ""}`}
                        >
                            {plan.featured && (
                                <div className="plan-badge">1º MÊS GRÁTIS</div>
                            )}
                            <div className="plan-header">{plan.title}</div>
                            <div className="plan-price">{plan.price}</div>
                            <p className="plan-description">{plan.description}</p>
                            <button className="plan-button">{plan.buttonText}</button>
                            <ul className="plan-features">
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section id="section-5">
                <h2>Entre em contato</h2>
                <p>
                    Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um
                    orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à
                    disposição para responder. 😊
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Seu melhor Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        required
                    />
                    <button type="submit">Enviar</button>
                </form>
                {status && <p>{status}</p>}
            </section>

            <Footer />
        </main>
    )
}

export default Home