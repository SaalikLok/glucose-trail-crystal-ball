import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { selectActivitiesState } from './activitySlice'
import ActivityPanel from './ActivityPanel'
import { ActivityData } from '../../../../data/activities'

const ActivityTab = () => {
  const allActivities = useAppSelector(selectActivitiesState)
  const activityPanels = allActivities.map( (activity: ActivityData) => {
    return <ActivityPanel key={activity.intensity} activity={activity} />
  })

  return (
    <>
      {activityPanels}
    </>
  )
}

export default ActivityTab
