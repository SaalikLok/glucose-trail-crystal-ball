import React from 'react'
import { ActivityData } from '../../../../data/activities'

type Props = {
  activity: ActivityData
}

const ActivityPanel: React.FC<Props> = ({activity}) => {
  return (
    <div className="panel-block columns">
      <div className="column">
        <span className="panel-icon">
          <i className="fas fa-running"></i>
        </span>
        {activity.intensity}
      </div>
      <div className="column">
        <input className="input is-small mr-3" type="number" name="" id="" />
        minutes
      </div>
    </div>
  )
}

export default ActivityPanel
