import Head from 'next/head'
import styled, { injectGlobal } from 'styled-components'

import Project from '../components/project'
import ZigZag from '../assets/zigzag'
import APCO from '../assets/apco'

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

const Section = styled.div`
  width: 100vw;
  padding: 100px;
  box-sizing: border-box;
  background: #0E204E;
  color: #FBF9F4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const SectionDescription = styled.div`
  width: 28vw;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 48px;
    font-weight: medium;
  }

  p {
    font-size: 24px;
    line-height: 150%;
  }
`

const Footer = styled.footer`
  padding: 20px 100px;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    opacity: 0.75;
    text-decoration: none;
    transition: all 0.2s ease;
    &:hover {
      opacity: 1;
      svg path { fill: #FBF9F4; }
    }
  }

  svg {
    width: 40px;
    path { transition: all 0.2s ease; }
  }
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
    <Section style={{ borderRadius: '10px' }}>
      <SectionDescription>
        <h2>Right now.</h2>
        <p>This stuff is happening right now. You can walk over to my desk to get the latest work. Or a cute gif.</p>
      </SectionDescription>

      <div>
        <Project
          title={'Tables'}
          progress={{
            research: 100,
            production: 24
          }}
          airtable={'airtable link'}
          figma={'figma link'}
        />

        <Project
          title={'Drilling Spacing Units'}
          progress={{
            research: 100,
            production: 100,
            development: 25
          }}
          airtable={'airtable link'}
          figma={'figma link'}
          zeplin={'airtable link'}
          github={'figma link'}
        />
      </div>
    </Section>
    <Section style={{ backgroundColor: '#040C22' }}>
      <SectionDescription>
        <h2>Up next.</h2>
        <p>This is either on hold for some reason, or I’m getting to it after the current thing. Does this list not look right? DM me (IRL?)</p>
      </SectionDescription>

      <div>
        <Project
          title={'Reports Redux'}
          summary={'This topic covers a redesign of the /reports interface, including something, another thing, and a third thing, all of which we believe will save companies shittons of cash.'}
        />
        <Project
          title={'Index Page KPIs'}
          summary={'Also referred to as Dashboards, these key performance indicators are perfect for anyone that NEEDS TO KNOW RIGHT NOW HOW MANY WELLS THO.'}
        />
      </div>
    </Section>

    <Footer>
      <a
        title='Designed and built by Alex Price'
        href='https://alexprice.co'
      >
        <APCO />
      </a>
    </Footer>
  </div>
)
