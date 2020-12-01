import React  from 'react';
import ui from "../../Assets/ui.png";
import lyric from "../../Assets/lyric.png";
import memory from "../../Assets/memory.png";
import quiz from "../../Assets/quiz.png";
import weather from "../../Assets/weather.png";
import dictionary from "../../Assets/dictionary.png";
import "./Project.css"

const Project = () => {

    const project=        [
            {
                name:" 🎨 Ui-Picker 🖌️ ",
                description:"Ui-picker is a website built using Vanilla-JS which helps to pick colours for the website to enrich the user-interface.It also has template where you can change the colours of the components.",
                href:"https://ui-picker.netlify.app/",   
                ghref:"https://github.com/sarulathadurai/ui-picker",
                src:ui,
                stack:"HTML,CSS,JavaScript"
            },
            {
                name:" 🤯 Memory World 🤯 ",
                description:"Built a memory-card game in Vanilla js to all the Ben-10 fans who are challenged to match the correct aliens.",
                href:"https://ben10memoryworld.netlify.app/",   
                ghref:"https://github.com/sarulathadurai/memory-game",
                src:memory,
                stack:"HTML,CSS,JavaScript"
            },
            {
                name:" 🤯 Quiz App 🤯",
                description:"A quiz app on javascript which may help tune yourself for an interview.Answer soon as clock ticks!",
                href:"https://quiz-in-javascript.netlify.app/",
                ghref:"https://github.com/sarulathadurai/QuizApp", 
                src:quiz,  
                stack:"React ,Bootstrap"
            },
            {
                name:" 📖 Dictionary 📖",
                description:" Life is all about find meaning of your life.For finding meaning for words here is a dictionary where you can get meanings of words.",
                href:"https://findmeaning.netlify.app/",
                ghref:"https://github.com/sarulathadurai/Dictionary.git",   
                src:dictionary,
                stack:"React, Bootstrap ,googleApi"
            },
            {
                name:" ⛈️ Weather Finder ⛈️",
                description:"Ever wondered what the other part of world dealing with.This weather app helps you to get the live weather conditions of any part of the world.",
                href:"https://weathersearcher.netlify.app/", 
                ghref:"https://github.com/sarulathadurai/weather",
                src:weather,
                stack:"React, Bootstrap,OpenWeatherMap Api"
            },
            {
                name:"📜 Lyric Finder 📜",
                description:"Ever wondered what is the lyrics of the song which I am hearing? LyricFinder is here to help you get the lyrics.",
                href:"https://lyricfinderz.netlify.app/",   
                ghref:"https://github.com/sarulathadurai/LyricFinder",
                src:lyric,
                stack:"React, Bootstrap ,Rest Api"
            }
        ]

   
    return ( 
        <div>
            <h1 className="Title" id="projects">Projects</h1>
            <div className="column">
               {project.map((item,index)=>{
                 return (                  
                     <div key={index} className="row"> 
                        <div>
                            <img src={item.src} className="img-align" alt="demo"></img>
                        </div>
                        <div className="Content">
                            <h4 className="Project-title">{item.name}</h4>
                            <p className="Project-desc">{item.description}</p>
                            <span className="stack">{item.stack}</span><br/>
                            <span>
                                <a href={item.ghref} target = "_blanck">
                                    <i  className="fab fa-github"></i>
                                </a>
                                <a href={item.href} target = "_blanck">
                                  <i className="fas fa-external-link-alt"></i>
                                </a>
                            </span>
                        </div>                
                     </div>    
                 );
                })}
            </div>
        </div>
     );
}
 
export default Project;