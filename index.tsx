import React from 'react'
import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import ContactForm from '../components/ContactForm'
import InstagramIcon from '../components/InstagramIcon'

export default function Home() {
  return (
    <>
      <Head>
        <title>Café — Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="header">
        <div className="logo">Café</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="icons">
          <SearchBar onSearch={(v) => console.log('search', v)} />
        </div>
      </header>

      <main>
        <section className="home">
          <div className="home-container" />
          <div className="content">
            <h1>Bem-vindo ao Café</h1>
            <p>Desfrute do melhor café da cidade.</p>
          </div>
        </section>

        <section id="about" className="about">
          <h2>Sobre nós</h2>
          <p>Amantes do café — tradição e sabor.</p>
        </section>

        <section id="menu" className="menu">
          <h2>Menu</h2>
          <div className="menu-grid">
            <div className="menu-box"><img src="/img/coffee1.jpg" alt="coffee" /><h3>Expresso</h3></div>
            <div className="menu-box"><img src="/img/coffee2.jpg" alt="coffee" /><h3>Latte</h3></div>
            <div className="menu-box"><img src="/img/coffee3.jpg" alt="coffee" /><h3>Cappuccino</h3></div>
          </div>
        </section>

        <section id="review" className="review">
          <h2>Reviews</h2>
          <p>O que nossos clientes dizem.</p>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <ContactForm />
          <div className="social-footer"><InstagramIcon /></div>
        </section>
      </main>
    </>
  )
}

