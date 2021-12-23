// Write your code here

import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  console.log(props)
  const {children} = props
  return (
    <div className="notificationItemsCon">
      <div className="notificationItemsCard">
        {children}
        <GrFormClose className="close_icon" />
      </div>
    </div>
  )
}

export default Notification
