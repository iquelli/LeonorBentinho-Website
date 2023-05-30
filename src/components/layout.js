/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "./header"
import Hero from "./hero"
import { GlobalStyle } from "./styles/global-styles"

const Layout = ({ children }) => {

  return (
    <>
    <GlobalStyle />
      <Header />
      <Hero />
        <main>{children}</main>
    </>
  )
}

export default Layout
