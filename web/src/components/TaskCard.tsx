import * as Accordion from '@radix-ui/react-accordion';
import { CheckBoxTask } from './CheckBoxTask';
import {CaretDown, CaretUp, Minus} from "phosphor-react";
import { useState } from 'react';

interface TaskCardProps{
    taskName: string,
    description: string,
    value: string
    isComplete: boolean
}

export function TaskCard(props: TaskCardProps){

    const [open, setOpen] = useState(false);

    return (
        <Accordion.Item value={props.value} className="w-full bg-gray-800 relative rounded-md p-4 mt-3 gap-3 flex flex-col">
            <Accordion.Header className='w-full gap-3 flex'>
                <CheckBoxTask  isComplete={props.isComplete} />
                <Accordion.Trigger onClick={() => setOpen(!open)} className='text-white text-lg w-[90%] select-none text-left'>{props.taskName}</Accordion.Trigger>
                <div className='flex gap-1 items-center'>
                    <Minus size={24} color={"#fff"} className="p-1 cursor-pointer mr-1" />
                    {
                        (open) ? <CaretDown color={"#FFF"} size={22} className="self-center" /> : <CaretUp color={"#FFF"} size={22} className="self-center" /> 
                    }
                </div>
            </Accordion.Header>
            <Accordion.Content className='border-t border-gray-600 pt-5 text-zinc-300'>{props.description}</Accordion.Content>
        </Accordion.Item>
    );
}