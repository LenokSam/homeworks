import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
  _id: number
  name: string
  priority: string
}
export type FilterType = 'all' | AffairPriorityType
export type DefaultAffairsType = Array<AffairType>
// constants
const defaultAffairs: DefaultAffairsType = [ // need to fix any
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'anime', priority: 'low'},
  {_id: 3, name: 'games', priority: 'low'},
  {_id: 4, name: 'work', priority: 'high'},
  {_id: 5, name: 'html & css', priority: 'middle'},
]


// pure helper functions
export const filterAffairs = (affairs: DefaultAffairsType, filter: FilterType): DefaultAffairsType => {
  if (filter === 'all') return affairs
  else return affairs.filter(a => a.priority === filter)
}
export const deleteAffair = (affairs: DefaultAffairsType, _id: number): DefaultAffairsType => {
  return affairs.filter(a => a._id !== _id)
}

function HW2() {
  const [affairs, setAffairs] = useState<DefaultAffairsType>(defaultAffairs)
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
  return (
    <div>
      <hr/>
      homeworks 2

      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr/>
    </div>
  )
}

export default HW2
