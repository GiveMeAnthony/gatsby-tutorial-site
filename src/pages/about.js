import React from 'react'
import { Link } from 'gatsby'

export default function AboutPage() {
  return (
    <main>
        <h1>About Me</h1>
        <Link to="/">Back to Home</Link>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
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