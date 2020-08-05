import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <section className={styles.page}>
        {products.map((theProduct) => {
          return (
            <article key={theProduct.id}>
              <Image fluid={theProduct.image.fluid} alt="product title"></Image>
              <h3>
                {theProduct.title} <span>${theProduct.price}</span>
              </h3>
              <Link to={`/products/${theProduct.slug}`}>More Details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        id
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
export default ComponentName
