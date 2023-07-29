// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  changingOfSeaarchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickOnArrow = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt=" google logo"
        />
        <div className="search-input-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon-img"
              alt="search icon"
            />
            <input
              onChange={this.changingOfSeaarchInput}
              className="search-input"
              type="search"
              placeholder="search google"
              value={searchInput}
            />
          </div>
          <ul>
            {filteredSuggestionList.map(each => (
              <SuggestionItem
                key={each.id}
                onClickOnArrow={this.onClickOnArrow}
                suggestions={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
