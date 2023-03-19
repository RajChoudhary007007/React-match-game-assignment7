import './index.css'

const TabList = props => {
  const {tabDetails, isActive, updatedActiveTab} = props
  const {tabId, displayText} = tabDetails
  const activeClassName = isActive ? 'active-tab-btn' : ''

  const updateTabId = () => {
    updatedActiveTab(tabId)
  }

  return (
    <li className="tab-container">
      <button
        className={`tab-btn ${activeClassName}`}
        type="button"
        onClick={updateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabList
