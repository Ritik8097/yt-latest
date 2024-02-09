import express from 'express';

import cors from 'cors';


const app = express();

app.use(cors());


app.get('/',(req,res)=>{
    res.json([{
        id:1,
        name:"Teri Yaddon main khoya rhta hu",
        link:'https://www.youtube.com/embed/vXMJhxUaGkw?playlist=vXMJhxUaGkw&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/vXMJhxUaGkw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMvb1-iO7vk8XgwRblGe3VVTKsTw",
        videoId:'vXMJhxUaGkw'
         
    },
  
    {
        id:2,
        name:"Dekhne Walo ne",
        link:'https://www.youtube.com/embed/FQtAky4tw9s?playlist=FQtAky4tw9s&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/FQtAky4tw9s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCI32bK-hxZyppA_eb_i_PiXr_faA",
           videoId:'FQtAky4tw9s'
    },
  
    {
        id:3,
        name:"Wo Ladki Bahot Yaad Aati h",
        link:'https://www.youtube.com/embed/0APBFIRDGz0?playlist=0APBFIRDGz0&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/0APBFIRDGz0/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtgiAAtAFigIMCAAQARhlIEwoVzAP&rs=AOn4CLATte0jBaqqBP8JIoyjdozm119OHQ",
        videoId:'0APBFIRDGz0'
    },
    {
        id:4,
        name:"Let Her Go x Husn - Version 2 (Gravero Mashup) | Anuv Jain",
        link:'https://www.youtube.com/embed/fF4XYwZtKb0?playlist=fF4XYwZtKb0&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/fF4XYwZtKb0/hqdefault.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhwgg4Csv8S_vpWu8oID3MN9-2Hg",
        videoId:'fF4XYwZtKb0'
    },
  
    
    
    {
        id:11,
        name:"English Hindi Mix Lofi Songs 2022 Top Hit Lofi Songs Mashup 2022",
        link:'https://www.youtube.com/embed/oGg3kzoR6lw?playlist=oGg3kzoR6lw&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/oGg3kzoR6lw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA0DaZCjZE4tTe8zxBelGstP6cqRA",
        videoId:'oGg3kzoR6lw'
    },
    {
        id:5,
        name:"30 minutes English x Hindi lofi | Study chill | Ep 2 Of Relaxing Mashups",
        link:'https://www.youtube.com/embed/CmHfWSxt0UQ?playlist=CmHfWSxt0UQ&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/CmHfWSxt0UQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCNFl38prxUMDxlwO3LfTR5h8XDSw",
         videoId:'CmHfWSxt0UQ'
    },
    {
        id:6,
        name:"Husn (Slowed + Reverb)",
        link:'https://www.youtube.com/embed/GLJbEu2WRRY?playlist=GLJbEu2WRRY&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/GLJbEu2WRRY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyp4v7lyALDWPrQTYY5vDqeiTIMA",
         videoId:'GLJbEu2WRRY'
    },
    {
        id:7,
        name:"English Hindi Mix Lofi Songs 2022 Top Hit Lofi Songs Mashup 2022",
        link:'https://www.youtube.com/embed/oGg3kzoR6lw?playlist=oGg3kzoR6lw&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/oGg3kzoR6lw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA0DaZCjZE4tTe8zxBelGstP6cqRA",
         videoId:'oGg3kzoR6lw'
    },
               {
        id:12,
        name:"Untitled #13 by glwzbll ( TikTok Version ) - SLOWED TO PERFECTION & REVERB ( 1 HOUR REMIX )",
        link:'https://www.youtube.com/embed/Y0cayDl_NCI?playlist=Y0cayDl_NCI&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/Y0cayDl_NCI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDZ3TN-QERmn1j782FDAwywhPjqgA",
           videoId:'Y0cayDl_NCI'          
    },
    {
        id:13,
        name:"Memory reboot (Ultra slowed & reverb)",
        link:'https://www.youtube.com/embed/r_wjTjwyY6o?playlist=r_wjTjwyY6o&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/r_wjTjwyY6o/hqdefault.jpg",
          videoId:'r_wjTjwyY6o' 
    },
    {
        id:14,
        name:"METAMORPHOSIS + SIGMA // SLOWED + REVERB // 1 HOUR",
        link:'https://www.youtube.com/embed/yPcyk-9yXnk?playlist=yPcyk-9yXnk&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/yPcyk-9yXnk/hqdefault.jpg",
          videoId:'yPcyk-9yXnk' 
    },
    {
        id:15,
        name:"After Dark x Sweater Weather in rainy night | 1 hour loop",
        link:'https://www.youtube.com/embed/k7903SnxR4I?playlist=k7903SnxR4I&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/k7903SnxR4I/hqdefault.jpg",
         videoId:'k7903SnxR4I'
    },
    {
        id:16,
        name:"Music evokes emotions, which bring happiness and sadness",
        link:'https://www.youtube.com/embed/DrVuH57SyJg?playlist=DrVuH57SyJg&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/DrVuH57SyJg/hqdefault.jpg",
        videoId:'DrVuH57SyJg'
    },
    {
        id:17,
        name:"ＬＡＴＥ　ＮＩＧＨＴ　ＤＲＩＶＥ - Melancholic music",
        link:'https://www.youtube.com/embed/tynU3bIj9aE?playlist=tynU3bIj9aE&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/tynU3bIj9aE/hqdefault.jpg",
        videoId:'tynU3bIj9aE'
    },
    {
        id:18,
        name:"Alone Night Mashup | Slowed & Reverb Mashup6 2023 heart",
        link:'https://www.youtube.com/embed//bhzSUBZrr2w?playlist=bhzSUBZrr2w&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/bhzSUBZrr2w/hqdefault.jpg",
        videoId:'bhzSUBZrr2w'
    },
    {
        id:19,
        name:"Ram Siya Ram/राम सिया राम/Lofi Version Mangal Bhawan Amangal Hari One hour straight//Ram Bhajan",
        link:'https://www.youtube.com/embed/ky3QhRlUO5s?playlist=ky3QhRlUO5s&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/ky3QhRlUO5s/hqdefault.jpg",
        videoId:'ky3QhRlUO5s'
    },
    {
        id:20,
        name:"Tum se | Lofi Songs | [slowed+reverb]",
        link:'https://www.youtube.com/embed/_PpI3rGQsX0?playlist=_PpI3rGQsX0&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/_PpI3rGQsX0/hqdefault.jpg",
        videoId:'_PpI3rGQsX0'
    },
              {
        id:21,
        name:"Hale dil (Slowed + Reverb)",
        link:'https://www.youtube.com/embed/ONCo4OU2Ayo?playlist=ONCo4OU2Ayo&autoplay=1&iv_load_policy=3&loop=1&start=',
        thumbnail:"https://i.ytimg.com/vi/ONCo4OU2Ayo/hqdefault.jpg",
                  videoId:'ONCo4OU2Ayo'
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
