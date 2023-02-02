import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: []}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const {initialHistoryList} = this.props

    const filteredData = initialHistoryList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({historyList: filteredData})
  }

  initialHistory() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state

    const searchResults = initialHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-input-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
            </div>
            <div>
              <input
                type="search"
                className="input-text"
                placeholder="search history"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
        </div>
        {searchResults.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="history-container">
            {searchResults.map(eachItem => (
              <HistoryItem
                historyDetails={eachItem}
                key={eachItem.id}
                deleteHistory={this.deleteHistory}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BrowserHistory
