    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const body=document.querySelector('body');

    const randomColor=function(){
        const hex="0123456789ABCDEF";
        let color="#";

        for (let i=0;i<6;i++){
            color+=hex[Math.floor(Math.random()*16)]       }
        return color;
    }
    
    let Id;
    startButton.addEventListener('click',()=>{
        Id=setInterval(()=>{
            
            body.style.backgroundColor=randomColor();
            console.log(randomColor());
            
        },2000);
    })

    stopButton.addEventListener('click',()=>{
        clearInterval(Id);
        console.log("Stopped");
        body.style.backgroundColor="#FFFFFF";
        
    })