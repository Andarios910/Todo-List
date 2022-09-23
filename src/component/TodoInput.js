import React from 'react'
import Button from './Button'
import { FaSearch } from 'react-icons/fa'

export default function TodoInput({item, itemSearch, handleChange, onClick, searchTask}) {
    return (
        <>
            <h1 className='text-center text-xl font-medium mb-4'>TodoSearch</h1>
            <div className='w-full border border-gray-600 p-5'>
                <form>
                    <div className='flex w-1/2'>
                        <div className='rounded-l-sm bg-cyan-500 p-2'>
                            <i><FaSearch className='icon-search'/></i>
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
                        <Button type='submit' width='w-2/4' valueButton='Search' value='search' color='bg-blue-500' colorHover='hover:bg-blue-700' onClick={() => searchTask()}/>
                        <Button width='w-1/4' valueButton='Add new Task' color='bg-blue-500' colorHover='hover:bg-blue-700' onClick={onClick} />
                    </div>
                </form>
            </div>
        </>
    )
}
