import { useState } from 'react'
import AddSubForm from './AddSubForm'
import { Col, Row } from 'react-bootstrap'


function AddSubPage({  }: AddSubPageProps) {


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