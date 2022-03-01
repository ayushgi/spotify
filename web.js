console.log("Welcome to spotify");
let songIndex= 0;
let audioElement= new Audio('song/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myprogress = document.getElementById('progress');
let song = [
    {songName: "sanam Re" , filePath: "song/1.mp3" },
    {songName: "sanam Re" , filePath: "song/2.mp3"  },
    {songName: "sanam Re" , filePath: "song/3.mp3" },
    {songName: "sanam Re" , filePath: "song/4.mp3" },
    {songName: "sanam Re" , filePath: "song/5.mp3"  },
    {songName: "sanam Re" , filePath: "song/6.mp3"  },
    {songName: "sanam Re" , filePath: "song/7.mp3" },
    {songName: "sanam Re" , filePath: "song/8.mp3" },
    {songName: "sanam Re" , filePath: "song/9.mp3" },
    {songName: "sanam Re" , filePath: "song/10.mp3" },
]
masterPlay.addEventListener('click' , () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myprogress.value = progress;
});
myprogress.addEventListener('change', ()=>{
    audioElement.currentTime = myprogress.value * audioElement.duration/100;
})
const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
        element.target.classList.remove('ja-pause-circle');
        element.classList.add('a-play-circle');
})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeallplay();
        index = parseInt(e.target.id);
        e.target.classList.remove('ja-play-circle');
        e.target.classList.add('ja-pause-circle');
        audioElement.src = `song/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.remove('ja-play-circle');
        masterPlay.add('ja-pause-circle');
    })
})
