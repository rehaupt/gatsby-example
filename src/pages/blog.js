import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h2>this is our blog page</h2>
        <p className={styles.text}>
          Duis aliquet enim quis lectus vestibulum, scelerisque rutrum massa
          faucibus. Aenean consectetur sapien a dui imperdiet ultricies. Fusce
          congue dignissim purus a eleifend. Vivamus vitae odio sit amet diam
          elementum bibendum. Aliquam viverra vestibulum quam eu consequat. Duis
          eu faucibus dolor. Etiam sed rhoncus sapien, at condimentum urna.
          Praesent augue velit, gravida quis lectus sed, varius convallis
          ligula. Sed tempor orci nisi. Aliquam pretium auctor vehicula.
          Vestibulum vitae vehicula ante.
        </p>
      </div>
    </Layout>
  )
}

export default blog
