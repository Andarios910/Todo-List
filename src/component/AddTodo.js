import React, { useState } from 'react'
import TodoInput from './TodoInput'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import Data from '../utils/data.json'

export default function AddTodo({ handleSubmit, item, handleChange }) {
    const [tempState, setTempState] = useState([]);
    const [task, setTask] = useState('');
    const [complete, setComplete] = useState(false);
    const navigate = useNavigate()

    const onInputTask = (e) => {
        setTask(e.target.value)
    }

    const addNoteHandler = (e) => {
        e.preventDefault();
        setTempState(
            [
                {
                    id: +new Date(),
                    task: task,
                    complete: complete
                }
            ])
    }

    const onSubmitClick = () => {
        navigate('/', {
            state: {
                id: +new Date(),
                task: task,
                complete: complete
            }
        })
    }

    return (
        <>
        <div className='container w-3/4 mx-auto mt-8'>
            <div className="border rounded-lg shadow-lg p-10">
                <div className="border border-gray-600 p-5">
                    <h1 className='text-center text-xl font-medium mb-4'>TodoSearch</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='flex w-1/2'>
                            <div className='rounded-l-sm bg-cyan-500 p-2'>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg> */}
                                <i className="fa-solid fa-book"></i>
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
                            <Button type='submit' width='w-full' valueButton='Submit' color='bg-blue-500' colorHover='hover:bg-blue-700' onClick={onSubmitClick} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
