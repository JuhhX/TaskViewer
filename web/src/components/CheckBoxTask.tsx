import { Check, X } from "phosphor-react"
import { useState } from "react"

interface CheckBoxTaskProps{
    isComplete: boolean
}

export function CheckBoxTask(props: CheckBoxTaskProps){

    const [checked, setChecked] = useState(props.isComplete);

    return (
        <div onClick={() => {setChecked(!checked)}} className="h-8 w-8 cursor-pointer select-none rounded-md border-4 flex items-center justify-center" style={{borderColor: (checked) ? "#00FA9A" : "#B22222"}}>
            { (checked) ? <Check color={"#FFF"} size={22} /> : null }
        </div>
    )
}