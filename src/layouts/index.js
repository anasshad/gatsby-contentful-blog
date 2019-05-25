import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import LayoutStyles from "./index.module.css"

export default props => (
  <div className={LayoutStyles.container}>
    <div className={LayoutStyles.content}>
      <Header />
      {props.children}
    </div>
    <Footer />
  </div>
)
