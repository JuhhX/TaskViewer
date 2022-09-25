
interface NotSelectedTaskProps{
    texto: string[]
}

export function NotSelectedTask(props: NotSelectedTaskProps){

    return(
        <div className="w-full pb-8 flex flex-col items-center justify-center">
            <h1 className="text-center text-white text-2xl">
                {
                    props.texto.map(item => {
                        return (<div key={props.texto.indexOf(item)} >{item} <br /></div>)
                    })
                }
            </h1>
        </div>
    )
}