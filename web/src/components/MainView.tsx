import { TaskGroup } from "../components/TaskGroup"
import { TaskHeader } from "../components/TaskHeader"

import * as Accordion from '@radix-ui/react-accordion';

import {taskInfos} from "../App"

interface MainViewProps{
    showTask?: taskInfos
}

export function MainView(props: MainViewProps){

    return (
        <div className="w-full pb-8 flex flex-col items-center">
            <Accordion.Root className="w-[60%] absolute mt-8 pr-5 h-[85%] gap-0 flex flex-col pb-8 overflow-auto scrollbar scrollbar-thumb-violet-500 scrollbar-thin" type="multiple">

                <TaskHeader title={props.showTask?.taskName} />
                
                {
                    props.showTask?.taskBlock?.map(item => (
                        <TaskGroup weekDay={item.weekDay} groupID={item.blockID} taskBlock={item.tarefas} />
                    ))
                }
                
            </Accordion.Root>
        </div>
    )
}