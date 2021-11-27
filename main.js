//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
gw=75;
gh=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
gx=5;
gy=225;

function add() {
	//upload car, and background images on the canvas.
	bimg_tag=new Image();
    bimg_tag.onload=uploadbg;
    bimg_tag.src=background_image;

    rimg_tag=new Image();
    rimg_tag.onload=uploadrg;
    rimg_tag.src=greencar_image; 
}

function uploadbg(){
    ctx.drawImage(bimg_tag,0,0,canvas.width,canvas.height);
}
function uploadrg(){
    ctx.drawImage(rimg_tag,gx,gy,gw,gh);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up (){
    if (gy>=0){
        gy=gy-10;
        console.log("when up arrow is pressed,x="+gx+"y="+gy);
        uploadrg();
        uploadbg();
    }
}

function down (){
    if (gy<=350){
        gy=gy+10;
        console.log("when down arrow is pressed,x="+gx+"y="+gy);
        uploadrg();
        uploadbg();
    }
}

function right (){
    if (gx<=750){
        gx=gx+10;
        console.log("when right arrow is pressed,x="+gx+"y="+gy);
        uploadrg();
        uploadbg();
    }
}

function left(){
    if (gx>=0){
        gx=gx+10;
        console.log("when lrft arrow is pressed,x="+gx+"y="+gy);
        uploadrg();
        uploadbg();
    }
}
