import React from 'react'
import CasesKanban from '../kanban/CasesKanban'

const HasCases = () => {
  return (
    <div className='p-4'>
      <div className='grid'>
         <div>
            <div className='border-b border-neutral-800'>
              <h1 className='text-4xl text-neutral-400 mb-20'>Cases</h1>
            </div>
            <div className='flex mt-10 pb-6 border-b border-neutral-800'>
              <button className='px-2 py-1 rounded bg-neutral-700 transition-all ease-in-out mr-8 text-neutral-400'>Kanban</button>
              <button className='px-2 py-1 rounded hover:bg-neutral-700 transition-all ease-in-out mr-8 text-neutral-400' >Table</button>
            </div>
            <div>
              <CasesKanban/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default HasCases