import Head from "next/head"
import { Component } from 'react'


export default class Home extends Component {
  render() {

    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <title>Homepage</title>
        </Head>
        <article>

          this is my site

        </article>
      </>
    )
  }
}