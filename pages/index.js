import Head from 'next/head'
import styled, { injectGlobal } from 'styled-components'

import ZigZag from '../assets/zigzag.js'

const Header = styled.div`
  width: 100vw;
  height: 80vh;
  background: #FBF9F3;
  padding: 100px;
  box-sizing: border-box;
  position: relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  h1 {
    color: #030C24;
    font-size: 118px;
  }
`

const ZigZagContainer = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;

  svg {
    width: 100%;
    position: absolute;
    bottom: -30px;
    left: 0;
  }
`

const Currently = styled.div`
  width: 100vw;
  padding: 100px;
  background: #0E204E;
  color: #FBF9F4;
`

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,500');

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
      <ZigZagContainer>
        <ZigZag />
      </ZigZagContainer>
    </Header>
    <Currently>
      stuff
    </Currently>
  </div>
)
