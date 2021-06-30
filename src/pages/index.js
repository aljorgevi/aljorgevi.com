import React from "react"
import About from "../components/About"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"
import SkillSet from "../components/SkillSet"
import Experience from "../components/Experiencie"
import Connect from "../components/Connect"
import Seo from "../components/Seo"
import { featuredProjects } from "../queries/ContentfulProjects"

export default function Home() {
  console.log(featuredProjects)
  return (
    <React.Fragment>
      <Seo />
      <Header />
      <Layout>
        <Portfolio featured />
        <About />
        <SkillSet />
        <Experience />
        <Connect />
      </Layout>
    </React.Fragment>
  )
}
