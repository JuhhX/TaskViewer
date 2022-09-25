import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { ThemeButton } from "./ThemeButton";

interface BarraGruposProps{
    onClickCreate: () => void
    onClickItem: Function
}

interface TaskGroups{
    id: string
    taskName: string
    colorIcon: string
    icon: string
}

export function BarraGrupos(props: BarraGruposProps){

    const [dados, setDados] = useState<TaskGroups[]>([]);

    useEffect(() => {
        fetch("http://localhost:3333/groups")
        .then(response => response.json())
        .then(data => {setDados(data)})
    }, [])

    return (
        <div className='w-[20%] bg-gray-800 border-r-2 border-violet-700 p-4'>
            <h1 className='text-white font-bold text-lg block mb-4'>Minhas tarefas</h1>

            <div className='w-full h-[75%] overflow-auto'>
                {
                    dados.map(item => (
                        <ThemeButton onClick={props.onClickItem} id={item.id} text={item.taskName} key={item.id} color={item.colorIcon} icon={item.icon} />
                    ))
                }
            </div>

            <Dialog.Trigger onClick={props.onClickCreate} className='bg-violet-600 hover:bg-violet-700 text-white font-bold p-4 rounded-md w-[80%] ml-4'>Adicionar Grupo</Dialog.Trigger>
        </div>
    );
}