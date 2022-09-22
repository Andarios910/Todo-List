import React from 'react'
import Button from './Button'

export default function TodoInput({item, handleChange, handleSubmit, onClick}) {
    return (
        <>
            <h1 className='text-center text-xl font-medium mb-4'>TodoSearch</h1>
            <div className='w-full border border-gray-600 p-5'>
                <form onSubmit={handleSubmit}>
                    <div className='flex w-1/2'>
                        <div className='rounded-l-sm bg-cyan-500 p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
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
                        <Button width='w-1/4' valueButton='Add new Task' color='bg-blue-500' colorHover='hover:bg-blue-700' onClick={onClick} />
                    </div>
                </form>
            </div>
        </>
    )
}
