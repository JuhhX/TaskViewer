import { TaskCard } from './TaskCard';
import {Minus, Plus} from "phosphor-react";

interface TaskBlock{
    
    id: string
    nome: string
    complete: boolean
    description: string
    
}

interface TaskGroupProps{
    taskBlock?: TaskBlock[],
    weekDay: string,
    groupID?: string
}

export function TaskGroup(props: TaskGroupProps){
    return (
        <div className='mt-3 mb-3 h-[80%]' key={props.groupID} >
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-white text-lg'>{props.weekDay}</h1>
                <div className='flex items-center gap-1'>
                    <Minus size={24} color={"#fff"} className="p-1 rounded-md bg-violet-500 cursor-pointer hover:bg-violet-600 mr-2" />
                    <Plus size={24} color={"#fff"} className="p-1 rounded-md bg-violet-500 cursor-pointer hover:bg-violet-600 mr-4" />
                </div>
            </div>
                
            {
                props.taskBlock?.map(item => (
                    <TaskCard taskName={item.nome} isComplete={item.complete} description={item.description} value={props.groupID+"task"+props.taskBlock?.indexOf(item)} />
                ))
            }
        </div>
    );
}