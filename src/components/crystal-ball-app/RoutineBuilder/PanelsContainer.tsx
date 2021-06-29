import React from 'react'
import FoodPanel from './Meals/FoodPanel'
import FoodSearch from './Meals/FoodSearch'
import { foods } from '../../../data/foods'

type Props = {
  data: number
}

const PanelsContainer: React.FC<Props> = ({data}: Props) => {
  const allPanels = foods.map((item) => {
    return(
      <FoodPanel key={item.name} foodName={item.name} serving={item.serving}/>
    )
  })
  
  return (
    <>
      <FoodSearch />
    </>
  )
}

export default PanelsContainer
