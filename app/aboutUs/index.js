"use client"

import React from "react"
import Context from "@/context/Context"

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop"
import Header from "@/components/Header/Header"
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu"
import Footer from "@/components/Footers/Footer"
import Copyright from "@/components/Footers/Copyright"
import Breadcrumb from "@/components/Common/Breadcrumb"
import Utilize from "@/components/Utilize/Utilize"
import BackToTop from "../backToTop"

const UtilizePage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb title="Despre noi" text="Despre noi" />

          <Utilize />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  )
}

export default UtilizePage
