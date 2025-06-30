import AddSubForm from './AddSubForm'
import { Col, Container, Row } from 'react-bootstrap'

type AddSubPageProps = {
  GamesList: () => void,
  GetAllPlayers: () => void
}


function AddSubPage({ GamesList, GetAllPlayers }: AddSubPageProps) {
  return (
    <div className='addSubPage'>
      <Container>
        <Row>
          <h1>Add a Sub</h1>
        </Row>
        <Row>
          <Col>
          <AddSubForm 
              GamesList={GamesList}/>

          </Col>
          <Col>
            <GetAllPlayers />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AddSubPage