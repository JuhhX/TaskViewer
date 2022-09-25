import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export function HeaderBar(){
    return (
        <NavigationMenu.Root orientation='horizontal' className='w-full relative bg-gray-800 pt-2 pb-1 px-3 flex border-b-2 border-violet-700 shadow-md shadow-indigo-400/30 z-[1]'>
            <img src={"/vite.svg"} className="ml-2" />
            
            <div className='flex w-full justify-between pr-8'>

                <NavigationMenu.List className='w-full ml-4 justify-between flex-row flex text-white font-bold p-2'>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>Dashboard</NavigationMenu.Trigger>
                </NavigationMenu.Item>
                
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>Configurações</NavigationMenu.Trigger>

                        <NavigationMenu.Content className='absolute w-full rounded-md bg-gray-700 mt-5 p-3 z-[2]'>
                        <h1 className='text-lg'>Configurações</h1>
                        <div className='w-full mt-2 gap-3 flex'>
                            <input type={'checkbox'} onChange={() => {}} checked name="darkMode" /> <label htmlFor="darkMode" className='text-sm font-normal' >Habilitar modo Noturno</label> 
                        </div>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
                
            </div>

        </NavigationMenu.Root>
    )
}