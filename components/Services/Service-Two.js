"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { useAppContext } from "@/context/Context"
import Sal from "sal.js"
import "./Service-Style.css"

import ServiceData from "../../data/serviceStyle.json"

const ServiceTwo = () => {
  useEffect(() => {
    Sal()
  }, [])
  const { isLightTheme } = useAppContext()
  return (
    <>
      {ServiceData &&
        ServiceData.serviceTwo.map((data, index) => (
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12 sal-animate"
            data-sal="slide-up"
            data-sal-duration="700"
            key={index}
          >
            <div className="rainbow-container light">
              <div
                className="service service__style--1 aiwave-style text-center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <div
                  className="icon"
                  style={{
                    background: isLightTheme ? "#29203F" : "#2b2b2b12",
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
          </div>
        ))}
    </>
  )
}

export default ServiceTwo
