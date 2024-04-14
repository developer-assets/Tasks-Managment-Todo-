import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete, MdModeEditOutline  } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import initialTasksData from '../Data/tasks';

const CategoryBox = () => {
  const [tasksData, setTasksData] = useState(initialTasksData);
  const [dottedTasks, setDottedTasks] = useState([]);

  const deleteTaskCategory = (id) => {
    const updatedTasks = tasksData.filter(task => task.id !== id);
    setTasksData(updatedTasks);
    setDotted1(false);
    setDotted2(false);
  }

  const deleteIndividualTask = (taskId, subTaskIndex) => {
    const updatedTasks = tasksData.map(task => {
      if (task.id === taskId) {
        const updatedSubTasks = task.subTask.filter((subTask, index) => index !== subTaskIndex);
        return { ...task, subTask: updatedSubTasks };
      }
      return task;
    });
    setTasksData(updatedTasks);
  }

  const toggleDottedTask = (taskId) => {
    const updatedDottedTasks = [...dottedTasks];
    updatedDottedTasks[taskId] = !updatedDottedTasks[taskId];
    setDottedTasks(updatedDottedTasks);
  }

  const toggleDottedSubTask = (taskId, subTaskIndex) => {
    const updatedTasks = [...tasksData];
    updatedTasks.forEach(task => {
      if (task.id === taskId) {
        task.subTask[subTaskIndex].dotted = !task.subTask[subTaskIndex].dotted;
      }
    });
    setTasksData(updatedTasks);
  }




  return (
    <div className='flex justify-start flex-wrap gap-1 max-w-7xl w-screen pt-12'>
      {tasksData.map(task => (
        <div key={task.id} className='border border-gray-500 bg-gray-950 z-0 rounded-lg w-[340px] h-[500px] py-3 px-2'>
          <div className='relative'>
            <div className='flex justify-between'>
              <div className='flex justify-start'>
                <div className='text-green-500'>
                  <FaRegCircle size={15} className='mt-1' />
                </div>
                <p className='font-semibold ml-2'>{task.title}</p>
              </div>
              <div className='cursor-pointer' onClick={() => toggleDottedTask(task.id)}>
                <BsThreeDots size={18} />
              </div>
            </div>

            <div>
              <p className='text-sm ml-1 mt-2'>{task.description}</p>
            </div>

            {dottedTasks[task.id] && (
              <div className='absolute top-6 right-4 p-2 pr-3 z-10 bg-slate-950 rounded-md border border-gray-500'>
                <div>
                  <button className='mx-2 text-gray-500 my-[9px] flex justify-start'>
                    <MdModeEditOutline size={20} className='mt-[2px]' />
                    <p className='ml-1'>Edit Category</p>
                  </button>
                  <button className='mx-2 text-red-500 my-[9px] flex justify-start' onClick={() => deleteTaskCategory(task.id)}>
                    <MdDelete size={20} className='mt-[2px]' />
                    <p className='ml-1'>Delete Category</p>
                  </button>
                </div>
              </div>
            )}

            {/* Map over each individual task */}
            <div className='bg-transparent mt-6 mx-2 h-[340px] pb-5 overflow-y-scroll overflow-x-hidden'>
              {task.subTask.map((specific, index) => (
                <div key={index} className='bg-gray-900 relative rounded-md border border-gray-800 mx-2 my-3 p-2'>
                  <div className='cursor-pointer ml-[90%] mb-2' onClick={() => toggleDottedSubTask(task.id, index)}>
                    <BsThreeDots size={18} className='' />
                  </div>
                  <div>
                    <p className='text-sm'>{specific.content}</p>
                  </div>
                  {specific.dotted && (
                    <div className='absolute top-8 right-7 p-2 pr-3 z-20 bg-slate-950 rounded-md border border-gray-500'>
                      <div>
                        <button className='mx-2 text-gray-500 my-[9px] flex justify-start'>
                          <MdModeEditOutline size={20} className='mt-[2px]' />
                          <p className='ml-1'>Edit Item</p>
                        </button>
                        <button className='mx-2 text-red-500 flex justify-start' onClick={() => deleteIndividualTask(task.id, index)}>
                          <MdDelete size={20} className='mt-[2px]' />
                          <p className='ml-1'>Delete Item</p>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className='bg-gray-500 text-black w-full flex justify-start px-4 py-[6px] mt-5 cursor-pointer rounded-lg'>
            <FaPlus size={20} className='mt-[2px]' />
            <p className='ml-5 font-semibold'>Add Item</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryBox;
