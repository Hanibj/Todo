import React, {useState , useEffect} from "react";
import tod from "./apis/Creatax";

import Form from "./components/Form";
import Section from "./components/Section";
import Liste from "./components/Liste";



const App = () =>{
   const [todoListe, setTodoListe] = useState([]);
    
   useEffect ( ()=>{//on ne peut pas utlisier l'async dans useEffect
    async function fetchData(){// l utilisation de function dans useEffect et pour l'ajout de async
    const {data}= await  tod.get("/todos");
    setTodoListe(data);
   }
   fetchData();
   },[]);
   const addTodo =async (item) => {
      const { data }= await tod.post("/todos",item);
      setTodoListe((oldListe)=>[...oldListe,data]);  //rempilsage de la liste avec la concat les element anncien 
   }
   const removeTodo = async (id) =>{ //suppremer des element de la liste
      await tod.delete("/todos/"+ id) ;
       setTodoListe((oldListe) => oldListe.filter((item) => item._id !==id))//faire une filtrage sur la liste

   }
   const edittodo =async (item, id) =>{
       await tod.put(`/todos/${id}` ,item);

   }
    return (<div className="ui container  center aligned">
        <Section>
           <h1>To Do Liste</h1>
        </Section>
        <Section>
           <Form  addTodo={addTodo}/> 
        </Section>
        <Section>
           <Liste 
           editTodoListeProps={edittodo}
           removeTodoListeProps={removeTodo}
            liste={todoListe}/>
        </Section>
    </div>
    );
};

export default App;
//line 23 passer des props (liste) addTodo au formulaire pour ajouter faire l'ajout des nouveau item
//line 26 
