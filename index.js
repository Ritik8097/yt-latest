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
               {
        id:12,
        name:"Untitled #13 by glwzbll ( TikTok Version ) - SLOWED TO PERFECTION & REVERB ( 1 HOUR REMIX )",
        link:'https://www.youtube.com/embed/Y0cayDl_NCI?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/Y0cayDl_NCI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDZ3TN-QERmn1j782FDAwywhPjqgA"
    },
    {
        id:13,
        name:"Memory reboot (Ultra slowed & reverb)",
        link:'https://www.youtube.com/embed/r_wjTjwyY6o?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/r_wjTjwyY6o/hqdefault.jpg"
    },
    {
        id:14,
        name:"METAMORPHOSIS + SIGMA // SLOWED + REVERB // 1 HOUR",
        link:'https://www.youtube.com/embed/yPcyk-9yXnk?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/yPcyk-9yXnk/hqdefault.jpg"
    },
    {
        id:15,
        name:"After Dark x Sweater Weather in rainy night | 1 hour loop",
        link:'https://www.youtube.com/embed/k7903SnxR4I?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/k7903SnxR4I/hqdefault.jpg"
    },
    {
        id:16,
        name:"Music evokes emotions, which bring happiness and sadness",
        link:'https://www.youtube.com/embed/DrVuH57SyJg?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/DrVuH57SyJg/hqdefault.jpg"
    },
    {
        id:17,
        name:"ＬＡＴＥ　ＮＩＧＨＴ　ＤＲＩＶＥ - Melancholic music",
        link:'https://www.youtube.com/embed/tynU3bIj9aE?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/tynU3bIj9aE/hqdefault.jpg"
    },
    {
        id:18,
        name:"Alone Night Mashup | Slowed & Reverb Mashup6 2023 heart",
        link:'https://www.youtube.com/embed//bhzSUBZrr2w?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/bhzSUBZrr2w/hqdefault.jpg"
    },
    {
        id:19,
        name:"Ram Siya Ram/राम सिया राम/Lofi Version Mangal Bhawan Amangal Hari One hour straight//Ram Bhajan",
        link:'https://www.youtube.com/embed/ky3QhRlUO5s?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/ky3QhRlUO5s/hqdefault.jpg"
    },
    {
        id:20,
        name:"Tum se | Lofi Songs | [slowed+reverb]",
        link:'https://www.youtube.com/embed/_PpI3rGQsX0?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/_PpI3rGQsX0/hqdefault.jpg"
    },
              {
        id:21,
        name:"Hale dil (Slowed + Reverb)",
        link:'https://www.youtube.com/embed/ONCo4OU2Ayo?autoplay=1&mute=0&enablejsapi=1',
        thumbnail:"https://i.ytimg.com/vi/ONCo4OU2Ayo/hqdefault.jpg"
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
