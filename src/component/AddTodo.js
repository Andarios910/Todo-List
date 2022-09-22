import React, { useState } from 'react'
import TodoInput from './TodoInput'
import Button from './Button'
import pic from '../utils/search-icon2.svg'
import { useNavigate } from 'react-router-dom'
import Data from '../utils/data.json'

export default function AddTodo({}) {
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
                <div className="className='border border-gray-600 p-5'">
                    <h1 className='text-center text-xl font-medium mb-4'>TodoInput</h1>
                    <div className='border border-gray-600 p-5'>
                        <form onSubmit={addNoteHandler}>
                            <TodoInput image={pic} onInput={onInputTask} task={task} />
                            <div className='flex mt-5 justify-between'>
                                <Button type='submit' width='w-full' valueButton='Submit' color='bg-blue-500' colorHover='hover:bg-blue-700' onClick={onSubmitClick} />
                                {/* <Button width='w-1/4' valueButton='Add new Task' color='bg-blue-500' colorHover='hover:bg-blue-700' onClick={onClick}/> */}
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}
