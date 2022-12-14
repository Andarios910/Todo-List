import React, { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function AddTodo({dataList, setDataList}) {
    const [task, setTask] = useState('');
    const [complete, setComplete] = useState(false);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setTask(e.target.value)
    }   

    const onClick = () => {
        setDataList([
            ...dataList,
            {
                id: +new Date(),
                task: task,
                complete: complete
            }
        ])
        navigate('/')
    }

    return (
        <div className='container w-3/4 mx-auto mt-8'>
            <div className="border rounded-lg shadow-lg p-10">
                <div className="border border-gray-600 p-5">
                    <h1 className='text-center text-xl font-medium mb-4'>TodoSearch</h1>
                    <form>
                        <div className='flex w-1/2'>
                            <div className='rounded-l-sm bg-cyan-500 p-2'>
                                <i className="fa-solid fa-book"></i>
                            </div>
                            <input
                                className='border border-gray-400 h-10 pl-2 rounded-r-sm w-full'
                                placeholder='Seerch TodoList'
                                type="text"
                                onChange={handleChange}
                                />
                        </div>
                        <div className='flex mt-5 justify-between'>
                            <Button type='submit' width='w-full' valueButton='Submit' color='bg-blue-500' colorHover='hover:bg-blue-700' onClick={onClick}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
