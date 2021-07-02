import React from "react";
import { ActivityData } from "../../../../data/activities";
import { useAppDispatch } from "../../../app/hooks";
import { updateActivity } from "./activitySlice";

type Props = {
  activity: ActivityData;
};

const ActivityPanel: React.FC<Props> = ({ activity }) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDuration = Number(e.target.value)
    const updatedActivity = {
      ...activity,
      duration: newDuration
    }

    dispatch(updateActivity(updatedActivity))
  }

  return (
    <div className="panel-block columns">
      <div className="column">
        <span className="panel-icon">
          <i className="fas fa-running"></i>
        </span>
        {activity.intensity}
      </div>
      <div className="column">
        <input
          className="input is-small mr-3"
          type="number"
          name=""
          id=""
          min="0"
          value={activity.duration}
          onChange={(e) => handleChange(e)}
        />
        minutes
      </div>
    </div>
  );
};

export default ActivityPanel;
