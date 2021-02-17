import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    // document.getElementById("vid1").play();
    // document.getElementById("vid2").play();
    const body = document.getElementsByClassName(styles.ask_item);
    const bodyArr = [].slice.call(body);
    console.log(bodyArr);
    for (let q of bodyArr) {
      let filterMe = bodyArr.filter((a) => a !== q);
      q.addEventListener("click", function (e) {
        console.log(this);
        this.classList.toggle(styles.active);
        for (let m of filterMe) {
          m.classList.remove(styles.active);
        }
      });
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.hero_header}>
          <div className={styles.logo}>
            <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
          </div>
          <div className={styles.nav}>
            <a href="#" className="btn btn-rounded">
              Accedi
            </a>
          </div>
        </div>
        <div className={styles.hero_center}>
          <div className={styles.h1}>
            Film, serie TV e tanto altro . Senza limiti.
          </div>
          <div className={styles.h2}>
            Guarda ciò che vuoi ovunque. Disdici quando vuoi.
          </div>
          <div className={styles.hero_p}>
            Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
            riattivare il tuo abbonamento.
          </div>
          <div className={styles.form}>
            <input
              type="text"
              name=" email"
              id=""
              placeholder="Indirizzo email "
            />
            <button className="btn">Inizia</button>
          </div>
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.item}>
          <div className={styles.item_head}>
            <div className={styles.item_title}>
              Goditi Netflix sulla tua TV.
            </div>
            <div className={styles.item_desc}>
              Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple
              TV, lettori Blu-ray e molti altri dispositivi.
            </div>
          </div>
          <div className={styles.item_img}>
            <div className={styles.item_img_cover}>
              <video className={styles.video} autoPlay loop id="vid1">
                <source src="vid2.m4v" />
              </video>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_head}>
            <div className={styles.item_title}>
              Scarica le tue serie da guardare offline.
            </div>
            <div className={styles.item_desc}>
              Salva facilmente i tuoi preferiti così avrai sempre qualcosa da
              guardare.
            </div>
          </div>
          <div className={styles.item_img}>
            <div className={styles.item_img_cover}>
              <img src="mobile.jpg" alt="" className={styles.img} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_head}>
            <div className={styles.item_title}>Guarda Netflix ovunque.</div>
            <div className={styles.item_desc}>
              Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare
              in streaming film e serie TV senza limiti e senza spendere di più.
            </div>
          </div>
          <div className={styles.item_img}>
            <div className={styles.item_img_cover}>
              <video className={styles.video} autoPlay loop id="vid2">
                <source src="vid1.m4v" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.asks}>
        <div className={styles.item_title}>Domande frequenti</div>

        <div className={styles.ask_item}>
          <div className={styles.ask_item_head}>
            <div>dove posso guardare netflix ?</div>
            <div className="icon">x</div>
          </div>
          <div className={styles.ask_item_body}>
            <p>
              Netflix è un servizio di streaming che offre una varietà di serie
              TV, film, documentari pluripremiati e tanto altro su una vasta
              gamma di dispositivi connessi a Internet. Guarda quello che vuoi,
              in qualsiasi momento e senza interruzioni pubblicitarie. Il tutto
              a una quota mensile ridotta. C'è sempre qualcosa di nuovo da
              scoprire: aggiungiamo nuovi film e serie TV ogni settimana!
            </p>
          </div>
        </div>
        <div className={styles.ask_item}>
          <div className={styles.ask_item_head}>
            <div className="ask-btn">Cos'e Netflix?</div>
            <div className="icon">x</div>
          </div>
          <div className={styles.ask_item_body}>
            <p>
              Netflix è un servizio di streaming che offre una varietà di serie
              TV, film, documentari pluripremiati e tanto altro su una vasta
              gamma di dispositivi connessi a Internet. Guarda quello che vuoi,
              in qualsiasi momento e senza interruzioni pubblicitarie. Il tutto
              a una quota mensile ridotta. C'è sempre qualcosa di nuovo da
              scoprire: aggiungiamo nuovi film e serie TV ogni settimana!
            </p>
          </div>
        </div>
        <div className={styles.ask_item}>
          <div className={styles.ask_item_head}>
            <div className="ask-btn">quanto costa netflix ? </div>
            <div className="icon">x</div>
          </div>
          <div className={styles.ask_item_body}>
            <p>
              Netflix è un servizio di streaming che offre una varietà di serie
              TV, film, documentari pluripremiati e tanto altro su una vasta
              gamma di dispositivi connessi a Internet. Guarda quello che vuoi,
              in qualsiasi momento e senza interruzioni pubblicitarie. Il tutto
              a una quota mensile ridotta. C'è sempre qualcosa di nuovo da
              scoprire: aggiungiamo nuovi film e serie TV ogni settimana!
            </p>
          </div>
        </div>
        <div className={styles.ask_item}>
          <div className={styles.ask_item_head}>
            <div className="ask-btn">come posso guardare su netflix?</div>
            <div className="icon">x</div>
          </div>
          <div className={styles.ask_item_body}>
            <p>
              Netflix è un servizio di streaming che offre una varietà di serie
              TV, film, documentari pluripremiati e tanto altro su una vasta
              gamma di dispositivi connessi a Internet. Guarda quello che vuoi,
              in qualsiasi momento e senza interruzioni pubblicitarie. Il tutto
              a una quota mensile ridotta. C'è sempre qualcosa di nuovo da
              scoprire: aggiungiamo nuovi film e serie TV ogni settimana!
            </p>
          </div>
        </div>
        <div className={styles.ask_item}>
          <div className={styles.ask_item_head}>
            <div className="ask-btn">come posso disdire ?</div>
            <div className="icon">x</div>
          </div>
          <div className={styles.ask_item_body}>
            <p>
              Netflix è un servizio di streaming che offre una varietà di serie
              TV, film, documentari pluripremiati e tanto altro su una vasta
              gamma di dispositivi connessi a Internet. Guarda quello che vuoi,
              in qualsiasi momento e senza interruzioni pubblicitarie. Il tutto
              a una quota mensile ridotta. C'è sempre qualcosa di nuovo da
              scoprire: aggiungiamo nuovi film e serie TV ogni settimana!
            </p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <p className={styles.contact}>Domande? Chiama 800-130-364</p>
        <div className={styles.footer_cols}>
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
        <select name="lang" id="" className={styles.select}>
          <option value="">Italiano</option>
          <option value="">Inglese</option>
        </select>
      </footer>
    </div>
  );
}
