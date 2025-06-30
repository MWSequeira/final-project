import { useState } from 'react'
import AddSubForm from './AddSubForm'
import { Col, Row } from 'react-bootstrap'

type AddSubPageProps = {
  GetAllPlayers: () => void
}


function AddSubPage({ GetAllPlayers }: AddSubPageProps) {
  const [allPlayers, setAllPlayers] = useState<[PlayerType]>([])

  {/* AddNewPlayers instead of GetAllPlayers and make it render all players */}

  return (
    <div className='addSubPage'>
        <Row>
          <h1>Add a Sub</h1>
        </Row>
        <Row>
          <Col>
          <AddSubForm 
            allPlayers={allPlayers}
            setAllPlayers={setAllPlayers}/>
          </Col>
          <Col>
            <GetAllPlayers 
              allPlayers={allPlayers}
              setAllPlayers={setAllPlayers} />
          </Col>
        </Row>
    </div>
  )
}

export default AddSubPage