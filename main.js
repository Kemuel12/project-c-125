LeftWristX=0;
RightWristX=0;
Difference=0;

function setup()
{
     canvas=createCanvas(550,500)
     canvas.position(560,100)

     video=createCapture(VIDEO);
     video.size(560,500);

     poseNet=ml5.poseNet('pose', modelLoaded);
     poseNet.on('pose', gotPoses);
}

function draw()
{
    background('red');
    document.getElementById("text_side_width").innerHtml="Font size of the text will be = "+Difference+"px";
    textSize(Difference);
    fill("white")
    text("WhiteHatJR",300,200);
}

function modelLoaded()
{
    console.log("Posenet is initialised")
}

function gotPoses(results)
{
 if(results.length>0)
 {
     console.log(results);
     LeftWristX=results[0].pose.leftWrist.x;
     RightWristX=results[0].pose.rightWrist.x;
     Difference=floor(LeftWristX-RightWristX);
     console.log("LeftWristX="+LeftWristX+"RightWristX="+RightWristX+"Difference="+Difference);
     
 }
}