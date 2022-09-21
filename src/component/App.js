// import './App.css';
import TodoHeader from "./TodoHeader";
import pic from '../utils/search-icon2.svg'
import Button from "./Button";
import ItemList from "./ItemList";
import Data from "../utils/data.json"
import { useState } from "react";

function App() {
  const [dataList, setDataList] = useState(Data);

  const onDelete = (id) => {

  }

  const setComplete = (id) => {

  }

  return (
    <div className='container w-3/4 mx-auto mt-8'>
        <div className='border rounded-lg shadow-lg p-10'>
          <TodoHeader image={pic} />
        </div>
        <h1 className='text-center text-xl font-medium mt-5'>TodoList</h1>
        <div className='flex justify-between mt-10'>
          <Button width='w-64' valueButton='All' value='all' color='bg-blue-500' colorHover='hover:bg-blue-700'  />
          <Button width='w-64' valueButton='Done' value='done'  color='bg-blue-500' colorHover='hover:bg-blue-700' />
          <Button width='w-64' valueButton='Todo' value='todo' color='bg-blue-500' colorHover='hover:bg-blue-700'/>
        </div>
        <div>
        {
          dataList.map((item) => (
            <ItemList 
              key={item.id}
              id={item.id}
              task={item.task}
              complete={item.complete}
              onDelete={onDelete}
              setComplete={setComplete}
              />
          ))
        }
      </div>
    </div>
  );
}

export default App;
