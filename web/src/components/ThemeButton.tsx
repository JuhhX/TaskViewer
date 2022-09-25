import { Student, Suitcase, ShoppingCart, MapPin, Heartbeat, Sun, Bird } from "phosphor-react"
import { useState } from "react";

interface ThemeButtonProps{
    text: string,
    color: string,
    icon: string,
    id: string
    onClick: Function
}

export function ThemeButton(props: ThemeButtonProps){

    const [icons, setIcons] = useState([
        {id: "Student", icon: <Student color="#FFF" size="22" />},
        {id: "Suitcase", icon: <Suitcase color="#FFF" size="22" />},
        {id: "Shoppingcart", icon: <ShoppingCart color="#FFF" size="22" />},
        {id: "Mappin", icon: <MapPin color="#FFF" size="22" />},
        {id: "Heartbeat", icon: <Heartbeat color="#FFF" size="22" />},
        {id: "Sun", icon: <Sun color="#FFF" size="22" />},
    ])

    function setIcon(iconName: string){

        var icone: any = <Bird color="#FFF" size="22" />;

        icons.map(item => {
            if(item.id == iconName)
                icone = item.icon;
        })

        return icone;
    }

    return (
        <button className='block p-3 text-white hover:bg-gray-700 w-full items-center flex text-left' onClick={() => props.onClick(props.id)}>
            <div className='rounded-md mr-3 p-2 px-2' style={{backgroundColor: props.color}}>
                {
                    setIcon(props.icon)
                }
            </div>
            {props.text}
        </button>
    );
}