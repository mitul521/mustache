function preload(){
    mustache=loadImage('https://e7.pngegg.com/pngimages/101/800/png-clipart-handlebar-moustache-beard-moustache-fashion-monochrome-thumbnail.png');
    }
    function setup(){
        canvas=createCanvas(300,300);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();
    }
    function modeloaded(){
        console.log("modeloaded");
    }
    function draw() {
        image(video,0,0,300,300);
    }
function takeSnap() {
 save('my_filter_pic.png');
}