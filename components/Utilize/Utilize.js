import React from "react"
import Sidebar from "./Sidebar"
import SidebarData from "../../data/sidebar.json"
import UtilizeData from "../../data/utilize.json"
import UtilizeBody from "./UtilizeBody"

const Utilize = () => {
  return (
    <>
      <div className="rbt-utilize-area rainbow-section-gap-big">
        <div className="container">
          <div className="utilize-inner">
            <div className="row g-5">
              <div className="col-lg-12 inner-content pl--0">
                <UtilizeBody utilize={Utilize.aboutUs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Utilize
