import Data from "../utils/data.json"
import { useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataList, setDataList] = useState(Data);
  const [itemToShow, setItemToShow] = useState('all')

  const handleChange = () => {

  }

  const handleSubmit = () => {
    
  }

  const handleEdit = () => {
    
  }

  const handleDoneTask = (id, complete) => {
    const filteredItems = dataList.map(item => {
      item.id === id && (item.complete = !item.complete)
      return item;
    })
    setDataList(filteredItems);
  }

  const handleDeleteDoneTasks = () => {
    const filteredItems = dataList.filter(item => item.complete === false);
    setDataList(filteredItems)
  }

  const updateTodosToShow = (string) => {
    setItemToShow(string);
  }

  const clearList = () => {
    setDataList([])
  }

  const handleDelete = (id) => {
    const filteredItems = dataList.filter(item => item.id !== id);
    setDataList(filteredItems)
  }

  let items = []
  items = dataList
  if(itemToShow === "all") {
    items = dataList;
  } else if (itemToShow === "todo") {
    items = dataList.filter(item => !item.complete)
  } else if (itemToShow === "done") {
    items = dataList.filter(item => item.complete)
  }


  useEffect(() => {
    
  })

  return (
    <div className='container w-3/4 mx-auto mt-8'>
      <div className="border rounded-lg shadow-lg p-10">
        <div className="className='border border-gray-600 p-5'">
          <TodoInput 
            handleChange={handleChange}
            handleSubmit={handleSubmit} 
            onClick={() => navigate('/add')}
          />
        </div>
        <TodoList 
            dataList={items}
            // filterDoneTask={filterDoneTask}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleDoneTask={handleDoneTask}
            handleDeleteDoneTasks={handleDeleteDoneTasks}
            updateTodosToShow={updateTodosToShow}
        />
      </div>
    </div>
  );
}

export default App;
