import Image from "next/image"
import React from "react"
import "./UtilizeStyle.css"

const UtilizeBody = ({}) => {
  return (
    <>
      <div className="single-inner-box">
        <h3 className="section-title text-center">
          Cine se află în spatele <b> JuridicAI </b>?
        </h3>

        <div className="rbt-elements-area rbt-shadow-box">
          <div className="wrapper">
            <h4 className="title-sm">Faceți cunoștință cu echipa evosa</h4>
            <div className="desc">
              <div className="image">
                <div className="card-container">
                  <div className="card">
                    <Image
                      src={"/images/sv.png"}
                      width={280}
                      height={617}
                      alt=""
                    />
                    <div class="info">
                      <p className="p1"> Silviu</p>
                      <p className="p2"> MANAGING PARTNER</p>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      src={"/images/am.png"}
                      width={280}
                      height={617}
                      alt=""
                    />
                    <div class="info">
                      <p className="p1">Anca</p>
                      <p className="p2"> MANAGING PARTNER</p>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      className="card"
                      src={"/images/lv.png"}
                      width={280}
                      height={617}
                      alt=""
                    />
                    <div class="info">
                      <p className="p1">Lorena</p>
                      <p className="p2">JUNIOR FRONTEND DEVELOPER</p>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      className="card"
                      src={"/images/cl.png"}
                      width={280}
                      height={617}
                      alt=""
                    />
                    <div class="info">
                      <p className="p1">Călin</p>
                      <p className="p2">FRONTEND DEVELOPER</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="b1">
                Evosa este creatorul <b> JuridicAI </b>, noi suntem o firmă de
                dezvoltare software cu o viziune clară. Să dezvoltăm viitorul
                digital al afacerii tale cu experiență și inovație la fiecare
                pas personalizate și eficiente, adaptate nevoilor tale
                specifice.
              </p>
              <p className="b1">
                {" "}
                La evosa, suntem dedicați să revoluționăm domeniul juridic prin
                tehnologie. Ne mândrim cu crearea <b> JuridicAI </b>, un avocat
                virtual inovator care simplifică și eficientizează procesele
                juridice. Echipa noastră, formată din experți în tehnologie , se
                străduiește să ofere soluții personalizate.
              </p>
            </div>
          </div>
        </div>
        <div className="rbt-elements-area rbt-shadow-box">
          <div className="wrapper">
            <div className="desc">
              <h4>
                De ce am creat <b> JuridicAI </b>?
              </h4>
              <p className="b1">
                Evosa a creat <b> JuridicAI </b>
                dintr-o necesitate personală. În căutarea unui nou sediu pentru
                echipa noastră, ne-am confruntat cu clauze complicate în
                contractul de închiriere al actualului sediu. Găsirea unui
                avocat disponibil pentru a ne ajuta rapid a fost o provocare,
                consumându-ne mult timp și energie.
              </p>
              <p className="b1">
                Această experiență ne-a arătat cât de dificil poate fi accesul
                la asistență juridică promptă și eficientă. Am realizat că multe
                alte persoane și afaceri se confruntă cu provocări similare.
                Astfel, ne-am propus să creăm o soluție care să simplifice și să
                eficientizeze procesele juridice.
              </p>
              <p className="b1">
                <b> JuridicAI </b> este avocatul virtual care oferă consultanță
                juridică instantanee și automatizează documentele, economisind
                timp și resurse. Folosind inteligența artificială,{" "}
                <b> JuridicAI </b> răspunde la întrebări juridice, creează
                contracte și evaluează procese, oferindu-ți siguranța că
                aspectele juridice sunt gestionate eficient.
              </p>
              <p className="b1">
                La evosa, transformăm provocările în oportunități și ne dedicăm
                să facem viața mai ușoară prin tehnologie inovatoare. Alege
                <b> JuridicAI </b>
                pentru a simplifica și eficientiza procesele juridice ale
                afacerii tale!
              </p>
            </div>
          </div>
        </div>
        <div className="rbt-elements-area rbt-shadow-box">
          <div className="wrapper">
            <div className="desc">
              <h4>Contactează evosa</h4>

              <p className="b1">
                Vei descoperi cum transformăm ideile în realitate digitală și
                cum putem ajuta afacerea ta să evolueze în era digitală. Pentru
                a afla mai multe despre evosa și gama noastră completă de
                soluții tehnologice, te invităm să explorezi restul paginii
                noastre,{" "}
                <a href="https://evosa.ro/" style={{ color: "#805AF5" }}>
                  evosa.ro
                </a>
              </p>
              <h6></h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UtilizeBody
