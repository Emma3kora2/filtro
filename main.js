function preload() {
    ojo = loadImage('Ojo.png');
    corazón =loadImage('hearte.png');
}

function setup() {
    canvas =createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
 console.log('PoseNet Is Initialized');
}

function gotPoses(result) {
   if (result.length > 0) {
    console.log(result);
    console.log("lefteye x = "+ result[0].pose.leftEye.x);
    console.log("lefteye y = "+ result[0].pose.leftEye.y);
    console.log("lefteye x = "+ result[0].pose.rightEye.x);
    console.log("lefteye y = "+ result[0].pose.rightEye.y);
    
   rigthX=result[0].pose.rightEye.x-3;
   rightY=result[0].pose.rightEye.y-3;

   leftX=result[0].pose.leftEye.x-3;
   leftY=result[0].pose.leftEye.y-3;

   rigthHeartX=result[0].pose.rightEye.x+1;
   rightHeartY=result[0].pose.rightEye.y+10;

   leftHeartX=result[0].pose.leftEye.x-1;
   leftHeartY=result[0].pose.leftEye.y+10;  
   } 
}
function draw() {
    image(video,0,0,300,300);
    image(ojo,rigthX,rightY,5,7);
    image(ojo,leftX,leftY,5,7);

    image(corazón,rigthHeartX,rightHeartY,5,7);
    image(corazón,leftHeartX,leftHeartY,5,7);
   }
   function take_snapshot() {
       save('myFilterImage.png');
   }

   rigthX=0
   rightY=0

   leftX=0
   leftY=0

   rigthHeartX=0
   rightHeartY=0

   leftHeartX=0
   leftHeartY=0