import React from 'react'
import Header from '../../components/header'

import Button from '../../components/Button';

import HeroRectangleOne from "../../assets/Rectangle-Big.png";
import HeroRectangleTwo from "../../assets/Rectangle-Small.png";

import "../../styles/hero.css";
import "../../styles/section2.css";

const Home = () => {
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

        </main>
    )
}

export default Home