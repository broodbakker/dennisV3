
import React, { FunctionComponent } from 'react'
import Head from 'next/head';

type LayoutProps = {
  title: string
}

export const Layout: FunctionComponent<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:description" content="Dennis Stassen Enthousiast Econoom & Leergierige Leraar Ben je ook benieuwd welke lessen jij kunt trekken uit de praktijk van een economiedocent?
        Hier deel ik mijn ideeën over goed lesgeven en mijn passie voor economie.
Ik ben ervan overtuigd dat veel inzichten vanuit het klaslokaal toepasbaar in alle situaties waar je mensen wil boeien, enthousiasmeren of overtuigen!" />

        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      {children}
    </>
  )

}