import React,{useState} from 'react';


const Project = () => {

    const [project,setProject] = useState({
        project:[
            {
                name:"  Ui-Picker  ",
                description:"Ui-picker is a website built using Vanilla-JS which helps to pick colours for the website to enrich the user-interface.It also has template where you can change the colours of the components.",
                href:"https://ui-picker.netlify.app/",   
                ghref:"https://github.com/sarulathadurai/ui-picker",
                src:"images/ui.png",
                stack:"HTML,CSS,JavaScript"
            },
            {
                name:" 🤯 Memory World 🤯 ",
                description:"Built a memory-card game in Vanilla js to all the Ben-10 fans who are challenged to match the correct aliens.",
                href:"https://ben10memoryworld.netlify.app/",   
                ghref:"https://github.com/sarulathadurai/memory-game",
                src:"images/memory.png",
                stack:"HTML,CSS,JavaScript"
            },
            {
                name:"Quiz App",
                description:"A quiz app on javascript which may help tune yourself for an interview.Answer soon as clock ticks!",
                href:"https://quiz-in-javascript.netlify.app/",
                ghref:"https://github.com/sarulathadurai/QuizApp", 
                src:"images/quiz.png",  
                stack:"React ,Bootstrap"
            },
            {
                name:"Dictionary",
                description:" Life is all about find meaning of your life.For finding meaning for words here is a dictionary where you can get meanings of words.",
                href:"https://findmeaning.netlify.app/",
                ghref:"https://github.com/sarulathadurai/Dictionary.git",   
                src:"images/dictionary.png",
                stack:"React, Bootstrap ,googleApi"
            },
            {
                name:"Weather Finder",
                description:"Ever wondered what the other part of world dealing with.This weather app helps you to get the live weather conditions of any part of the world.",
                href:"https://weathersearcher.netlify.app/", 
                ghref:"https://github.com/sarulathadurai/weather",
                src:"images/weather.png",
                stack:"React, Bootstrap,OpenWeatherMap Api"
            },
            {
                name:"Lyric Finder",
                description:"Ever wondered what is the lyrics of the song which I am hearing? LyricFinder is here to help you get the lyrics.",
                href:"https://lyricfinderz.netlify.app/",   
                ghref:"https://github.com/sarulathadurai/LyricFinder",
                src:"images/lyric.png",
                stack:"React, Bootstrap ,Rest Api"
            }
        ]
    })


    return ( 
        <div className="section-height">
            <h1 className="Title">Projects</h1>
            <div className="Project">
               {project.map((item,index)=>{
                 return (
                     <div>
                         
                     </div>    
                 );
                })}
            </div>
        </div>
     );
}
 
export default Project;