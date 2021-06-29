import React from "react";
import PanelsContainer from "./PanelsContainer";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectRoutineState, updateActivePicker } from './routineSlice';


const RoutineBuilder = () => {
  const dispatch = useAppDispatch();
  const routine = useAppSelector(selectRoutineState)
  const { activePicker, panels } = routine

  const switchTab = (tabId: number) => {
    dispatch(updateActivePicker(tabId))
  }

  const panelTabs = panels.map((panel, index) => {
    if(activePicker === index){
      return <a key={index} className="is-active">{panel}</a>
    }
    return <a key={index} onClick={() => switchTab(index)}>{panel}</a>
  })

  return (
    <div className="column">
      <nav className="panel is-dark">
        <p className="panel-heading">Routine Builder</p>
        <p className="panel-tabs">
          {panelTabs}
        </p>
        <PanelsContainer data={activePicker}/>
      </nav>
    </div>
  );
};

export default RoutineBuilder;
