window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    const button1 = document.querySelector("#button1");
    const button2 = document.querySelector("#button2");
    const button3 = document.querySelector("#button3");
    const button4 = document.querySelector("#button4");
    var lineSize = 10;
    var cr = "black";
    

    canvas.height = 650;
    canvas.width = innerWidth;
    
    let painting = false;

    button1.addEventListener("click", red);
    button2.addEventListener("click", blue);
    button3.addEventListener("click", green);
    button4.addEventListener("click", black);

    function red(){
        cr = "red";
        }
    function blue(){
        cr = "blue";
        }
    function green(){
        cr = "green";
        }
    function black(){
        cr = "black";
        }
    
    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishPosition(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting) return;
        ctx.lineWidth = lineSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = cr;
        

        ctx.lineTo(e.clientX, e.clientY-40);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY-40);
    
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishPosition);
    canvas.addEventListener("mousemove", draw);


})