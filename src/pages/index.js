import React from 'react'
import Layout from '../components/layout'

export default function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export function Head() {
  return (
    <title>Home Page</title>
  )
}