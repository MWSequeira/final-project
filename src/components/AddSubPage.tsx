import AddSubForm from './AddSubForm'
import { Col, Row } from 'react-bootstrap'

type AddSubPageProps = {
  gameSched: Array<GameType>,
  GamesListPage: () => void,
  GetAllPlayers: () => void
}


function AddSubPage({ gameSched, GamesListPage, GetAllPlayers }: AddSubPageProps) {
  return (
    <div className='addSubPage'>
        <Row>
          <h1>Add a Sub</h1>
        </Row>
        <Row>
          <Col>
          <AddSubForm />
          </Col>
          <Col>
            <GetAllPlayers />
          </Col>
        </Row>
    </div>
  )
}

export default AddSubPage