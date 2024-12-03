import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails

  // Set the URL for the star image based on whether the appointment is starred
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id) // Toggle star state when clicked
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          type="button"
          data-testid="star" // Ensure test id is 'star'
          className="star-button"
          onClick={onClickStar}
        >
          <img src={starImgUrl} className="star" alt="star" />{' '}
          {/* Render correct star image */}
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
