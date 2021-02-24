import React from 'react'
import './App.css'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      a_id: '',
      text: '',
      ntext: 'musicbrainzAPI',
      artists: {},
      isLoaded: false,
      count: 0,
      releases: [],
      releases2: [],
      number: 0,
      aid: '83abf2d5-a578-41a7-b51d-ca9a44a00545',
      i: 0,
      k: 0
    }
    this.URI = 'https://musicbrainz.org/ws/2/artist?query='
  }

  fetchMB () {
    const { text } = this.state
    this.setState({ ntext: text })
    this.setState({ releases: [] })
    window
      .fetch(this.URI + text + '&limit=20&offset=0&fmt=json')
      .then(res => res.json())
      .then(json => {
        if (!json.help) {
          console.log(json)
          this.setState({
            artists: json.artists,
            count: json.count
          })
        }
      })
  }

  getReleas (id) {
    window
      .fetch(
        'https://musicbrainz.org/ws/2/artist/' + id + '?inc=releases&fmt=json'
      )
      .then(res => res.json())
      .then(json => {
        this.setState({ releases: json.releases })
      })
  }

  checkArt (id) {
    window
      .fetch('https://musicbrainz.org/ws/2/release/' + id + '?fmt=json')
      .then(res => res.json())
      .then(json => {
        this.setState({ check_cover: json['cover-art-archive']['count'] })
      })
    return this.state.check_cover
  }

  getCoverArt (id) {
    window
      .fetch('https://coverartarchive.org/release/' + id)
      .then(res => res.json())
      .then(json => {
        this.setState({ cover: json.image })
      })
  }

  handleUpdate (event) {
    const text = event.target.value
    this.setState({ text: text })
  }

  render () {
    const { artists, count, releases } = this.state
    return (
      <Container maxWidth='sm'>
        <>
          <h1>'musicbrainzAPI'</h1>
          <Input onChange={this.handleUpdate.bind(this)} />
          <Button
            variant='outlined'
            onClick={() => {
              this.fetchMB()
            }}
          >
            検索
          </Button>
        </>
        <>{count}件</>
        <h2>'{this.state.ntext}'</h2>
        <>
          <Button
            onClick={() => {
              this.getReleas(this.state.aid)
            }}
          >
            作品
          </Button>
          <ul>
            {Object.keys(releases).map(key => (
              <li key={key}>{releases[key]['title']}</li>
            ))}
          </ul>
        </>
        <>
          <ol>
            {Object.keys(artists).map(key => (
              <li key={key}>
                {artists[key]['name']}　　{artists[key]['score']}　　
                {artists[key]['country']}
                <Button
                  color='secondary'
                  onClick={() => {
                    this.setState({ aid: artists[key]['id'] })
                  }}
                >
                  ＜
                </Button>
              </li>
            ))}
          </ol>
          <Button
            onClick={() => {
              this.checkArt('63755230-5085-48f4-b1bc-528c7b61b27e')
            }}
          ></Button>
        </>
        {this.state.check_cover}
      </Container>
    )
  }
}

const Input = props => {
  return <input type='text' onChange={props.onChange} />
}

export default App
