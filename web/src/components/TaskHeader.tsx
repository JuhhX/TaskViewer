import { Plus, Minus } from "phosphor-react"

interface TaskHeaderProps{
  title?: string
}

export function TaskHeader(props: TaskHeaderProps){
    return (
        <div className="w-full">
          <div className="w-full p-4 border-b border-zinc-500 flex items-center justify-between">
            <h1 className="text-3xl text-white font-bold">{props.title}</h1>
            <Minus size={24} color={"#fff"} className="p-1 rounded-md bg-violet-500 cursor-pointer hover:bg-violet-600" />
          </div>
          <div className="w-full p-4 border-b border-zinc-500">
            <button className="h-full w-full p-2 text-left flex gap-2 text-zinc-500 hover:bg-gray-800 hover:text-white">
              <Plus size={24} color={"#FFFFFF"} className="p-1 rounded-md bg-violet-500" />Adicionar um conjunto
            </button>
          </div>
        </div>
    )
}