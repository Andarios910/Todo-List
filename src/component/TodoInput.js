import React from 'react'
import Button from './Button'

export default function TodoInput({item, handleChange, handleSubmit}) {
    return (
        <>
            <h1 className='text-center text-xl font-medium mb-4'>TodoSearch</h1>
            <div className='w-full border border-gray-600 p-5'>
                <form onSubmit={handleSubmit}>
                    <div className='flex w-1/2'>
                        <div className='rounded-l-sm bg-cyan-500 p-2'>
                            <i className='fas fa-book' alt="icon" />
                        </div>
                        <input
                            className='border border-gray-400 h-10 pl-2 rounded-r-sm w-full'
                            placeholder='Seerch TodoList'
                            type="text"
                            value={item} 
                            onChange={handleChange}
                            />
                    </div>
                    <div className='flex mt-5 justify-between'>
                        <Button width='w-2/4' valueButton='Search' color='bg-blue-500' colorHover='hover:bg-blue-700' />
                        <Button width='w-1/4' valueButton='Add new Task' color='bg-blue-500' colorHover='hover:bg-blue-700'/>
                    </div>
                </form>
            </div>
        </>
    )
}
