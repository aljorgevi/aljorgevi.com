import React from "react"
import About from "../components/About"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"
import SkillSet from "../components/SkillSet"
import Experience from "../components/Experiencie"
import Connect from "../components/Connect"
import Seo from "../components/Seo"

export default function Home() {
  return (
    <React.Fragment>
      <Seo />
      <Header />
      <Layout>
        <Portfolio />
        <About />
        <SkillSet />
        <Experience />
        <Connect />
      </Layout>
    </React.Fragment>
  )
}
