import React from 'react'
import Layout from '../components/layout'

export default function AboutPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export function Head() {
    return (
        <>
            <title>About Me</title>
            <meta name="description" content="Describes the website author" />
        </>
    )
}