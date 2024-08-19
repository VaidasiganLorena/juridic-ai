"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Sal from "sal.js"
import shapeOne from "../../public/images/bg/icon-shape/icon-shape-one.png"
import shapeTwo from "../../public/images/bg/icon-shape/icon-shape-two.png"
import shapeThree from "../../public/images/bg/icon-shape/icon-shape-three.png"
import shapeFour from "../../public/images/bg/icon-shape/icon-shape-four.png"
import bgShape from "../../public/images/bg/split-bg-shape.png"
import bgShapeOne from "../../public/images/bg/bg-shape-four.png"
import bgShapeTwo from "../../public/images/bg/bg-shape-five.png"
import TabStyleOne from "../TabStyles/TabStyle-One"
import AdvanceTab from "../TabStyles/AdvanceTab"
import CtaOne from "../CallToActions/Cta-One"
import ServiceTwo from "../Services/Service-Two"
import ServiceFour from "../Services/Service-Four"
import { useAppContext } from "@/context/Context"
import AccordionItem from "../Accordion/AccordionItem"
import ServiceThree from "../Services/Service-Three"

const Home = () => {
  const { isLightTheme } = useAppContext()
  const [visibleIndex, setVisibleIndex] = useState(0)

  useEffect(() => {
    Sal()

    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 2000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--140">
                <h1 className="title display-one">
                  Fiecare decizie contează!
                  <br />{" "}
                  <span
                    className="header-caption"
                    style={{ marginRight: "calc(100vw / 6 )" }}
                  >
                    <span className="cd-headline rotate-1">
                      <span className="cd-words-wrapper">
                        <b
                          className={
                            visibleIndex === 0
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Consultanță Juridică
                        </b>
                        <b
                          className={
                            visibleIndex === 1
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Evaluare Contracte
                        </b>
                        <b
                          className={
                            visibleIndex === 2
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Revizuire Documente
                        </b>
                      </span>
                    </span>
                  </span>{" "}
                  <br></br>
                  cu JuridicAI
                </h1>
                <p className="description">
                  Asistentul tău digital pentru decizii legale rapide. <br />{" "}
                  Fii întotdeauna bine informat înainte de a semna.
                </p>
                <div className="form-group">
                  <textarea
                    defaultValue={
                      "Lansăm în curând aplicația noastră AI pentru răspunsuri legale! Fii printre primii care o testează și înscrie-te pe  lista de așteptare pentru acces prioritar și beneficii exclusive. Înscrie-te acum!"
                    }
                    style={{ minHeight: "125px" }}
                    name="text"
                    id="slider-text-area"
                    cols="30"
                    rows="2"
                    placeholder="Încarcă documentul, analizează rapid și semnează cu încredere. Simplu și sigur!"
                  ></textarea>
                  <Link className="btn-default " href="#container-subscribe">
                    Experimentează cu Juridic AI
                  </Link>
                </div>
                <div className="inner-shape">
                  <Image
                    src={shapeOne}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-one"
                  />
                  <Image
                    src={shapeTwo}
                    width={60}
                    height={57}
                    alt="Icon Shape"
                    className="iconshape iconshape-two"
                  />
                  <Image
                    src={shapeThree}
                    width={42}
                    height={31}
                    alt="Icon Shape"
                    className="iconshape iconshape-three"
                  />
                  <Image
                    src={shapeFour}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-four"
                  />
                </div>
              </div>
            </div>
            {/* Image from app */}
            {/* <div className="col-lg-11 col-xl-11 justify-content-center">
              <div className="slider-frame">
                <Image
                  className="slider-image-effect"
                  src={isLightTheme ? bannerImg : bannerWhiteImg}
                  width={1055}
                  height={898}
                  alt="Banner Images"
                />
              </div>
            </div> */}
          </div>
        </div>

        <div className="bg-shape">
          <Image
            className="bg-shape-one"
            width={640}
            height={949}
            src={bgShapeOne}
            alt="Bg Shape"
          />
          <Image
            className="bg-shape-two"
            src={bgShapeTwo}
            width={626}
            height={1004}
            alt="Bg Shape"
          />
        </div>
      </div>

      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <p className="b1 mb--0 small-title">
                  truest 800,000+ HIGHLY PRODUCTIVE Company
                </p>
              </div> */}
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12 mt--10">
              <BrandList />
            </div>
          </div> */}
        </div>
      </div>

      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center pb--60"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Funcționalități Cheie</span>
                </h4>
                <h2 className="title mb--0">
                  Juridic AI deschide noi <br /> orizonturi.
                </h2>
              </div>
            </div>
          </div>
          <TabStyleOne />
        </div>
      </div>
      <div className="rainbow-collobration-area rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">Utilizatori</span>
                </h4>
                <h2 className="title mb--20">
                  Pentru cine este
                  <br /> JuridicAI?
                </h2>
                <div className="aiwave-service-area rainbow-section-gap">
                  <div className="container">
                    <div
                      className="row row--15 service-wrapper"
                      style={{ rowGap: "30px" }}
                    >
                      <ServiceTwo />
                    </div>
                  </div>
                </div>
                {/* <Link
                  className="btn-default btn-large color-blacked"
                  href="/contact"
                >
                  Try It Now{" "}
                  <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                </Link> */}
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12 mt--60">
              <div className="collabration-image-section">
                <Image
                  src={isLightTheme ? SplitImg : DarkSplitImg}
                  width={1305}
                  height={712}
                  alt="collabration-image"
                />
                <div className="logo-section">
                  <div className="center-logo">
                    <Image
                      src={isLightTheme ? SplitLogo : DarkSplitLogo}
                      width={104}
                      height={143}
                      alt="Small Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="rainbow-advance-tab-area aiwave-bg-gradient rainbow-section-gap-big">
        <div className="container">
          <div className="html-tabs" data-tabs="true">
            <AdvanceTab />
          </div>
        </div>
        <div className="bg-shape">
          <Image src={bgShape} width={630} height={879} alt="Bg Shape" />
        </div>
      </div>

      <div className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big mt--120">
        <div className="container">
          <div className="row" style={{ rowGap: "18px" }}>
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Avantaje</span>
                </h4>
                <h2 className="title mb--60">
                  De ce sa folosești <br />
                  JuridicAI?
                </h2>
              </div>
            </div>
            <ServiceThree />
          </div>
        </div>
      </div>
      <div className="rainbow-accordion-area rainbow-section-gap mb--120 mt--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4
                  className="subtitle"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <span className="theme-gradient text-center">FAQ</span>
                </h4>
                <h2 className="title text-center">
                  Ai nevoie de mai multe
                  <br /> informații?
                </h2>
              </div>
            </div>
          </div>{" "}
          <AccordionItem />
        </div>
      </div>

      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big ">
          <div className="container">
            <div className="row mt--60" style={{ rowGap: "18px" }}>
              <div className="col-lg-12">
                <div
                  className="section-title text-left"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="150"
                >
                  <h4
                    className="subtitle"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span className="theme-gradient">
                      Ghid pentru utilizare
                    </span>
                  </h4>
                  <h2 className="title mb--60 text-center">
                    Câteva cazuri și scenarii <br />
                    de utilizare
                  </h2>
                </div>
              </div>
              <ServiceFour />
            </div>
          </div>
        </div>
      </div>

      <div className="rainbow-rn-cta mt--120 mb--120" id="container-subscribe">
        <div className="container" style={{ marginBottom: "6rem" }}>
          <div
            className="section-title text-left"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="150"
          >
            <h4
              className="subtitle"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span className="theme-gradient">Comunitatea JuridicAI</span>
            </h4>
            <h2 className="title mb--60 text-center">
              Fii primul care află <br />
              noutățiile
            </h2>
          </div>
          <CtaOne />
        </div>
      </div>

      {/* <div className="aiwave-pricing-area wrapper rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Prețuri</span>
                </h4>
                <h2 className="title w-600 mb--40">
                  Planuri de preț pentru toată lumea
                </h2>
              </div>

              <nav className="aiwave-tab">
                <div
                  className="tab-btn-grp nav nav-tabs text-center justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  {PricingData &&
                    PricingData.pricing.map((data, index) => (
                      <button
                        className={`nav-link ${data.isSelect ? "active" : ""}`}
                        id={`${data.priceId}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${data.priceId}`}
                        type="button"
                        role="tab"
                        aria-controls={data.priceId}
                        aria-selected="false"
                        key={index}
                      >
                        {data.priceType}{" "}
                        {data.discount ? (
                          <span className="rainbow-badge-card badge-border">
                            -{data.discount}%
                          </span>
                        ) : (
                          ""
                        )}
                      </button>
                    ))}
                </div>
              </nav>
            </div>
          </div>

          <Pricing
            parentClass="col-xl-4 col-lg-6 col-md-6 col-12 mt--40"
            start={0}
            end={3}
            isBadge={true}
            gap="mt_dec--40"
          />
        </div>
      </div> */}

      {/* <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <div className="rating">
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                </div>
                <p className="subtitle mb--0">Based on 20,000+ reviews on</p>
              </div>
            </div>
          </div>
          <BrandTwo />
          <div className="bg-shape-left">
            <Image
              src={bgShapeThree}
              width={688}
              height={1055}
              alt="Bg shape"
            />
          </div>
        </div>
      </div> */}

      {/* <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <CtaTwo />
        </div>
      </div> */}
    </>
  )
}

export default Home
