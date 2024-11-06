import { getRandomInfo } from '@/app/services/practiceActions';
import practice from '@/app/types/practice';
import React from 'react'

const login = async () => {
  const arr: Array<practice> = await getRandomInfo();
  
  return (
    <div className='flex flex-wrap'>{arr.map(obj=><h1 className='w-60 h-30 m-5 p-5 bg-purple-200' key={obj.id}>{obj.body}</h1>)}</div>
  )
}

export default login