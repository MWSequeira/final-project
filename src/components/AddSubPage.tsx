import AddSubForm from './AddSubForm'

type AddSubPageProps = {
  GetAllPlayers: () => void
}


function AddSubPage({ GetAllPlayers }: AddSubPageProps) {
  return (
    <div className='addSubPage'>
        <h1>Add a Sub</h1>
        <AddSubForm />
        <GetAllPlayers />
    </div>
  )
}

export default AddSubPage