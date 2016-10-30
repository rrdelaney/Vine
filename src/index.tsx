import 'css-modules-electron/register'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { List } from 'react-virtualized'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

class Vine extends React.Component<{index: number}, {}> {
  componentDidMount() {
    console.log('O_O')
  }

  componentWillUnmount() {
    console.log('o_o')
  }

  render() {
    return <Card>
      <Image src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
      <Card.Content>
        <Card.Header>
          {this.props.index + 1}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            Joined in 2015
          </span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  }
}

class App extends React.Component<{}, {}> {
  rowRender({ index }) {
    return <Vine key={index} index={index}/>
  }

  render() {
    // return <h1>Hello Electron!</h1>
    return <List overscanRowCount={10} width={300} height={window.innerHeight} rowCount={100} rowHeight={425} rowRenderer={this.rowRender} />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))