import { useEffect, useState } from "react";

import { MainView } from "./components/MainView"
import { BarraGrupos } from "./components/BarraGrupos";

import { Student, Suitcase, ShoppingCart, MapPin, Heartbeat, Sun, Check } from "phosphor-react"
import { IconsButtons } from './components/IconsButtons';

import * as Dialog from '@radix-ui/react-dialog';
import "./styles/main.css"
import { NotSelectedTask } from "./components/NotSelectedTask";

//Cada Grupo de tarefas tem suas informações na Barra de Tarefas
//Possuem também taskBlock que são os blocos de tarefas divididos por dias da semana
//Cada bloco de tarefa tem suas atividade (tarefas)
export interface taskInfos{
  id: string
  icon: string
  colorIcon: string
  taskName: string
  taskBlock?: [
      {
          blockID: string
          weekDay: string
          tarefas: [
            {
              id: string
              nome: string
              complete: boolean
              description: string
            }
          ]
      }
  ]
}

function App() {

  //Usado para a criação de um novo grupo
  const [groupName, setGroupName] = useState<string>("");

  //Controlam o useEffect quando o id é alterado e coloca a tarefa obtida dentro de task
  const [currentTask, setCurrentTask] = useState<string>("");
  const [task, setTask] = useState<taskInfos>();

  const [showGroup, setShowGroup] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [colorChoosed, setColorChoosed] = useState<string>("#4b0082");

  const [iconsPressed, setIconsPressed] = useState([
    {id: 0, pressed: false, value: "Student"},
    {id: 1, pressed: false, value: "Suitcase"},
    {id: 2, pressed: false, value: "Shoppingcart"},
    {id: 3, pressed: false, value: "Mappin"},
    {id: 4, pressed: false, value: "Heartbeat"},
    {id: 5, pressed: false, value: "Sun"}
  ]);

  const [currentIconSelected, setCurrentIconSelected] = useState<string>("bird");

  function setDefaultColorIcon(){
    setColorChoosed("#4b0082");
    setGroupName("");
    changeSetIconPressed("-1icon")
  }

  function changeSetIconPressed(id: string){
    var changeIcon = Number(id.replace("icon", ""));

    var newData = iconsPressed.map(item => {
      if(item.id == changeIcon)
        return {id: changeIcon, pressed: true, value: item.value}
      else
        return {id: item.id, pressed: false, value: item.value};
    })

    setIconsPressed(newData);
  }

  useEffect(() => {
    iconsPressed.map(item => {
      if(item.pressed)
        setCurrentIconSelected(item.value);
    })
  }, [iconsPressed])

  function verificarGrupo(){
    var iconSelected = false;
    iconsPressed.forEach(element => {
      if(element.pressed)
        iconSelected = true;
    });

    if(groupName != "" && iconSelected)
      alert("Grupo criado com sucesso");
    else
      alert("Preencha os campos")
  }

  function mostrarGrupo(id: string){
    if(currentTask != id){
      setCurrentTask(id);
    }
  }

  useEffect(() => {

    if(currentTask != ""){
      fetch("http://localhost:3333/groups/" + currentTask)
      .then(response => response.json())
      .then(data => setTask(data))

      setIsLoading(true);
      
      setTimeout(() => {setIsLoading(false)}, 500);
      
      setShowGroup(true);
    }

  }, [currentTask]);

  return (

    <div className='w-full flex h-full'>
      <Dialog.Root>
        <BarraGrupos onClickCreate={() => setDefaultColorIcon()} onClickItem={mostrarGrupo} />

        <Dialog.Portal>
          <Dialog.Overlay className='absolute inset-0 bg-black/60 z-[3]' />

          <Dialog.Content className='w-2/5 bg-gray-900 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md absolute z-[4] border border-violet-400'>
            <Dialog.Title className='text-center mt-4 text-2xl text-white font-bold'>Adicionar grupo</Dialog.Title>
            <form method="POST" className='flex flex-col p-5 mt-3 items-center gap-4 border-t border-zinc-500' action="http://localhost:3333/groups">
              <label className='text-zinc-200 text-lg'>Qual nome dará a esse conjunto de tarefas?</label>
              <input className='w-3/5 h-10 p-2 bg-gray-800 rounded-md text-white' name="group_name" value={groupName} onChange={(e) => setGroupName(e.target.value)} type={"text"} placeholder={"Nome"} />

              <div className='flex gap-3 mt-3 flex-col items-center'>
                <label className='text-zinc-200 text-lg'>Dê uma cor ao icone desse conjunto: </label>
                <input className='rounded-md bg-gray-800 h-10' name="color_icon" type={"color"} value={colorChoosed} onChange={(e) => {setColorChoosed(e.target.value)}} />
              </div>

              <div className='flex gap-3 mt-3 flex-col items-center'>
                <label className='text-zinc-200 text-lg'>Selecione um icone: </label>
                <div className='flex gap-4 pt-3'>
                  <IconsButtons icone={<Student color={(iconsPressed[0].pressed) ? "#8b5cf6" : "#FFF"} size={32} />} id="icon0" onClick={changeSetIconPressed}  />
                  <IconsButtons icone={<Suitcase color={(iconsPressed[1].pressed) ? "#8b5cf6" : "#FFF"} size={32} />} id="icon1" onClick={changeSetIconPressed}  />
                  <IconsButtons icone={<ShoppingCart color={(iconsPressed[2].pressed) ? "#8b5cf6" : "#FFF"} size={32} />} id="icon2" onClick={changeSetIconPressed}  />
                  <IconsButtons icone={<MapPin color={(iconsPressed[3].pressed) ? "#8b5cf6" : "#FFF"} size={32} />} id="icon3" onClick={changeSetIconPressed}  />
                  <IconsButtons icone={<Heartbeat color={(iconsPressed[4].pressed) ? "#8b5cf6" : "#FFF"} size={32} />} id="icon4" onClick={changeSetIconPressed}  />
                  <IconsButtons icone={<Sun color={(iconsPressed[5].pressed) ? "#8b5cf6" : "#FFF"} size={32} />} id="icon5" onClick={changeSetIconPressed}  />
                </div>
                <input type={"text"} className="hidden" value={currentIconSelected} onChange={() => {}} name="icon_selected" />
              </div>

              <div className='flex gap-3 mt-4 border-t border-zinc-500 pt-5 w-full flex-row justify-center pr-3'>
                <Dialog.Close className='bg-gray-600 p-2 rounded-md text-white hover:bg-gray-700'>Cancelar</Dialog.Close>
                <button className="bg-violet-500 hover:bg-violet-600 p-2 rounded-md text-white flex justify-center gap-2" type={"submit"} onClick={() => {verificarGrupo()}} ><Check color='#fff' size={24} /> Criar grupo</button>
              </div>

            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      
      {(isLoading) ? <NotSelectedTask texto={["Carregando ..."]} /> : (showGroup) ? <MainView showTask={task} /> : <NotSelectedTask texto={["Selecione ao lado um tema de tarefas que deseja ver", "Ou crie uma clicando em \"Adicionar Grupo\""]} />}
      
    </div>
  )
}

export default App
