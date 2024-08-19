import React, { useEffect, useState } from "react"
import Image from "next/image"
import Sal from "sal.js"
import ShapeImg from "../../public/images/cta-img/bg-shape-01.png"
import usePostSubscribe from "../../api/usePostSubscribe"
import { useAppContext } from "@/context/Context"
import "./Cta-One.css"

const CtaOne = () => {
  const { isLightTheme } = useAppContext()
  const [messageSucces, setMessageSucces] = useState("")
  const [messageError, setMessageError] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  })
  const [errorsFields, setErrorsFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const successCallBack = (data) => {
    setMessageSucces(data.response)
    setTimeout(() => setMessageSucces(""), 10000)
    setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "" })
  }

  const errorCallBack = (error) => {
    setMessageError(error.message)
  }

  const { postSubscribe, isLoading } = usePostSubscribe(
    successCallBack,
    errorCallBack
  )

  const validateForm = () => {
    const { email, firstName, lastName, phoneNumber } = formData
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const phoneRegex =
      /^(?:\+40[-\s]?|0)[1-9][0-9]{2}[-\s]?[0-9]{3}[-\s]?[0-9]{3}$/

    const errors = {}

    if (!emailRegex.test(email)) {
      errors.email = "Email invalid."
    }

    if (lastName.length <= 2) {
      errors.lastName = "Numele trebuie să aibă mai mult de 2 caractere."
    }
    if (firstName.length <= 2) {
      errors.firstName = "Prenumele trebuie să aibă mai mult de 2 caractere."
    }

    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
      errors.phoneNumber = "Numărul de telefon este invalid."
    }
    setErrorsFields({ ...errors })

    if (Object.keys(errors).length > 0) {
      return false
    } else return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessageSucces("")
    setMessageError("")

    if (validateForm()) postSubscribe(formData)
  }

  useEffect(() => {
    Sal()
  }, [])

  useEffect(() => {
    if (messageError) {
      setMessageError("")
    }
  }, [formData.email])

  return (
    <>
      <div className="row row--0 align-items-center content-wrapper">
        <div className="col-lg-12">
          <div className="inner">
            <div className="content text-left">
              <h4
                className="title sal-animate"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="200"
              >
                Alătură-te comunității noastre JuridicAI
              </h4>
              <p
                className="sal-animate"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="300"
              >
                Nu mai aștepta, înscrie-te acum pe lista de așteptare și
                primești beneficii exclusive la lansare!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <form className="form-subscribe" onSubmit={handleSubmit}>
            <div className="wrapper-input-form">
              <label className="input-form">
                Nume*
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    borderRadius: 5,
                    borderColor: errorsFields.lastName ? "red" : "#ffffff38",
                    color: "white",
                  }}
                />
                <p
                  style={{
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errorsFields.lastName}
                </p>
              </label>
              <label className="input-form">
                Prenume*
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    borderRadius: 5,
                    borderColor: errorsFields.firstName ? "red" : "#ffffff38",
                    color: "white",
                  }}
                />
                <p
                  style={{
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errorsFields.firstName}
                </p>
              </label>
            </div>
            <div className="wrapper-input-form">
              <label className="input-form">
                Email*
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    borderRadius: 5,
                    borderColor: errorsFields.email ? "red" : "#ffffff38",
                    color: "white",
                  }}
                />
                <p
                  style={{
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errorsFields.email}
                </p>
              </label>
              <label className="input-form">
                Număr de telefon
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  style={{
                    borderRadius: 5,
                    borderColor: errorsFields.phoneNumber ? "red" : "#ffffff38",
                    color: "white",
                  }}
                />
                <p
                  style={{
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  {errorsFields.phoneNumber}
                </p>
              </label>
            </div>

            <button
              type="submit"
              className="btn-default"
              style={{
                letterSpacing: "normal",
                margin: "2rem 2rem 0 0",
              }}
              disabled={isLoading}
            >
              {isLoading ? "Se încarcă..." : " Înscrie-te acum!"}
            </button>

            <div className="wrapper-form-messages">
              {messageError && (
                <p
                  className="message-error"
                  style={{
                    color: "red",
                  }}
                >
                  {messageError}
                </p>
              )}
              {messageSucces.length !== 0 && (
                <p
                  className="message-succes"
                  style={{
                    color: "#198754",
                  }}
                >
                  {messageSucces}
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="bg-shape-subscribe">
          <Image src={ShapeImg} width={353} height={203} alt="BG Shape" />
        </div>
      </div>
    </>
  )
}

export default CtaOne
