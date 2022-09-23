import React, { useState } from 'react'
import Button from './Button'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditTodo({ dataList, setDataList}) {
    const {id} = useParams();
    // const filteredData = dataList.filter(item => item.id != id);
    // const selectedData = dataList.filter(item => item.id == id);
    const select = dataList.find(item => item.id === Number(id))

    // const [filter, setFilter] = useState(filteredData);
    // const [id, setId] = useState(select.id)
    // const [selectId, setSelectId] = useState(select.id);
    const [task, setTask] = useState(select.task)
    // const [complete, setComplete] = useState(select.complete)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    // const newData = {
    //     id: id,
    //     task : task,
    //     complete : complete,
    // }


    const onClick = () => {
        // setDataList([...filter, newData])
        const newState = dataList.map(item => {
            if (item.id === select.id) {
                return {
                    id: item.id, 
                    task: task, 
                    complete: item.complete,
                };
            }
            return item;
        })
        setDataList(newState)
        navigate('/')
    }

    return (
        <div className='container w-3/4 mx-auto mt-8'>
            <div className="border rounded-lg shadow-lg p-10">
                <div className="border border-gray-600 p-5">
                    <h1 className='text-center text-xl font-medium mb-4'>EditTodo</h1>
                    <form>
                        <div className='flex w-1/2'>
                            <div className='rounded-l-sm bg-cyan-500 p-2'>
                                <i className="fa-solid fa-book"></i>
                            </div>
                            <input
                                className='border border-gray-400 h-10 pl-2 rounded-r-sm w-full'
                                placeholder='Seerch TodoList'
                                type="text"
                                value={task}
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
