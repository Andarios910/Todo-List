import React from 'react'
import ItemList from './ItemList'
import Button from './Button'
import DeleteButton from './DeleteButton'

export default function TodoList({ dataList, keyword, handleDelete, handleEdit, handleDoneTask, updateTodosToShow, handleDeleteDoneTasks, clearList}) {
    if (dataList.length > 0) {
        dataList = dataList.filter(item => {
            if (keyword == " ") {
                return item;
            }
            return item.task.toLowerCase().includes(keyword.toLowerCase())
        })
    }

    return (
        <div>
            <h1 className='text-center text-xl font-medium mt-5'>TodoList</h1>
            <div className='flex justify-between mt-10'>
                <Button width='w-64' valueButton='All' value='all' color='bg-blue-500' colorHover='hover:bg-blue-700' onClick={() => updateTodosToShow('all')} />
                <Button width='w-64' valueButton='Done' value='done'  color='bg-blue-500' colorHover='hover:bg-blue-700' onClick={() => updateTodosToShow('done')} />
                <Button width='w-64' valueButton='Todo' value='todo' color='bg-blue-500' colorHover='hover:bg-blue-700' onClick={() => updateTodosToShow('todo')} />
            </div>
            <div>
                { 
                    dataList.map((item) => (
                        <ItemList
                            key={item.id}
                            id={item.id}
                            task={item.task}
                            complete={item.complete}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                            handleDoneTask={handleDoneTask}
                        />
                    ))
                } 
            </div>
            <div className='flex justify-between mt-10 '>
                <DeleteButton value="Delete done Task" onClick={handleDeleteDoneTasks}/>
                <DeleteButton value="Delete All Task" onClick={clearList} />
            </div>
        </div>
    )
}
