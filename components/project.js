import styled from 'styled-components'

const Container = styled.div`
  width: 45vw;
  margin-top: 20px;
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }

  p {
    margin: 0;
    padding: 0;
    margin-top: 10px;
    line-height: 150%;
    font-size: 16px;
  }
`

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  h3 {
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: normal;
  }
`

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`

const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:nth-of-type(1) { width: calc(20% - 8px); }
  &:nth-of-type(2) { width: calc(50% - 8px); }
  &:nth-of-type(3) { width: calc(30%); }

  span { font-size: 16px; }
`

const ProgressBar = styled.div`
  background-color: #3C4866;
  border-radius: 2px;
  height: 14px;
  width: 100%;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;

  > div {
    height: 14px;
    border-radius: 2px;
    background-color: #25E9F5;
    position: absolute;
    left: 0;
    top: 0;
  }
`

const Link = styled.a`
  text-decoration: none;
  margin-left: 20px;
  font-size: 16px;
  color: #FBF9F4;
  opacity: 1;
  transition: all 0.2s ease;

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.75;
  }
`

export default (props) => (
  <Container>
    <TitleRow>
      <h3>{props.title}</h3>
      {props.summary ? null
        : <div>
          <Link
            disabled={!props.airtable}
            href={props.airtable || ''}
          >Airtable</Link>
          <Link
            disabled={!props.figma}
            href={props.figma || ''}
          >Figma</Link>
          <Link
            disabled={!props.zeplin}
            href={props.zeplin || ''}
          >Zeplin</Link>
          <Link
            disabled={!props.github}
            href={props.github || ''}
          >Github</Link>
        </div>
      }
    </TitleRow>

    { props.summary
      ? <p>
        {props.summary}
      </p>
      : <ProgressContainer>
        <ProgressSection>
          <ProgressBar>
            <div style={{ width: `${props.progress.research || 0}%` }} />
          </ProgressBar>
          <span>Research</span>
        </ProgressSection>
        <ProgressSection>
          <ProgressBar>
            <div style={{ width: `${props.progress.production || 0}%` }} />
          </ProgressBar>
          <span>Production + feedback</span>
        </ProgressSection>
        <ProgressSection>
          <ProgressBar>
            <div style={{ width: `${props.progress.development || 0}%` }} />
          </ProgressBar>
          <span>Dev support</span>
        </ProgressSection>
      </ProgressContainer>
    }
  </Container>
)
