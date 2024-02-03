import express from 'express';

import cors from 'cors';


const app = express();

app.use(cors());


app.get('/',(req,res)=>{
    res.json([{
        id:1,
        name:"Teri Yaddon main khoya rhta hu",
        link:'https://www.youtube.com/embed/vXMJhxUaGkw?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/vXMJhxUaGkw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMvb1-iO7vk8XgwRblGe3VVTKsTw",
    
         
    },
  
    {
        id:2,
        name:"Dekhne Walo ne",
        link:'https://www.youtube.com/embed/FQtAky4tw9s?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/FQtAky4tw9s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCI32bK-hxZyppA_eb_i_PiXr_faA"

    },
  
    {
        id:3,
        name:"Wo Ladki Bahot Yaad Aati h",
        link:'https://www.youtube.com/embed/0APBFIRDGz0?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/0APBFIRDGz0/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtgiAAtAFigIMCAAQARhlIEwoVzAP&rs=AOn4CLATte0jBaqqBP8JIoyjdozm119OHQ"
    },
    {
        id:4,
        name:"Let Her Go x Husn - Version 2 (Gravero Mashup) | Anuv Jain",
        link:'https://www.youtube.com/embed/fF4XYwZtKb0?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/fF4XYwZtKb0/hqdefault.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhwgg4Csv8S_vpWu8oID3MN9-2Hg"
    },
  
    
    
    {
        id:11,
        name:"English Hindi Mix Lofi Songs 2022 Top Hit Lofi Songs Mashup 2022",
        link:'https://www.youtube.com/embed/oGg3kzoR6lw?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/oGg3kzoR6lw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA0DaZCjZE4tTe8zxBelGstP6cqRA"
    },
    {
        id:5,
        name:"30 minutes English x Hindi lofi | Study chill | Ep 2 Of Relaxing Mashups",
        link:'https://www.youtube.com/embed/CmHfWSxt0UQ?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/CmHfWSxt0UQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCNFl38prxUMDxlwO3LfTR5h8XDSw"
    },
    {
        id:6,
        name:"Husn (Slowed + Reverb)",
        link:'https://www.youtube.com/embed/GLJbEu2WRRY?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/GLJbEu2WRRY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyp4v7lyALDWPrQTYY5vDqeiTIMA"
    },
    {
        id:7,
        name:"English Hindi Mix Lofi Songs 2022 Top Hit Lofi Songs Mashup 2022",
        link:'https://www.youtube.com/embed/oGg3kzoR6lw?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/oGg3kzoR6lw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA0DaZCjZE4tTe8zxBelGstP6cqRA"
    },
   

])
function onPlayerStateChange(event) {      
    if (event.data == 0)
           window.location.href = 'https://www.duckduckgo.com';
  }
  })


 
 
  

app.listen(5002,()=>{
    console.log("server is working");
})
