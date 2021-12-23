// Write your code here
import {RiErrorWarningFill} from 'react-icons/ri'
import {AiFillCheckCircle} from 'react-icons/ai'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const SuccessNotification = () => (
  <Notification>
    <div className="alert_icon_notification_card">
      <AiFillCheckCircle className="success_icon" />
      <div className="alert_notification_type_card">
        <h1 className="alert_success_head">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </div>
  </Notification>
)

const ErrorNotification = () => (
  <Notification>
    <div className="alert_icon_notification_card">
      <RiErrorWarningFill className="error_icon" />
      <div className="alert_notification_type_card">
        <h1 className="alert_error_head">Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </div>
  </Notification>
)

const WarningNotification = () => (
  <Notification>
    <div className="alert_icon_notification_card">
      <MdWarning className="warning_icon" />
      <div className="alert_notification_type_card">
        <h1 className="alert_warning_head">Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </div>
  </Notification>
)

const AlertNotification = () => (
  <Notification>
    <div className="alert_icon_notification_card">
      <MdInfo className="info_icon" />
      <div className="alert_notification_type_card">
        <h1 className="alert_info_head">Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </div>
  </Notification>
)

const AlertNotifications = () => (
  <div className="alert_page">
    <div className="alert_page_con">
      <h1 className="alert_heading_style">Alert Notifications</h1>
      {SuccessNotification()}
      {ErrorNotification()}
      {WarningNotification()}
      {AlertNotification()}
    </div>
  </div>
)

export default AlertNotifications
