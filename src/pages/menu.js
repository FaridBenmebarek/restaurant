import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"
export default function about() {
  return (
    <Layout>
      <SEO title="Menu" />
      <PageHeader img={img}>
        <Banner title="nos menu" subtitle={`Découvrez nos plats`} />
      </PageHeader>
    </Layout>
  )
}
