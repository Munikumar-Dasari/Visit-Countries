import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, onClickRemoveButton} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onClickRemove = () => {
    onClickRemoveButton(id)
  }

  return (
    <li className="visited-country">
      <img src={imageUrl} alt="thumbnail" className="country-flag" />
      <div className="details-container">
        <p className="name">{name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
