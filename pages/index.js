import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {useEffect, useState} from "react";
export default function Home() {
    useEffect(() => {
        document.getElementById('vid1').play();
        document.getElementById('vid2').play();
    })
    const handleShow =(e)=>{
        e.preventDefault()
        e.stopPropagation()
        let id = e.target.id
        console.log(id)
        const body = document.querySelectorAll(".item_body")
        if(body[id]){
            return  body[id].classList.toggle("active4")
        }else {
            return false
        }


    }
  return (
    <div className={styles.container}>
        <header className="hero">
            <div className="hero-top">
                <img src="https://i.ibb.co/r5krrdz/logo.png" alt=""/>
                <a href="#" className="btn btn-rounded">
                    Accedi
                </a>
            </div>
            <div className="hero-content">
                <h1>
                    Film, serie TV e tanto altro .
                    Senza limiti.
                </h1>
                <h2>Guarda ciò che vuoi ovunque. Disdici quando vuoi.</h2>
                <p>
                    Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
                    riattivare il tuo abbonamento.
                </p>
                <form className="form">
                    <input
                        type="text"
                        name=" email"
                        id=""
                        placeholder="Indirizzo email "
                    />
                    <button className="btn">Inizia</button>
                </form>
            </div>
        </header>
        <section className="tabs">
            <div className="tab-item">
                <p>
                    <strong> Goditi Netflix sulla tua TV.</strong>
                    Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV,
                    lettori Blu-ray e molti altri dispositivi.
                </p>
                <div className="video">
                    <div className="img-cover">
                        <video
                            className="my-video"
                            autoPlay
                            loop
                            id='vid1'
                            width="100%"
                            height="100%"
                        >
                            <source src='vid2.m4v'/>
                        </video>
                    </div>
                </div>
            </div>
            <div className="tab-item">
                <p>
                    <strong> Scarica le tue serie da guardare offline.</strong>
                    Salva facilmente i tuoi preferiti così avrai sempre qualcosa da
                    guardare.
                </p>
                <img src='mobile.jpg' alt=""/>
            </div>
            <div className="tab-item">
                <p>
                    <strong>Guarda Netflix ovunque.</strong>
                    Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in
                    streaming film e serie TV senza limiti e senza spendere di più.
                </p>
                <div className="video">
                    <div className="img-cover">
                        <video
                            className="my-video"
                            autoPlay
                            loop
                            id='vid2'

                            width="100%"
                            height="100%"
                        >
                            <source src='vid1.m4v'/>
                        </video>
                    </div>
                </div>
            </div>
        </section>
        <section className="domande">
            <h2>Domande frequenti</h2>
            <div className="item" >
                <div className='head' id='0'  onClick={handleShow}>
                    <button className="ask-btn"  >
                        Cos'e Netflix?
                    </button>
                    <div className='icon'>
                        x
                    </div>
                </div>
                <div className='item_body' >
                    <p  className="answer">
                        Netflix è un servizio di streaming che offre una varietà di serie
                        TV, film, documentari pluripremiati e tanto altro su una vasta gamma
                        di dispositivi connessi a Internet. Guarda quello che vuoi, in
                        qualsiasi momento e senza interruzioni pubblicitarie. Il tutto a una
                        quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire:
                        aggiungiamo nuovi film e serie TV ogni settimana!
                    </p>
                </div>


            </div>
            <div className="item">
                <div className='head' id='1' onClick={handleShow}>
                    <button className="ask-btn" >
                        quanto costa netflix ?{" "}
                    </button>
                    <div className='icon'>
                        x
                    </div>
                </div>
                <div className="item_body" id="q2">
                    <p  className="answer">
                        Netflix è un servizio di streaming che offre una varietà di serie
                        TV, film, documentari pluripremiati e tanto altro su una vasta gamma
                        di dispositivi connessi a Internet. Guarda quello che vuoi, in
                        qualsiasi momento e senza interruzioni pubblicitarie. Il tutto a una
                        quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire:
                        aggiungiamo nuovi film e serie TV ogni settimana!
                    </p>
                </div>



            </div>
            <div className="item">
                <div className='head' id='2' onClick={handleShow}>
                    <button className="ask-btn" >
                        dove posso guardare netflix ?
                    </button>
                    <div className='icon'>
                        x
                    </div>
                </div>
                <div className="item_body">
                    <p id="q3" className="answer">
                        Netflix è un servizio di streaming che offre una varietà di serie
                        TV, film, documentari pluripremiati e tanto altro su una vasta gamma
                        di dispositivi connessi a Internet. Guarda quello che vuoi, in
                        qualsiasi momento e senza interruzioni pubblicitarie. Il tutto a una
                        quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire:
                        aggiungiamo nuovi film e serie TV ogni settimana!
                    </p>
                </div>

            </div>
            <div className="item">
                <div className='head' id='3' onClick={handleShow} >
                    <button className="ask-btn" >
                        come posso disdire ?
                    </button>
                    <div className='icon'>
                        x
                    </div>
                </div>
                <div className='item_body'>
                    <p id="q4" className="answer">
                        Netflix è un servizio di streaming che offre una varietà di serie
                        TV, film, documentari pluripremiati e tanto altro su una vasta gamma
                        di dispositivi connessi a Internet. Guarda quello che vuoi, in
                        qualsiasi momento e senza interruzioni pubblicitarie. Il tutto a una
                        quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire:
                        aggiungiamo nuovi film e serie TV ogni settimana!
                    </p>
                </div>


            </div>
            <div className="item">
                <div className='head' id='4' onClick={handleShow}>
                    <button className="ask-btn" >
                        come posso guardare su netflix?
                    </button>
                    <div className='icon'>
                        x
                    </div>
                </div>
                <div className="item_body">
                    <p id="q5" className="answer">
                        Netflix è un servizio di streaming che offre una varietà di serie
                        TV, film, documentari pluripremiati e tanto altro su una vasta gamma
                        di dispositivi connessi a Internet. Guarda quello che vuoi, in
                        qualsiasi momento e senza interruzioni pubblicitarie. Il tutto a una
                        quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire:
                        aggiungiamo nuovi film e serie TV ogni settimana!
                    </p>
                </div>


            </div>

            <p>
                Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
                riattivare il tuo abbonamento.
            </p>

            <form className="form">
                <input
                    type="text"
                    name=" email"
                    id=""
                    placeholder="Indirizzo email "
                />
                <button className="btn">Inizia</button>
            </form>
        </section>
        <footer className="footer">
            <p className='contact'>Domande? Chiama 800-130-364</p>
            <div className="footer-cols">
                <ul>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Investor Relations</a>
                    </li>
                    <li>
                        <a href="#">Ways To Watch</a>
                    </li>
                    <li>
                        <a href="#">Corporate Information</a>
                    </li>
                    <li>
                        <a href="#">Netflix Originals</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Help Center</a>
                    </li>
                    <li>
                        <a href="#">Jobs</a>
                    </li>
                    <li>
                        <a href="#">Terms Of Use</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Account</a>
                    </li>
                    <li>
                        <a href="#">Redeem Gift Cards</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                    <li>
                        <a href="#">Speed Test</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Media Center</a>
                    </li>
                    <li>
                        <a href="#">Buy Gift Cards</a>
                    </li>
                    <li>
                        <a href="#">Cookie Preferences</a>
                    </li>
                    <li>
                        <a href="#">Legal Notices</a>
                    </li>
                </ul>
            </div>
            <select name="lang" id="" className="select">
                <option value="">Italiano</option>
                <option value="">Inglese</option>
            </select>
        </footer>
    </div>
  )
}
