import React from 'react'

export default function TodoInput({image}) {
    return (
        <div className='w-full'>
            <div className='flex w-1/2'>
                <div className='rounded-l-sm bg-cyan-500 p-2'>
                    <img src={image} alt="icon" />
                </div>
                <input
                    className='border border-gray-400 h-10 pl-2 rounded-r-sm w-full'
                    placeholder='Seerch TodoList'
                    type="text"/>
            </div>
        </div>
    )
}
