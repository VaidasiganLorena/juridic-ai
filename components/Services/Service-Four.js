"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import Sal from "sal.js"
import ServiceData from "../../data/serviceStyle.json"
import "./Service-Style.css"

const ServiceFour = () => {
  useEffect(() => {
    Sal()
  }, [])
  return (
    <>
      {ServiceData &&
        ServiceData.serviceFour.map((data, index) => (
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12 sal-animate"
            data-sal="slide-up"
            data-sal-duration="700"
            key={index}
          >
            <div className="rainbow-container service-four">
              <div
                className="service service__style--1 aiwave-style text-center"
                style={{
                  borderRadius: "1em",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {/* <div
                  className="icon"
                  style={{
                    width: "fit-content",
                  }}
                >
                  <Image
                    src={data.img}
                    width={80}
                    height={80}
                    style={{ padding: 15 }}
                    alt="Service Image"
                  />
                </div> */}
                <div className="content mt--30">
                  <h5 className="title w-600">{data.title}</h5>
                  <p className="description b1 mb--0">{data.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default ServiceFour
