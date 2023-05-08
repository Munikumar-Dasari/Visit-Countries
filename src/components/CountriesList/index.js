import './index.css'

const CountriesList = props => {
  const {countryDetails, onClickVisit} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisitButton = () => {
    onClickVisit(id)
  }

  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button type="button" className="button" onClick={onClickVisitButton}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
