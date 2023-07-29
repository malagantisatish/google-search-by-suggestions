// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestions, onClickOnArrow} = props
  const {id, suggestion} = suggestions

  const clickedOnArrow = () => {
    onClickOnArrow(suggestion)
  }

  return (
    <li className="suggestions-container">
      <p className="suggestion">{suggestion}</p>
      <img
        onClick={clickedOnArrow}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-img"
      />
    </li>
  )
}

export default SuggestionItem
