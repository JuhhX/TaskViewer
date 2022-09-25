import { ReactNode } from "react";

interface IconsButtonsProps{
    id: string
    icone: ReactNode
    onClick: (id: string) => void
}

export function IconsButtons(props: IconsButtonsProps){
    return (
        <button type={"button"} key={props.id} className='p-1 rounded-md bg-gray-800' onClick={() => {props.onClick(props.id)}}>
            {props.icone}
        </button>
    )
}