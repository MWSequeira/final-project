type AddSubFormProps = {
  GamesList: () => void
}


function AddSubForm( { GamesList }: AddSubFormProps) {
  return (
    <div className='addSubForm'>
        <p>Choose from remaining games, then choose the team.</p>
        <p>Select a Player from the List to add to the subs list for that game</p>
    </div>
  )
}

export default AddSubForm