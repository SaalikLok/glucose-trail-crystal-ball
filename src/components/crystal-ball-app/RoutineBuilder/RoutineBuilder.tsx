import React from "react";
import PanelsContainer from "./PanelsContainer";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectRoutineState, updateActiveTabId } from './routineSlice';

const RoutineBuilder = () => {
  const dispatch = useAppDispatch();
  const routine = useAppSelector(selectRoutineState)
  const { activeTabId, tabs } = routine

  const panelTabs = tabs.map((tab, index) => {
    if(activeTabId === index){
      return <a key={index} className="is-active">{tab}</a>
    }
    return <a key={index} onClick={() => dispatch(updateActiveTabId(index))}>{tab}</a>
  })

  return (
    <div className="column">
      <nav className="panel is-dark">
        <p className="panel-heading">Routine Builder</p>
        <p className="panel-tabs">
          {panelTabs}
        </p>
        <PanelsContainer />
      </nav>
    </div>
  );
};

export default RoutineBuilder;
