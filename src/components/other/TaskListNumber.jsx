import React from 'react'

const TaskListNumber = () => {
  return (
    <div id='tasklistnumber' className='flex  justify-between screen gap-5 mt-10'>
      <div className=' bg-red-400  py-5 px-10 rounded-md w-full'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className=' bg-blue-400  py-5 px-10 rounded-md w-full'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className=' bg-yellow-400  py-5 px-10 rounded-md w-full'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className=' bg-green-400  py-5 px-10 rounded-md w-full'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
