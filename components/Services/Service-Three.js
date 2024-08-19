"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import Sal from "sal.js"
import ServiceData from "../../data/serviceStyle.json"

const ServiceThree = () => {
  useEffect(() => {
    Sal()
  }, [])
  return (
    <>
      {ServiceData &&
        ServiceData.serviceThree.map((data, index) => (
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12 sal-animate"
            data-sal="slide-up"
            data-sal-duration="700"
            key={index}
          >
            <div
              className="service service__style--1 aiwave-style text-center"
              style={{
                background: "#35316f29",
                borderRadius: "1em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                padding: "3rem",
              }}
            >
              <div
                className="icon"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #0d0a1e, #332a53)",
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
              </div>
              <div className="content">
                <h4 className="title w-600">{data.title}</h4>
                <p className="description b1 mb--0">{data.desc}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default ServiceThree
