import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"

export default () => (
  <Layout>
    <h1 style={{ color: "green", textTransform: "uppercase" }}>
      hello from my gatsby
    </h1>
    <h2>Hello world</h2>
    <h3>hello dogs</h3>
    <ExampleButton>ClickIt</ExampleButton>
  </Layout>
)
