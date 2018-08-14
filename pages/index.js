import Head from 'next/head'
import styled, { injectGlobal } from 'styled-components'

const Header = styled.div`
  width: 100vw;
  height: 80vh;
  background: #FBF9F3;
  padding: 100px;
  box-sizing: border-box;

  h1 {
    color: #030C24;
    font-size: 118px;
  }
`

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background: #030C24;
    font-family: 'Work Sans', monospace;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }
`

export default () => (
  <div>
    <Head>
      <title>Wait, what's the designer doing?</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
    </Head>
    <Header>
      <h1>
        Wait, what's the designer doing?
      </h1>
    </Header>
  </div>
)
