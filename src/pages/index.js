import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A cozy, warmly sunlit room"
        src="../images/Welcome.webp"
      />
    </Layout>
  )
}

export function Head() {
  return (
    <title>Home Page</title>
  )
}