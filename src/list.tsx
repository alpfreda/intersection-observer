import React from 'react'
import Item from './item'

const List: React.FC = (): JSX.Element => {
  const images = [
    'https://images.unsplash.com/photo-1499377193864-82682aefed04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2682&q=80',
    'https://images.unsplash.com/photo-1608263963915-e668cd4e4e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    'https://images.unsplash.com/photo-1693292918557-7ebc6126077c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1690687198654-2856382d89c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80',
    'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&w=1000&q=80',
    'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://plus.unsplash.com/premium_photo-1663936756850-5288c3ad1593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80',
    'https://images.unsplash.com/photo-1503792070985-b4147d061915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2623&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1494894194458-0174142560c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://plus.unsplash.com/premium_photo-1661964088064-dd92eaaa7dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2612&q=80',
    'https://images.unsplash.com/photo-1519658422992-0c8495f08389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2655&q=80',
    'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
  ]

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <nav className='flex items-center justify-between flex-wrap bg-slate-500 p-3 w-96 rounded-t-2xl mt-2'>
        <div className='flex items-center flex-shrink-0 text-white'>
          <svg
            className='fill-current h-8 w-8 mr-2'
            width='54'
            height='54'
            viewBox='0 0 54 54'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
          </svg>
          <span className='font-semibold text-xl tracking-tight'>Lazy Loading</span>
        </div>
        <div className='ms-auto'>
          <div className='text-sm'>
            <a
              href='#responsive-header'
              className='mt-4 inline-block mt-0 text-slate-200 hover:text-white mr-4'>
              Docs
            </a>
            <a
              href='#responsive-header'
              className='mt-4 inline-block mt-0 text-slate-200 hover:text-white'>
              Blog
            </a>
          </div>
        </div>
      </nav>
      <div className='w-96 h-full xl:h-3/4 2xl:h-2/4 shadow-lg overflow-scroll rounded-b-lg p-4 border-2 border-slate-500 relative'>
        {images.map(image => (
          <Item
            key={image}
            src={image}
          />
        ))}
      </div>
    </div>
  )
}

export default List
