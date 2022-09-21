import React from 'react'
import TodoInput from './TodoInput'
import Button from './Button'

export default function TodoHeader({image}) {
    return (
        <div>
            <h1 className='text-center text-xl font-medium mb-4'>TodoSearch</h1>
            <div className='border border-gray-600 p-5'>
                <TodoInput image={image} />

                <div className='flex mt-5 justify-between'>
                    <Button width='w-2/4' valueButton='Search' color='bg-blue-500' colorHover='hover:bg-blue-700' />
                    <Button width='w-1/4' valueButton='Add new Task' color='bg-blue-500' colorHover='hover:bg-blue-700'/>
                </div>
            </div>
        </div>
    )
}
