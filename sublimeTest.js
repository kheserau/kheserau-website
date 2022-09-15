const canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
//canvas.width = 400;
//canvas.height = 250;


const colors = document.getElementById("colors");
const colors1 = document.getElementById("colors1");
const colors2 = document.getElementById("colors2");
const colors3 = document.getElementById("colors3");
const colors4 = document.getElementById("colors4");

	colors1.style.display = "none";
	colors2.style.display = "none";
	colors3.style.display = "none";
	colors4.style.display = "none";

const sqTrans = document.getElementById("sqTrans");
const sqTrans1 = document.getElementById("sqTrans1");
const sqTrans2 = document.getElementById("sqTrans2");
const sqTrans3 = document.getElementById("sqTrans3");
const sqTrans4 = document.getElementById("sqTrans4");

	sqTrans1.style.display = "none";
	sqTrans2.style.display = "none";
	sqTrans3.style.display = "none";
	sqTrans4.style.display = "none";


const submitDraw = document.getElementById("submitDraw");
const submitDraw1 = document.getElementById("submitDraw1");
const submitDraw2 = document.getElementById("submitDraw2");
const submitDraw3 = document.getElementById("submitDraw3");
const submitDraw4 = document.getElementById("submitDraw4");

	submitDraw1.style.display = "none";
	submitDraw2.style.display = "none";
	submitDraw3.style.display = "none";
	submitDraw4.style.display = "none";

const move = document.getElementById("move");
const move1 = document.getElementById("move1");
const move2 = document.getElementById("move2");
const move3 = document.getElementById("move3");

const moveA1 = document.getElementById("moveA1");
const moveA2 = document.getElementById("moveA2");
const moveA3 = document.getElementById("moveA3");
const moveA4 = document.getElementById("moveA4");

	moveA1.style.display = "none";
	moveA2.style.display = "none";
	moveA3.style.display = "none";
	moveA4.style.display = "none";

const moveB1 = document.getElementById("moveB1");
const moveB2 = document.getElementById("moveB2");
const moveB3 = document.getElementById("moveB3");
const moveB4 = document.getElementById("moveB4");

	moveB1.style.display = "none";
	moveB2.style.display = "none";
	moveB3.style.display = "none";
	moveB4.style.display = "none";

const moveC1 = document.getElementById("moveC1");
const moveC2 = document.getElementById("moveC2");
const moveC3 = document.getElementById("moveC3");
const moveC4 = document.getElementById("moveC4");

	moveC1.style.display = "none";
	moveC2.style.display = "none";
	moveC3.style.display = "none";
	moveC4.style.display = "none";

const moveD1 = document.getElementById("moveD1");
const moveD2 = document.getElementById("moveD2");
const moveD3 = document.getElementById("moveD3");
const moveD4 = document.getElementById("moveD4");

	moveD1.style.display = "none";
	moveD2.style.display = "none";
	moveD3.style.display = "none";
	moveD4.style.display = "none";



const increaseA1 = document.getElementById("increaseA1");
const increaseA2 = document.getElementById("increaseA2");
const increaseA3 = document.getElementById("increaseA3");
const increaseA4 = document.getElementById("increaseA4");

const increase1 = document.getElementById("increase1");
const increase2 = document.getElementById("increase2");
const increase3 = document.getElementById("increase3");
const increase4 = document.getElementById("increase4");

	increaseA1.style.display = "none";
	increaseA2.style.display = "none";
	increaseA3.style.display = "none";
	increaseA4.style.display = "none";


const increaseB1 = document.getElementById("increaseB1");
const increaseB2 = document.getElementById("increaseB2");
const increaseB3 = document.getElementById("increaseB3");
const increaseB4 = document.getElementById("increaseB4");

	increaseB1.style.display = "none";
	increaseB2.style.display = "none";
	increaseB3.style.display = "none";
	increaseB4.style.display = "none";

const increaseC1 = document.getElementById("increaseC1");
const increaseC2 = document.getElementById("increaseC2");
const increaseC3 = document.getElementById("increaseC3");
const increaseC4 = document.getElementById("increaseC4");

	increaseC1.style.display = "none";
	increaseC2.style.display = "none";
	increaseC3.style.display = "none";
	increaseC4.style.display = "none";

const increaseD1 = document.getElementById("increaseD1");
const increaseD2 = document.getElementById("increaseD2");
const increaseD3 = document.getElementById("increaseD3");
const increased4 = document.getElementById("increaseD4");

	increaseD1.style.display = "none";
	increaseD2.style.display = "none";
	increaseD3.style.display = "none";
	increaseD4.style.display = "none";

	const fillSquarebuttons = document.getElementById("fillSquarebuttons");	
	const fillTextButtons = document.getElementById("fillTextButtons");	
	const fillCircleButtons = document.getElementById("fillCircleButtons");	
	const strokeSquareButtons = document.getElementById("strokeSquareButtons");	
	const strokeTextButtons = document.getElementById("strokeTextButtons");	
	const strokeCircleButtons = document.getElementById("strokeCircleButtons");	
	const imageButtons = document.getElementById("imageButtons");
	const leftArcButtons = document.getElementById("leftArcButtons");
	const rightArcButtons = document.getElementById("rightArcButtons");
	const holeSquareButtons = document.getElementById("holeSquareButtons");
		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
	
	
function canva(){
	ctx.globalAlpha = 1;
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(canva);
}
canva();
let x = 10;
let y = canvas.height/2-25;
let vx = 0;
let vy = 0;
let w = 50;
let h = 50;
let vw = 0;
let vh = 0;


	
	

function update(){
   fillSquarebuttons.style.display = "inline";
    x += vx;
    y += vy;
    w += vw;
    h += vh;
    

	var drawColor = colors.value;
	var trans = sqTrans.value;
	ctx.beginPath();
    ctx.fillStyle = drawColor;
    ctx.globalAlpha = trans;
    ctx.fillRect(x, y, w, h)
    ctx.closePath();
    ctx.restore();
    ctx.globalAlpha = 1.1;
    requestAnimationFrame(update)
    submitDraw1.style.display = "inline";
    submitDraw.style.display = "none";

    	fillSquarebuttons.style.display = "inline";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
//update();
       
increase1.addEventListener("pointerdown", () =>{
    vh = -2;
});
increase1.addEventListener("pointerup", () =>{
    vh = 0;
});
increase2.addEventListener("pointerdown", () =>{
    vw = 2;
});
increase2.addEventListener("pointerup", () =>{
    vw = 0;
});
increase3.addEventListener("pointerdown", () =>{
    vh = 2;
});
increase3.addEventListener("pointerup", () =>{
    vh = 0;
});
increase4.addEventListener("pointerdown", () =>{
    vw = -2;
});
increase4.addEventListener("pointerup", () =>{
    vw = 0;
});
//widthHeightExpansion
move.addEventListener("pointerdown", () =>{
    vy = -2;
});
move.addEventListener("pointerup", () =>{
    vy = 0;
});
move1.addEventListener("pointerdown", () =>{
    vx = 2;
});
move1.addEventListener("pointerup", () =>{
    vx = 0;
});
move2.addEventListener("pointerdown", () =>{
    vy = 2;
});
move2.addEventListener("pointerup", () =>{
    vy = 0;
});
move3.addEventListener("pointerdown", () =>{
    vx = -3;
});
move3.addEventListener("pointerup", () =>{
    vx = 0;
});
//second square

let x1 = 70;
let y1 = canvas.height/2-25;
let vx1 = 0;
let vy1 = 0;
let w1 = 50;
let h1 = 50;
let vw1 = 0;
let vh1 = 0;

    
	

function update1(){
    
    x1 += vx1;
    y1 += vy1;
    w1 += vw1;
    h1 += vh1;

    var drawColor = colors1.value;
    var trans1 = sqTrans1.value;
	ctx.beginPath();
    ctx.fillStyle = drawColor;
    ctx.globalAlpha = trans1;
    ctx.fillRect(x1, y1, w1, h1);
    ctx.closePath();
    ctx.restore();
    requestAnimationFrame(update1)
    colors1.style.display = "inline";
    colors.style.display = "none";

    sqTrans.style.display = "none";
    sqTrans1.style.display = "inline";

    submitDraw2.style.display = "inline";
    submitDraw1.style.display = "none";
    moveA1.style.display = "inline";
    moveA2.style.display = "inline";
    moveA3.style.display = "inline";
    moveA4.style.display = "inline";
    move.style.display = "none";
    move1.style.display = "none";
    move2.style.display = "none";
    move3.style.display = "none";

    increaseA1.style.display = "inline";
    increaseA2.style.display = "inline";
    increaseA3.style.display = "inline";
    increaseA4.style.display = "inline";
    increase1.style.display = "none";
    increase2.style.display = "none";
    increase3.style.display = "none";
    increase4.style.display = "none";

    	fillSquarebuttons.style.display = "inline";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";


}
//update1();
       
moveA1.addEventListener("pointerdown", () =>{
    vy1 = -3;
});
moveA1.addEventListener("pointerup", () =>{
    vy1 = 0;
});
moveA2.addEventListener("pointerdown", () =>{
    vx1 = 3;
});
moveA2.addEventListener("pointerup", () =>{
    vx1 = 0;
});
moveA3.addEventListener("pointerdown", () =>{
    vy1 = 3;
});
moveA3.addEventListener("pointerup", () =>{
    vy1 = 0;
});
moveA4.addEventListener("pointerdown", () =>{
    vx1 = -3;
});
moveA4.addEventListener("pointerup", () =>{
    vx1 = 0;
});



//expanding code
      
increaseA1.addEventListener("pointerdown", () =>{
    vh1 = -2;
});
increaseA1.addEventListener("pointerup", () =>{
    vh1 = 0;
});
increaseA2.addEventListener("pointerdown", () =>{
    vw1 = 2;
});
increaseA2.addEventListener("pointerup", () =>{
    vw1 = 0;
});
increaseA3.addEventListener("pointerdown", () =>{
    vh1 = 2;
});
increaseA3.addEventListener("pointerup", () =>{
    vh1 = 0;
});
increaseA4.addEventListener("pointerdown", () =>{
    vw1 = -2;
});
increaseA4.addEventListener("pointerup", () =>{
    vw1 = 0;
});

//third square


let x2 = 130;
let y2 = canvas.height/2-25;
let vx2 = 0;
let vy2 = 0;
let w2 = 50;
let h2 = 50;
let vw2 = 0;
let vh2 = 0;

   
	

function update2(){
    x2 += vx2;
    y2 += vy2;
    w2 += vw2;
    h2 += vh2;
    var drawColor = colors2.value;
     var trans2 = sqTrans2.value;
	ctx.beginPath();
    ctx.fillStyle = drawColor;
    ctx.globalAlpha = trans2;
    ctx.fillRect(x2, y2, w2, h2)
    ctx.closePath();
    ctx.restore();
    requestAnimationFrame(update2)

    colors2.style.display = "inline";
    colors1.style.display = "none";

    sqTrans1.style.display = "none";
    sqTrans2.style.display = "inline";

    submitDraw3.style.display = "inline";
    submitDraw2.style.display = "none";
    moveB1.style.display = "inline";
    moveB2.style.display = "inline";
    moveB3.style.display = "inline";
    moveB4.style.display = "inline";
    moveA1.style.display = "none";
    moveA2.style.display = "none";
    moveA3.style.display = "none";
    moveA4.style.display = "none";

    increaseB1.style.display = "inline";
    increaseB2.style.display = "inline";
    increaseB3.style.display = "inline";
    increaseB4.style.display = "inline";
    increaseA1.style.display = "none";
    increaseA2.style.display = "none";
    increaseA3.style.display = "none";
    increaseA4.style.display = "none";

    	fillSquarebuttons.style.display = "inline";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
//update2();
       
moveB1.addEventListener("pointerdown", () =>{
    vy2 = -2;
});
moveB1.addEventListener("pointerup", () =>{
    vy2 = 0;
});
moveB2.addEventListener("pointerdown", () =>{
    vx2 = 3;
});
moveB2.addEventListener("pointerup", () =>{
    vx2 = 0;
});
moveB3.addEventListener("pointerdown", () =>{
    vy2 = 3;
});
moveB3.addEventListener("pointerup", () =>{
    vy2 = 0;
});
moveB4.addEventListener("pointerdown", () =>{
    vx2 = -3;
});
moveB4.addEventListener("pointerup", () =>{
    vx2 = 0;
});



//expanding code
      
increaseB1.addEventListener("pointerdown", () =>{
    vh2 = -3;
});
increaseB1.addEventListener("pointerup", () =>{
    vh2 = 0;
});
increaseB2.addEventListener("pointerdown", () =>{
    vw2 = 2;
});
increaseB2.addEventListener("pointerup", () =>{
    vw2 = 0;
});
increaseB3.addEventListener("pointerdown", () =>{
    vh2 = 2;
});
increaseB3.addEventListener("pointerup", () =>{
    vh2 = 0;
});
increaseB4.addEventListener("pointerdown", () =>{
    vw2 = -2;
});
increaseB4.addEventListener("pointerup", () =>{
    vw2 = 0;
});

//fourth square

let x3 = 190;
let y3 = canvas.height/2-25;
let vx3 = 0;
let vy3 = 0;
let w3 = 50;
let h3 = 50;
let vw3 = 0;
let vh3 = 0;

    
    
	
function update3(){
    
    x3 += vx3;
    y3 += vy3;
    w3 += vw3;
    h3 += vh3;
    var drawColor = colors3.value;
    ctx.fillStyle = drawColor;
    var trans3 = sqTrans3.value;
	ctx.beginPath();
	ctx.globalAlpha = trans3;
    ctx.fillRect(x3, y3, w3, h3)
    ctx.restore();
    requestAnimationFrame(update3)

    colors3.style.display = "inline";
    colors2.style.display = "none";

    sqTrans2.style.display = "none";
    sqTrans3.style.display = "inline";

    submitDraw4.style.display = "inline";
    submitDraw3.style.display = "none";
    moveC1.style.display = "inline";
    moveC2.style.display = "inline";
    moveC3.style.display = "inline";
    moveC4.style.display = "inline";
    moveB1.style.display = "none";
    moveB2.style.display = "none";
    moveB3.style.display = "none";
    moveB4.style.display = "none";

    increaseC1.style.display = "inline";
    increaseC2.style.display = "inline";
    increaseC3.style.display = "inline";
    increaseC4.style.display = "inline";
    increaseB1.style.display = "none";
    increaseB2.style.display = "none";
    increaseB3.style.display = "none";
    increaseB4.style.display = "none";

    	fillSquarebuttons.style.display = "inline";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
//update3();
       
moveC1.addEventListener("pointerdown", () =>{
    vy3 = -2;
});
moveC1.addEventListener("pointerup", () =>{
    vy3 = 0;
});
moveC2.addEventListener("pointerdown", () =>{
    vx3 = 2;
});
moveC2.addEventListener("pointerup", () =>{
    vx3 = 0;
});
moveC3.addEventListener("pointerdown", () =>{
    vy3 = 2;
});
moveC3.addEventListener("pointerup", () =>{
    vy3 = 0;
});
moveC4.addEventListener("pointerdown", () =>{
    vx3 = -2;
});
moveC4.addEventListener("pointerup", () =>{
    vx3 = 0;
});



//expanding code
      
increaseC1.addEventListener("pointerdown", () =>{
    vh3 = -2;
});
increaseC1.addEventListener("pointerup", () =>{
    vh3 = 0;
});
increaseC2.addEventListener("pointerdown", () =>{
    vw3 = 2;
});
increaseC2.addEventListener("pointerup", () =>{
    vw3 = 0;
});
increaseC3.addEventListener("pointerdown", () =>{
    vh3 = 2;
});
increaseC3.addEventListener("pointerup", () =>{
    vh3 = 0;
});
increaseC4.addEventListener("pointerdown", () =>{
    vw3 = -2;
});
increaseC4.addEventListener("pointerup", () =>{
    vw3 = 0;
});
//five square

let x4 = 250;
let y4 = canvas.height/2-25;
let vx4 = 0;
let vy4 = 0;
let w4 = 50;
let h4 = 50;
let vw4 = 0;
let vh4 = 0;

    
	
function update4(){
    x4 += vx4;
    y4 += vy4;
    w4 += vw4;
    h4 += vh4;
    var drawColor = colors4.value;
    var trans4 = sqTrans4.value;
	ctx.beginPath();
	ctx.globalAlpha = trans4;
    ctx.fillStyle = drawColor;
    ctx.fillRect(x4, y4, w4, h4);
    ctx.closePath();
    ctx.restore();
    requestAnimationFrame(update4)

    colors4.style.display = "inline";
    colors3.style.display = "none";

    sqTrans4.style.display = "inline";
    sqTrans3.style.display = "none";

    submitDraw4.style.display = "inline";
    submitDraw3.style.display = "none";
    moveD1.style.display = "inline";
    moveD2.style.display = "inline";
    moveD3.style.display = "inline";
    moveD4.style.display = "inline";
    moveC1.style.display = "none";
    moveC2.style.display = "none";
    moveC3.style.display = "none";
    moveC4.style.display = "none";

    increaseD1.style.display = "inline";
    increaseD2.style.display = "inline";
    increaseD3.style.display = "inline";
    increaseD4.style.display = "inline";
    increaseC1.style.display = "none";
    increaseC2.style.display = "none";
    increaseC3.style.display = "none";
    increaseC4.style.display = "none";

    	fillSquarebuttons.style.display = "inline";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
//update4();
       
moveD1.addEventListener("pointerdown", () =>{
    vy4 = -2;
});
moveD1.addEventListener("pointerup", () =>{
    vy4 = 0;
});
moveD2.addEventListener("pointerdown", () =>{
    vx4 = 2;
});
moveD2.addEventListener("pointerup", () =>{
    vx4 = 0;
});
moveD3.addEventListener("pointerdown", () =>{
    vy4 = 2;
});
moveD3.addEventListener("pointerup", () =>{
    vy4 = 0;
});
moveD4.addEventListener("pointerdown", () =>{
    vx4 = -2;
});
moveD4.addEventListener("pointerup", () =>{
    vx4 = 0;
});

//expanding code
      
increaseD1.addEventListener("pointerdown", () =>{
    vh4 = -2;
});
increaseD1.addEventListener("pointerup", () =>{
    vh4 = 0;
});
increaseD2.addEventListener("pointerdown", () =>{
    vw4 = 2;
});
increaseD2.addEventListener("pointerup", () =>{
    vw4 = 0;
});
increaseD3.addEventListener("pointerdown", () =>{
    vh4 = 2;
});
increaseD3.addEventListener("pointerup", () =>{
    vh4 = 0;
});
increaseD4.addEventListener("pointerdown", () =>{
    vw4 = -2;
});
increaseD4.addEventListener("pointerup", () =>{
    vw4 = 0;
});

const fontColor = document.getElementById("fontcolor");
const fontWeight = document.getElementById("fontweight");
const fontSize = document.getElementById("fontsize");
const fontFamily = document.getElementById("fontfamily");
const messagetext = document.getElementById("messagetext");

const fontColor1 = document.getElementById("fontcolor1");
const fontWeight1 = document.getElementById("fontweight1");
const fontSize1 = document.getElementById("fontsize1");
const fontFamily1 = document.getElementById("fontfamily1");
const messagetext1 = document.getElementById("messagetext1");

	fontColor1.style.display = "none";
	fontWeight1.style.display = "none";
	fontSize1.style.display = "none";
	fontFamily1.style.display = "none";
	messagetext1.style.display = "none";

const fontColor2 = document.getElementById("fontcolor2");
const fontWeight2 = document.getElementById("fontweight2");
const fontSize2 = document.getElementById("fontsize2");
const fontFamily2 = document.getElementById("fontfamily2");
const messagetext2 = document.getElementById("messagetext2");

	fontColor2.style.display = "none";
	fontWeight2.style.display = "none";
	fontSize2.style.display = "none";
	fontFamily2.style.display = "none";
	messagetext2.style.display = "none";


const fontColor3 = document.getElementById("fontcolor3");
const fontWeight3 = document.getElementById("fontweight3");
const fontSize3 = document.getElementById("fontsize3");
const fontFamily3 = document.getElementById("fontfamily3");
const messagetext3 = document.getElementById("messagetext3");

	fontColor3.style.display = "none";
	fontWeight3.style.display = "none";
	fontSize3.style.display = "none";
	fontFamily3.style.display = "none";
	messagetext3.style.display = "none";


const fontColor4 = document.getElementById("fontcolor4");
const fontWeight4 = document.getElementById("fontweight4");
const fontSize4 = document.getElementById("fontsize4");
const fontFamily4 = document.getElementById("fontfamily4");
const messagetext4 = document.getElementById("messagetext4");

	fontColor4.style.display = "none";
	fontWeight4.style.display = "none";
	fontSize4.style.display = "none";
	fontFamily4.style.display = "none";
	messagetext4.style.display = "none";

const txtTrans = document.getElementById("txtTrans");
const txtTrans1 = document.getElementById("txtTrans1");
const txtTrans2 = document.getElementById("txtTrans2");
const txtTrans3 = document.getElementById("txtTrans3");
const txtTrans4 = document.getElementById("txtTrans4");

	txtTrans1.style.display = "none";
	txtTrans2.style.display = "none";
	txtTrans3.style.display = "none";
	txtTrans4.style.display = "none";

const write = document.getElementById("write");
const writeLeft = document.getElementById("writeLeft");
const writeUp = document.getElementById("writeUp");
const writeRight = document.getElementById("writeRight");
const writeBotton = document.getElementById("writeBotton");

const write1 = document.getElementById("write1");
const writeLeft1 = document.getElementById("writeLeft1");
const writeUp1 = document.getElementById("writeUp1");
const writeRight1 = document.getElementById("writeRight1");
const writeBotton1 = document.getElementById("writeBotton1");

	write1.style.display = "none";
	writeLeft1.style.display = "none";
	writeUp1.style.display = "none";
	writeRight1.style.display = "none";
	writeBotton1.style.display = "none";

const write2 = document.getElementById("write2");
const writeLeft2 = document.getElementById("writeLeft2");
const writeUp2 = document.getElementById("writeUp2");
const writeRight2 = document.getElementById("writeRight2");
const writeBotton2 = document.getElementById("writeBotton2");

	write2.style.display = "none";
	writeLeft2.style.display = "none";
	writeUp2.style.display = "none";
	writeRight2.style.display = "none";
	writeBotton2.style.display = "none";


const write3 = document.getElementById("write3");
const writeLeft3 = document.getElementById("writeLeft3");
const writeUp3 = document.getElementById("writeUp3");
const writeRight3 = document.getElementById("writeRight3");
const writeBotton3 = document.getElementById("writeBotton3");

	write3.style.display = "none";
	writeLeft3.style.display = "none";
	writeUp3.style.display = "none";
	writeRight3.style.display = "none";
	writeBotton3.style.display = "none";


const write4 = document.getElementById("write4");
const writeLeft4 = document.getElementById("writeLeft4");
const writeUp4 = document.getElementById("writeUp4");
const writeRight4 = document.getElementById("writeRight4");
const writeBotton4 = document.getElementById("writeBotton4");

	write4.style.display = "none";
	writeLeft4.style.display = "none";
	writeUp4.style.display = "none";
	writeRight4.style.display = "none";
	writeBotton4.style.display = "none";

	

let tx = 10;
let ty = canvas.height / 2;
let txv = 0;
let tyv = 0;
let transText;
	function paintTextTrans(){
	transText = txtTrans.value;
	}
let fWeight;
	function paintTextFontWeight(){
	fWeight = fontWeight.value;
	}
let fFamily;
	function paintTextFontFamily(){
	fFamily = fontFamily.value;
	}

function Writing(){
	
	fillTextButtons.style.display = "inline";
	tx += txv;
	ty += tyv;

	
	let fSize = fontSize.value;
	let fColor = fontColor.value;
	let messageText = messagetext.value;
	ctx.beginPath();
	ctx.font = fWeight + " " + fSize + "px " + fFamily;
	ctx.fillStyle = fColor;
	ctx.globalAlpha = transText;
 	ctx.fillText(messageText, tx, ty);
 	ctx.closePath();
 	ctx.restore();
 	requestAnimationFrame(Writing)

 	write.style.display = "none";
 	write1.style.display = "inline";

 		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "inline";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
//Writing();
writeLeft.addEventListener("pointerdown", () =>{

	txv = -2;
});
writeLeft.addEventListener("pointerup", () =>{

	txv = 0
});
writeUp.addEventListener("pointerdown", () =>{

	tyv = -2;
});
writeUp.addEventListener("pointerup", () =>{

	tyv = 0
});
writeRight.addEventListener("pointerdown", () =>{

	txv = 2;
});
writeRight.addEventListener("pointerup", () =>{

	txv = 0
});
writeBotton.addEventListener("pointerdown", () =>{

	tyv = 2;
});
writeBotton.addEventListener("pointerup", () =>{

	tyv = 0
});

let tx1 = 10;
let ty1 = canvas.height / 2;
let txv1 = 0;
let tyv1 = 0;
let transText1;
	function paintTextTrans1(){
	transText1 = txtTrans1.value;
	}
let fWeight1;
	function paintTextFontWeight1(){
	fWeight1 = fontWeight1.value;
	}
let fFamily1;
	function paintTextFontFamily1(){
	fFamily1 = fontFamily1.value;
	}

function Writing1(){
	
	//ctx.clearRect(tx1,ty1,tx1.length,-ty1.length);
	tx1 += txv1;
	ty1 += tyv1;

	
	
	let fSize1 = fontSize1.value;
	
	let fColor1 = fontColor1.value;
	let messageText1 = messagetext1.value;
	ctx.beginPath();
	ctx.globalAlpha = transText1;
	ctx.font = fWeight1 + " " + fSize1 + "px " + fFamily1;
	ctx.fillStyle = fColor1;
 	ctx.fillText(messageText1, tx1, ty1);
 	ctx.closePath();
 	ctx.restore();
 	requestAnimationFrame(Writing1)

 	txtTrans.style.display = "none";
 	txtTrans1.style.display = "inline";

 	fontColor.style.display = "none";
	fontWeight.style.display = "none";
	fontSize.style.display = "none";
	fontFamily.style.display = "none";
	messagetext.style.display = "none";

	fontColor1.style.display = "inline";
	fontWeight1.style.display = "inline";
	fontSize1.style.display = "inline";
	fontFamily1.style.display = "inline";
	messagetext1.style.display = "inline";

	write1.style.display = "none";
	writeLeft.style.display = "none";
	writeUp.style.display = "none";
	writeRight.style.display = "none";
	writeBotton.style.display = "none";

	write2.style.display = "inline";
	writeLeft1.style.display = "inline";
	writeUp1.style.display = "inline";
	writeRight1.style.display = "inline";
	writeBotton1.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "inline";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}

//Writing();
writeLeft1.addEventListener("pointerdown", () =>{

	txv1 = -2;
});
writeLeft1.addEventListener("pointerup", () =>{

	txv1 = 0
});
writeUp1.addEventListener("pointerdown", () =>{

	tyv1 = -2;
});
writeUp1.addEventListener("pointerup", () =>{

	tyv1 = 0
});
writeRight1.addEventListener("pointerdown", () =>{

	txv1 = 2;
});
writeRight1.addEventListener("pointerup", () =>{

	txv1 = 0
});
writeBotton1.addEventListener("pointerdown", () =>{

	tyv1 = 2;
});
writeBotton1.addEventListener("pointerup", () =>{

	tyv1 = 0
});


let tx2 = 10;
let ty2 = canvas.height / 2;
let txv2 = 0;
let tyv2 = 0;
let transText2;
	function paintTextTrans2(){
	transText2 = txtTrans2.value;
	}
let fWeight2;
	function paintTextFontWeight2(){
	fWeight2 = fontWeight2.value;
	}
let fFamily2;
	function paintTextFontFamily2(){
	fFamily2 = fontFamily2.value;
	}

function Writing2(){
	
	//ctx.clearRect(tx2,ty2,tx2.length,-ty2.length);
	tx2 += txv2;
	ty2 += tyv2;

	
	
	let fSize2 = fontSize2.value;
	let fColor2 = fontColor2.value;
	let messageText2 = messagetext2.value;
	ctx.beginPath();
	ctx.globalAlpha = transText2;
	ctx.font = fWeight2 + " " + fSize2 + "px " + fFamily2;
	ctx.fillStyle = fColor2;
 	ctx.fillText(messageText2, tx2, ty2);
 	ctx.closePath();
 	ctx.restore();
 	requestAnimationFrame(Writing2)

 	txtTrans1.style.display = "none";
 	txtTrans2.style.display = "inline";

 	fontColor1.style.display = "none";
	fontWeight1.style.display = "none";
	fontSize1.style.display = "none";
	fontFamily1.style.display = "none";
	messagetext1.style.display = "none";

	fontColor2.style.display = "inline";
	fontWeight2.style.display = "inline";
	fontSize2.style.display = "inline";
	fontFamily2.style.display = "inline";
	messagetext2.style.display = "inline";

	write2.style.display = "none";
	writeLeft1.style.display = "none";
	writeUp1.style.display = "none";
	writeRight1.style.display = "none";
	writeBotton1.style.display = "none";

	write3.style.display = "inline";
	writeLeft2.style.display = "inline";
	writeUp2.style.display = "inline";
	writeRight2.style.display = "inline";
	writeBotton2.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "inline";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}

//Writing();
writeLeft2.addEventListener("pointerdown", () =>{

	txv2 = -2;
});
writeLeft2.addEventListener("pointerup", () =>{

	txv2 = 0
});
writeUp2.addEventListener("pointerdown", () =>{

	tyv2 = -2;
});
writeUp2.addEventListener("pointerup", () =>{

	tyv2 = 0
});
writeRight2.addEventListener("pointerdown", () =>{

	txv2 = 2;
});
writeRight2.addEventListener("pointerup", () =>{

	txv2 = 0
});
writeBotton2.addEventListener("pointerdown", () =>{

	tyv2 = 2;
});
writeBotton2.addEventListener("pointerup", () =>{

	tyv2 = 0
});

let tx3 = 10;
let ty3 = canvas.height / 2;
let txv3 = 0;
let tyv3 = 0;
let transText3;
	function paintTextTrans3(){
	transText3 = txtTrans3.value;
	}
let fWeight3;
	function paintTextFontWeight3(){
	fWeight3 = fontWeight3.value;
	}
let fFamily3;
	function paintTextFontFamily3(){
	fFamily3 = fontFamily3.value;
	}

function Writing3(){
	
	//ctx.clearRect(tx3,ty3,tx3.length,-ty3.length);
	tx3 += txv3;
	ty3 += tyv3;


	
	
	let fSize3 = fontSize3.value;
	let fColor3 = fontColor3.value;
	let messageText3 = messagetext3.value;
	ctx.beginPath();
	ctx.globalAlpha = transText3;
	ctx.font = fWeight3 + " " + fSize3 + "px " + fFamily3;
	ctx.fillStyle = fColor3;
 	ctx.fillText(messageText3, tx3, ty3);
 	ctx.closePath();
 	ctx.restore();
 	requestAnimationFrame(Writing3)

 	txtTrans2.style.display = "none";
 	txtTrans3.style.display = "inline";

 	fontColor2.style.display = "none";
	fontWeight2.style.display = "none";
	fontSize2.style.display = "none";
	fontFamily2.style.display = "none";
	messagetext2.style.display = "none";

	fontColor3.style.display = "inline";
	fontWeight3.style.display = "inline";
	fontSize3.style.display = "inline";
	fontFamily3.style.display = "inline";
	messagetext3.style.display = "inline";

	write3.style.display = "none";
	writeLeft2.style.display = "none";
	writeUp2.style.display = "none";
	writeRight2.style.display = "none";
	writeBotton2.style.display = "none";

	write4.style.display = "inline";
	writeLeft3.style.display = "inline";
	writeUp3.style.display = "inline";
	writeRight3.style.display = "inline";
	writeBotton3.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "inline";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}

//Writing();
writeLeft3.addEventListener("pointerdown", () =>{

	txv3 = -2;
});
writeLeft3.addEventListener("pointerup", () =>{

	txv3 = 0
});
writeUp3.addEventListener("pointerdown", () =>{

	tyv3 = -2;
});
writeUp3.addEventListener("pointerup", () =>{

	tyv3 = 0
});
writeRight3.addEventListener("pointerdown", () =>{

	txv3 = 2;
});
writeRight3.addEventListener("pointerup", () =>{

	txv3 = 0
});
writeBotton3.addEventListener("pointerdown", () =>{

	tyv3 = 2;
});
writeBotton3.addEventListener("pointerup", () =>{

	tyv3 = 0
});


let tx4 = 10;
let ty4 = canvas.height / 2;
let txv4 = 0;
let tyv4 = 0;
let transText4;
	function paintTextTrans4(){
	transText4 = txtTrans4.value;
	}
let fWeight4;
	function paintTextFontWeight4(){
	fWeight4 = fontWeight4.value;
	}
let fFamily4;
	function paintTextFontFamily4(){
	fFamily4 = fontFamily4.value;
	}
function Writing4(){
	
	//ctx.clearRect(tx4,ty4,tx4.length,-ty4.length);
	tx4 += txv4;
	ty4 += tyv4;
	
	
	let fSize4 = fontSize4.value;
	let fColor4 = fontColor4.value;
	let messageText4 = messagetext4.value;
	ctx.beginPath();
	ctx.globalAlpha = transText4;
	ctx.font = fWeight4 + " " + fSize4 + "px " + fFamily4;
	ctx.fillStyle = fColor4;
 	ctx.fillText(messageText4, tx4, ty4);
 	ctx.closePath();
 	ctx.restore();
 	requestAnimationFrame(Writing4);

 	txtTrans3.style.display = "none";
 	txtTrans4.style.display = "inline";

 	fontColor3.style.display = "none";
	fontWeight3.style.display = "none";
	fontSize3.style.display = "none";
	fontFamily3.style.display = "none";
	messagetext3.style.display = "none";

	fontColor4.style.display = "inline";
	fontWeight4.style.display = "inline";
	fontSize4.style.display = "inline";
	fontFamily4.style.display = "inline";
	messagetext4.style.display = "inline";

	write4.style.display = "none";
	writeLeft3.style.display = "none";
	writeUp3.style.display = "none";
	writeRight3.style.display = "none";
	writeBotton3.style.display = "none";

	write4.style.display = "inline";
	writeLeft4.style.display = "inline";
	writeUp4.style.display = "inline";
	writeRight4.style.display = "inline";
	writeBotton4.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "inline";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}

//Writing();
writeLeft4.addEventListener("pointerdown", () =>{

	txv4 = -2;
});
writeLeft4.addEventListener("pointerup", () =>{

	txv4 = 0
});
writeUp4.addEventListener("pointerdown", () =>{

	tyv4 = -2;
});
writeUp4.addEventListener("pointerup", () =>{

	tyv4 = 0
});
writeRight4.addEventListener("pointerdown", () =>{

	txv4 = 2;
});
writeRight4.addEventListener("pointerup", () =>{

	txv4 = 0
});
writeBotton4.addEventListener("pointerdown", () =>{

	tyv4 = 2;
});
writeBotton4.addEventListener("pointerup", () =>{

	tyv4 = 0
});


const makecircle = document.getElementById("makecircle");
const circleup = document.getElementById("circleup");
const circleright = document.getElementById("circleright");
const circledown = document.getElementById("circledown");
const circleleft = document.getElementById("circleleft");



const  makecircle1 = document.getElementById("makecircle1");
const circleup1 = document.getElementById("circleup1");
const circleright1 = document.getElementById("circleright1");
const circledown1 = document.getElementById("circledown1");
const circleleft1 = document.getElementById("circleleft1");

	makecircle1.style.display = "none";
	circleup1.style.display = "none";
	circleright1.style.display = "none";
	circledown1.style.display = "none";
	circleleft1.style.display = "none";

const makecircle2 = document.getElementById("makecircle2");
const circleup2 = document.getElementById("circleup2");
const circleright2 = document.getElementById("circleright2");
const circledown2 = document.getElementById("circledown2");
const circleleft2 = document.getElementById("circleleft2");

	makecircle2.style.display = "none";
	circleup2.style.display = "none";
	circleright2.style.display = "none";
	circledown2.style.display = "none";
	circleleft2.style.display = "none";

const makecircle3 = document.getElementById("makecircle3");
const circleup3 = document.getElementById("circleup3");
const circleright3 = document.getElementById("circleright3");
const circledown3 = document.getElementById("circledown3");
const circleleft3 = document.getElementById("circleleft3");

	makecircle3.style.display = "none";
	circleup3.style.display = "none";
	circleright3.style.display = "none";
	circledown3.style.display = "none";
	circleleft3.style.display = "none";

const makecircle4 = document.getElementById("makecircle4");
const circleup4 = document.getElementById("circleup4");
const circleright4 = document.getElementById("circleright4");
const circledown4 = document.getElementById("circledown4");
const circleleft4 = document.getElementById("circleleft4");

	makecircle4.style.display = "none";
	circleup4.style.display = "none";
	circleright4.style.display = "none";
	circledown4.style.display = "none";
	circleleft4.style.display = "none";

const circleColor = document.getElementById("circleColor");
const circleSize = document.getElementById("circleSize");
const circleTrans = document.getElementById("circleTrans");


const circleColor1 = document.getElementById("circleColor1");
const circleSize1 = document.getElementById("circleSize1");
const circleTrans1 = document.getElementById("circleTrans1");

	circleColor1.style.display = "none";
	circleSize1.style.display = "none";
	circleTrans1.style.display = "none";

const circleColor2 = document.getElementById("circleColor2");
const circleSize2 = document.getElementById("circleSize2");
const circleTrans2 = document.getElementById("circleTrans2");

	circleColor2.style.display = "none";
	circleSize2.style.display = "none";
	circleTrans2.style.display = "none";

const circleColor3 = document.getElementById("circleColor3");
const circleSize3 = document.getElementById("circleSize3");
const circleTrans3 = document.getElementById("circleTrans3");

	circleColor3.style.display = "none";
	circleSize3.style.display = "none";
	circleTrans3.style.display = "none";

const circleColor4 = document.getElementById("circleColor4");
const circleSize4 = document.getElementById("circleSize4");
const circleTrans4 = document.getElementById("circleTrans4");

	circleColor4.style.display = "none";
	circleSize4.style.display = "none";
	circleTrans4.style.display = "none";

	



let xpos = canvas.width / 2;
let ypos = canvas.height / 2;
let vxpos = 0;
let vypos = 0;


	
	
function makeCircle(){

	fillCircleButtons.style.display = "inline";
	let ccolor = circleColor.value;
	let radius = circleSize.value;
	var cTrans = circleTrans.value;
	
	xpos += vxpos;
	ypos += vypos;
	ctx.beginPath();
	ctx.fillStyle = ccolor;
	ctx.globalAlpha = cTrans;
	ctx.arc(xpos, ypos, radius, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();
	ctx.restore();
	requestAnimationFrame(makeCircle);
	

	makecircle.style.display = "none";
	makecircle1.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "inline";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}
circleup.addEventListener("pointerdown", () =>{
	vypos = -2;

});
circleup.addEventListener("pointerup", () =>{
	vypos = 0;

});
circleright.addEventListener("pointerdown", () =>{
	vxpos = 2;

});
circleright.addEventListener("pointerup", () =>{
	vxpos = 0;

});
circledown.addEventListener("pointerdown", () =>{
	vypos = 2;

});
circledown.addEventListener("pointerup", () =>{
	vypos = 0;

});
circleleft.addEventListener("pointerdown", () =>{
	vxpos = -2;

});
circleleft.addEventListener("pointerup", () =>{
	vxpos = 0;

});

let xpos1 = canvas.width / 2;
let ypos1 = canvas.height / 2;
let vxpos1 = 0;
let vypos1 = 0;
	
function makeCircle1(){
	let ccolor1 = circleColor1.value;
	let radius1 = circleSize1.value;
	var cTrans1 = circleTrans1.value;
	xpos1 += vxpos1;
	ypos1 += vypos1;

	ctx.beginPath();
	ctx.fillStyle = ccolor1;
	ctx.globalAlpha = cTrans1;
	ctx.arc(xpos1, ypos1, radius1, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();
	ctx.restore();
	requestAnimationFrame(makeCircle1);
	
	makecircle1.style.display = "none";
	makecircle2.style.display = "inline";

	circleColor.style.display = "none";
	circleSize.style.display = "none";
	circleTrans.style.display = "none";

	circleColor1.style.display = "inline";
	circleSize1.style.display = "inline";
	circleTrans1.style.display = "inline";

	circleup.style.display = "none";
	circleright.style.display = "none";
	circledown.style.display = "none";
	circleleft.style.display = "none";

	circleup1.style.display = "inline";
	circleright1.style.display = "inline";
	circledown1.style.display = "inline";
	circleleft1.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "inline";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
circleup1.addEventListener("pointerdown", () =>{
	vypos1 = -2;

});
circleup1.addEventListener("pointerup", () =>{
	vypos1 = 0;

});
circleright1.addEventListener("pointerdown", () =>{
	vxpos1 = 2;

});
circleright1.addEventListener("pointerup", () =>{
	vxpos1 = 0;

});
circledown1.addEventListener("pointerdown", () =>{
	vypos1 = 2;

});
circledown1.addEventListener("pointerup", () =>{
	vypos1 = 0;

});
circleleft1.addEventListener("pointerdown", () =>{
	vxpos1 = -2;

});
circleleft1.addEventListener("pointerup", () =>{
	vxpos1 = 0;

});

let xpos2 = canvas.width / 2;
let ypos2 = canvas.height / 2;
let vxpos2 = 0;
let vypos2 = 0;
	

function makeCircle2(){
	let ccolor2 = circleColor2.value;
	let radius2 = circleSize2.value;
	var cTrans2 = circleTrans2.value;

	xpos2 += vxpos2;
	ypos2 += vypos2;

	ctx.beginPath();
	ctx.fillStyle = ccolor2;
	ctx.globalAlpha = cTrans2;
	ctx.arc(xpos2, ypos2, radius2, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();
	ctx.restore();
	requestAnimationFrame(makeCircle2);

	makecircle2.style.display = "none";
	makecircle3.style.display = "inline";

	circleColor1.style.display = "none";
	circleSize1.style.display = "none";
	circleTrans1.style.display = "none";

	circleColor2.style.display = "inline";
	circleSize2.style.display = "inline";
	circleTrans2.style.display = "inline";

	circleup1.style.display = "none";
	circleright1.style.display = "none";
	circledown1.style.display = "none";
	circleleft1.style.display = "none";

	circleup2.style.display = "inline";
	circleright2.style.display = "inline";
	circledown2.style.display = "inline";
	circleleft2.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "inline";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
circleup2.addEventListener("pointerdown", () =>{
	vypos2 = -2;

});
circleup2.addEventListener("pointerup", () =>{
	vypos2 = 0;

});
circleright2.addEventListener("pointerdown", () =>{
	vxpos2 = 2;

});
circleright2.addEventListener("pointerup", () =>{
	vxpos2 = 0;

});
circledown2.addEventListener("pointerdown", () =>{
	vypos2 = 2;

});
circledown2.addEventListener("pointerup", () =>{
	vypos2 = 0;

});
circleleft2.addEventListener("pointerdown", () =>{
	vxpos2 = -2;

});
circleleft2.addEventListener("pointerup", () =>{
	vxpos2 = 0;

});


let xpos3 = canvas.width / 2;
let ypos3 = canvas.height / 2;
let vxpos3 = 0;
let vypos3 = 0;


function makeCircle3(){
	let ccolor3 = circleColor3.value;
	let radius3 = circleSize3.value;
	var cTrans3 = circleTrans3.value;

	xpos3 += vxpos3;
	ypos3 += vypos3;

	ctx.beginPath();
	ctx.fillStyle = ccolor3;
	ctx.globalAlpha = cTrans3;
	ctx.arc(xpos3, ypos3, radius3, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();
	ctx.restore();
	requestAnimationFrame(makeCircle3);

	makecircle3.style.display = "none";
	makecircle4.style.display = "inline";

	circleColor2.style.display = "none";
	circleSize2.style.display = "none";
	circleTrans2.style.display = "none";

	circleColor3.style.display = "inline";
	circleSize3.style.display = "inline";
	circleTrans3.style.display = "inline";

	circleup2.style.display = "none";
	circleright2.style.display = "none";
	circledown2.style.display = "none";
	circleleft2.style.display = "none";

	circleup3.style.display = "inline";
	circleright3.style.display = "inline";
	circledown3.style.display = "inline";
	circleleft3.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "inline";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
circleup3.addEventListener("pointerdown", () =>{
	vypos3 = -2;

});
circleup3.addEventListener("pointerup", () =>{
	vypos3 = 0;

});
circleright3.addEventListener("pointerdown", () =>{
	vxpos3 = 2;

});
circleright3.addEventListener("pointerup", () =>{
	vxpos3 = 0;

});
circledown3.addEventListener("pointerdown", () =>{
	vypos3 = 2;

});
circledown3.addEventListener("pointerup", () =>{
	vypos3 = 0;

});
circleleft3.addEventListener("pointerdown", () =>{
	vxpos3 = -2;

});
circleleft3.addEventListener("pointerup", () =>{
	vxpos3 = 0;

});

let xpos4 = canvas.width / 2;
let ypos4 = canvas.height / 2;
let vxpos4 = 0;
let vypos4 = 0;


function makeCircle4(){
	let ccolor4 = circleColor4.value;
	let radius4 = circleSize4.value;
	var cTrans4 = circleTrans4.value;
	
	xpos4 += vxpos4;
	ypos4 += vypos4;
	ctx.beginPath();
	ctx.fillStyle = ccolor4;
	ctx.globalAlpha = cTrans4;
	ctx.arc(xpos4, ypos4, radius4, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();
	ctx.restore();
	requestAnimationFrame(makeCircle4);
	

	//makecircle3.style.display = "none";
	//makecircle4.style.display = "inline";

	circleColor3.style.display = "none";
	circleSize3.style.display = "none";
	circleTrans3.style.display = "none";

	circleColor4.style.display = "inline";
	circleSize4.style.display = "inline";
	circleTrans4.style.display = "inline";

	circleup3.style.display = "none";
	circleright3.style.display = "none";
	circledown3.style.display = "none";
	circleleft3.style.display = "none";

	circleup4.style.display = "inline";
	circleright4.style.display = "inline";
	circledown4.style.display = "inline";
	circleleft4.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "inline";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
circleup4.addEventListener("pointerdown", () =>{
	vypos4 = -2;

});
circleup4.addEventListener("pointerup", () =>{
	vypos4 = 0;

});
circleright4.addEventListener("pointerdown", () =>{
	vxpos4 = 2;

});
circleright4.addEventListener("pointerup", () =>{
	vxpos4 = 0;

});
circledown4.addEventListener("pointerdown", () =>{
	vypos4 = 2;

});
circledown4.addEventListener("pointerup", () =>{
	vypos4 = 0;

});
circleleft4.addEventListener("pointerdown", () =>{
	vxpos4 = -2;

});
circleleft4.addEventListener("pointerup", () =>{
	vxpos4 = 0;

});

const stsqcolor = document.getElementById("stsqcolor");

const strokesquare = document.getElementById("strokesquare");

const stsqup = document.getElementById("stsqup");
const stsqright = document.getElementById("stsqright");
const stsqdown = document.getElementById("stsqdown");
const stsqleft = document.getElementById("stsqleft");

const stsqminh = document.getElementById("stsqminh");
const stsqmaxw = document.getElementById("stsqmaxw");
const stsqmaxh = document.getElementById("stsqmaxh");
const stsqminw = document.getElementById("stsqminw");

const stsqcolor1 = document.getElementById("stsqcolor1");
	stsqcolor1.style.display = "none";
const stsqcolor2 = document.getElementById("stsqcolor2");
	stsqcolor2.style.display = "none";
const stsqcolor3 = document.getElementById("stsqcolor3");
	stsqcolor3.style.display = "none";
const stsqcolor4 = document.getElementById("stsqcolor4");
	stsqcolor4.style.display = "none";

const strokesquare1 = document.getElementById("strokesquare1");
	strokesquare1.style.display = "none";
const strokesquare2 = document.getElementById("strokesquare2");
	strokesquare2.style.display = "none";
const strokesquare3 = document.getElementById("strokesquare3");
	strokesquare3.style.display = "none";
const strokesquare4 = document.getElementById("strokesquare4");
	strokesquare4.style.display = "none";

const stsqup1 = document.getElementById("stsqup1");
	stsqup1.style.display = "none";
const stsqright1 = document.getElementById("stsqright1");
	stsqright1.style.display = "none";
const stsqdown1 = document.getElementById("stsqdown1");
	stsqdown1.style.display = "none";
const stsqleft1 = document.getElementById("stsqleft1");
	stsqleft1.style.display = "none";

const stsqup2 = document.getElementById("stsqup2");
	stsqup2.style.display = "none";
const stsqright2 = document.getElementById("stsqright2");
	stsqright2.style.display = "none";
const stsqdown2 = document.getElementById("stsqdown2");
	stsqdown2.style.display = "none";
const stsqleft2 = document.getElementById("stsqleft2");
	stsqleft2.style.display = "none";

const stsqup3 = document.getElementById("stsqup3");
	stsqup3.style.display = "none";
const stsqright3 = document.getElementById("stsqright3");
	stsqright3.style.display = "none";
const stsqdown3 = document.getElementById("stsqdown3");
	stsqdown3.style.display = "none";
const stsqleft3 = document.getElementById("stsqleft3");
	stsqleft3.style.display = "none";

const stsqup4 = document.getElementById("stsqup4");
	stsqup4.style.display = "none";
const stsqright4 = document.getElementById("stsqright4");
	stsqright4.style.display = "none";
const stsqdown4 = document.getElementById("stsqdown4");
	stsqdown4.style.display = "none";
const stsqleft4 = document.getElementById("stsqleft4");
	stsqleft4.style.display = "none";



const stsqminh1 = document.getElementById("stsqminh1");
	stsqminh1.style.display = "none";
const stsqmaxw1 = document.getElementById("stsqmaxw1");
	stsqmaxw1.style.display = "none";
const stsqmaxh1 = document.getElementById("stsqmaxh1");
	stsqmaxh1.style.display = "none";
const stsqminw1 = document.getElementById("stsqminw1");
	stsqminw1.style.display = "none";

const stsqminh2 = document.getElementById("stsqminh2");
	stsqminh2.style.display = "none";
const stsqmaxw2 = document.getElementById("stsqmaxw2");
	stsqmaxw2.style.display = "none";
const stsqmaxh2 = document.getElementById("stsqmaxh2");
	stsqmaxh2.style.display = "none";
const stsqminw2 = document.getElementById("stsqminw2");
	stsqminw2.style.display = "none";

const stsqminh3 = document.getElementById("stsqminh3");
	stsqminh3.style.display = "none";
const stsqmaxw3 = document.getElementById("stsqmaxw3");
	stsqmaxw3.style.display = "none";
const stsqmaxh3 = document.getElementById("stsqmaxh3");
	stsqmaxh3.style.display = "none";
const stsqminw3 = document.getElementById("stsqminw3");
	stsqminw3.style.display = "none";

const stsqminh4 = document.getElementById("stsqminh4");
	stsqminh4.style.display = "none";
const stsqmaxw4 = document.getElementById("stsqmaxw4");
	stsqmaxw4.style.display = "none";
const stsqmaxh4 = document.getElementById("stsqmaxh4");
	stsqmaxh4.style.display = "none";
const stsqminw4 = document.getElementById("stsqminw4");
	stsqminw4.style.display = "none";

const stsqwidth = document.getElementById("stsqwidth");
const stsqwidth1 = document.getElementById("stsqwidth1");
const stsqwidth2 = document.getElementById("stsqwidth2");
const stsqwidth3 = document.getElementById("stsqwidth3");
const stsqwidth4 = document.getElementById("stsqwidth4");
	stsqwidth1.style.display = "none";
	stsqwidth2.style.display = "none";
	stsqwidth3.style.display = "none";
	stsqwidth4.style.display = "none";

const stsqtrans = document.getElementById("stsqtrans");
const stsqtrans1 = document.getElementById("stsqtrans1");
const stsqtrans2 = document.getElementById("stsqtrans2");
const stsqtrans3 = document.getElementById("stsqtrans3");
const stsqtrans4 = document.getElementById("stsqtrans4");
	stsqtrans1.style.display = "none";
	stsqtrans2.style.display = "none";
	stsqtrans3.style.display = "none";
	stsqtrans4.style.display = "none";

	
	
	let stsqx = canvas.width / 2 -30;
	let stsqy = canvas.height / 2 - 30;
	let stsqw = 60;
	let stsqh = 60;
	let stsqvx = 0;
	let stsqvy = 0;
	let stsqvw = 0;
	let stsqvH = 0;

	let transp;
	function paintSquareTrans(){
	transp = stsqtrans.value;
	}

function strokeSquare(){
strokeSquareButtons.style.display = "inline";


let strLineWidth = stsqwidth.value;
let strokeSqColor = stsqcolor.value;
	stsqx += stsqvx;
	stsqy += stsqvy;
	stsqw += stsqvw;
	stsqh += stsqvH;

	ctx.beginPath();
	ctx.globalAlpha = transp;
	ctx.strokeStyle = strokeSqColor;
	ctx.lineWidth = strLineWidth;
	ctx.strokeRect(stsqx,stsqy,stsqw,stsqh);
	ctx.closePath()
	ctx.restore();
	requestAnimationFrame(strokeSquare);

	strokesquare1.style.display = "inline";
	strokesquare.style.display = "none";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "inline";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";


}


stsqup.addEventListener("pointerdown", () =>{
	stsqvy = -2;

});
stsqup.addEventListener("pointerup", () =>{
	stsqvy = 0;

});
stsqright.addEventListener("pointerdown", () =>{
	stsqvx = 2;

});
stsqright.addEventListener("pointerup", () =>{
	stsqvx = 0;

});
stsqdown.addEventListener("pointerdown", () =>{
	stsqvy = 2;

});
stsqdown.addEventListener("pointerup", () =>{
	stsqvy = 0;

});
stsqleft.addEventListener("pointerdown", () =>{
	stsqvx = -2;

});
stsqleft.addEventListener("pointerup", () =>{
	stsqvx = 0;

});


stsqminh.addEventListener("pointerdown", () =>{
	stsqvH = -2;

});
stsqminh.addEventListener("pointerup", () =>{
	stsqvH = 0;

});
stsqmaxw.addEventListener("pointerdown", () =>{
	stsqvw = 2;

});
stsqmaxw.addEventListener("pointerup", () =>{
	stsqvw = 0;

});
stsqmaxh.addEventListener("pointerdown", () =>{
	stsqvH = 2;

});
stsqmaxh.addEventListener("pointerup", () =>{
	stsqvH = 0;

});

stsqminw.addEventListener("pointerdown", () =>{
	stsqvw = -2;

});
stsqminw.addEventListener("pointerup", () =>{
	stsqvw = 0;

});

	let stsqx1 = canvas.width / 2 -30;
	let stsqy1 = canvas.height / 2 - 30;
	let stsqw1 = 60;
	let stsqh1 = 60;
	let stsqvx1 = 0;
	let stsqvy1 = 0;
	let stsqvw1 = 0;
	let stsqvH1 = 0;

	let transp1;
	function paintSquareTrans1(){
	transp1 = stsqtrans1.value;
	}

function strokeSquare1(){

let strLineWidth1 = stsqwidth1.value;
let strokeSqColor1 = stsqcolor1.value;
	stsqx1 += stsqvx1;
	stsqy1 += stsqvy1;
	stsqw1 += stsqvw1;
	stsqh1 += stsqvH1;

	ctx.beginPath();
	ctx.globalAlpha = transp1;
	ctx.lineWidth = strLineWidth1;
	ctx.strokeStyle = strokeSqColor1;
	ctx.strokeRect(stsqx1,stsqy1,stsqw1,stsqh1);
	requestAnimationFrame(strokeSquare1);
	ctx.closePath();

	strokesquare2.style.display = "inline";
	strokesquare1.style.display = "none";

	stsqcolor.style.display = "none";
	stsqcolor1.style.display = "inline";

	stsqwidth.style.display = "none";
	stsqwidth1.style.display = "inline";

	stsqtrans.style.display = "none";
	stsqtrans1.style.display = "inline";

	stsqup.style.display = "none";
	stsqup1.style.display = "inline";
	stsqright.style.display = "none";
	stsqright1.style.display = "inline";
	stsqdown.style.display = "none";
	stsqdown1.style.display = "inline";
	stsqleft.style.display = "none";
	stsqleft1.style.display = "inline";

	stsqminh.style.display = "none";
	stsqminh1.style.display = "inline";
	stsqmaxw.style.display = "none";
	stsqmaxw1.style.display = "inline";
	stsqmaxh.style.display = "none";
	stsqmaxh1.style.display = "inline";
	stsqminw.style.display = "none";
	stsqminw1.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "inline";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}


stsqup1.addEventListener("pointerdown", () =>{
	stsqvy1 = -2;

});
stsqup1.addEventListener("pointerup", () =>{
	stsqvy1 = 0;

});
stsqright1.addEventListener("pointerdown", () =>{
	stsqvx1 = 2;

});
stsqright1.addEventListener("pointerup", () =>{
	stsqvx1 = 0;

});
stsqdown1.addEventListener("pointerdown", () =>{
	stsqvy1 = 2;

});
stsqdown1.addEventListener("pointerup", () =>{
	stsqvy1 = 0;

});
stsqleft1.addEventListener("pointerdown", () =>{
	stsqvx1 = -2;

});
stsqleft1.addEventListener("pointerup", () =>{
	stsqvx1 = 0;

});


stsqminh1.addEventListener("pointerdown", () =>{
	stsqvH1 = -2;

});
stsqminh1.addEventListener("pointerup", () =>{
	stsqvH1 = 0;

});
stsqmaxw1.addEventListener("pointerdown", () =>{
	stsqvw1 = 2;

});
stsqmaxw1.addEventListener("pointerup", () =>{
	stsqvw1 = 0;

});
stsqmaxh1.addEventListener("pointerdown", () =>{
	stsqvH1 = 2;

});
stsqmaxh1.addEventListener("pointerup", () =>{
	stsqvH1 = 0;

});

stsqminw1.addEventListener("pointerdown", () =>{
	stsqvw1 = -2;

});
stsqminw1.addEventListener("pointerup", () =>{
	stsqvw1 = 0;

});



	let stsqx2 = canvas.width / 2 -30;
	let stsqy2 = canvas.height / 2 - 30;
	let stsqw2 = 60;
	let stsqh2 = 60;
	let stsqvx2 = 0;
	let stsqvy2 = 0;
	let stsqvw2 = 0;
	let stsqvH2 = 0;

	let transp2;
	function paintSquareTrans2(){
	transp2 = stsqtrans2.value;
	}

function strokeSquare2(){

let strLineWidth2 = stsqwidth2.value;
let strokeSqColor2 = stsqcolor2.value;
	stsqx2 += stsqvx2;
	stsqy2 += stsqvy2;
	stsqw2 += stsqvw2;
	stsqh2 += stsqvH2;

	ctx.beginPath();
	ctx.globalAlpha = transp2;
	ctx.lineWidth = strLineWidth2;
	ctx.strokeStyle = strokeSqColor2;
	ctx.strokeRect(stsqx2,stsqy2,stsqw2,stsqh2);
	requestAnimationFrame(strokeSquare2);
	ctx.closePath();

	strokesquare3.style.display = "inline";
	strokesquare2.style.display = "none";

	stsqcolor1.style.display = "none";
	stsqcolor2.style.display = "inline";

	stsqwidth1.style.display = "none";
	stsqwidth2.style.display = "inline";

	stsqtrans1.style.display = "none";
	stsqtrans2.style.display = "inline";

	stsqup1.style.display = "none";
	stsqup2.style.display = "inline";
	stsqright1.style.display = "none";
	stsqright2.style.display = "inline";
	stsqdown1.style.display = "none";
	stsqdown2.style.display = "inline";
	stsqleft1.style.display = "none";
	stsqleft2.style.display = "inline";

	stsqminh1.style.display = "none";
	stsqminh2.style.display = "inline";
	stsqmaxw1.style.display = "none";
	stsqmaxw2.style.display = "inline";
	stsqmaxh1.style.display = "none";
	stsqmaxh2.style.display = "inline";
	stsqminw1.style.display = "none";
	stsqminw2.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "inline";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}


stsqup2.addEventListener("pointerdown", () =>{
	stsqvy2 = -2;

});
stsqup2.addEventListener("pointerup", () =>{
	stsqvy2 = 0;

});
stsqright2.addEventListener("pointerdown", () =>{
	stsqvx2 = 2;

});
stsqright2.addEventListener("pointerup", () =>{
	stsqvx2 = 0;

});
stsqdown2.addEventListener("pointerdown", () =>{
	stsqvy2 = 2;

});
stsqdown2.addEventListener("pointerup", () =>{
	stsqvy2 = 0;

});
stsqleft2.addEventListener("pointerdown", () =>{
	stsqvx2 = -2;

});
stsqleft2.addEventListener("pointerup", () =>{
	stsqvx2 = 0;

});


stsqminh2.addEventListener("pointerdown", () =>{
	stsqvH2 = -2;

});
stsqminh2.addEventListener("pointerup", () =>{
	stsqvH2 = 0;

});
stsqmaxw2.addEventListener("pointerdown", () =>{
	stsqvw2 = 2;

});
stsqmaxw2.addEventListener("pointerup", () =>{
	stsqvw2 = 0;

});
stsqmaxh2.addEventListener("pointerdown", () =>{
	stsqvH2 = 2;

});
stsqmaxh2.addEventListener("pointerup", () =>{
	stsqvH2 = 0;

});

stsqminw2.addEventListener("pointerdown", () =>{
	stsqvw2 = -2;

});
stsqminw2.addEventListener("pointerup", () =>{
	stsqvw2 = 0;

});



	let stsqx3 = canvas.width / 2 -30;
	let stsqy3 = canvas.height / 2 - 30;
	let stsqw3 = 60;
	let stsqh3 = 60;
	let stsqvx3 = 0;
	let stsqvy3 = 0;
	let stsqvw3 = 0;
	let stsqvH3 = 0;

	let transp3;
	function paintSquareTrans3(){
	transp3 = stsqtrans3.value;
	}

function strokeSquare3(){

let strLineWidth3 = stsqwidth3.value;
let strokeSqColor3 = stsqcolor3.value;
	stsqx3 += stsqvx3;
	stsqy3 += stsqvy3;
	stsqw3 += stsqvw3;
	stsqh3 += stsqvH3;

	ctx.beginPath();
	globalAlpha = transp3;
	ctx.lineWidth = strLineWidth3;
	ctx.strokeStyle = strokeSqColor3;
	ctx.strokeRect(stsqx3,stsqy3,stsqw3,stsqh3);
	requestAnimationFrame(strokeSquare3);
	ctx.closePath();

	strokesquare4.style.display = "inline";
	strokesquare3.style.display = "none";

	stsqcolor2.style.display = "none";
	stsqcolor3.style.display = "inline";

	stsqwidth2.style.display = "none";
	stsqwidth3.style.display = "inline";

	stsqtrans2.style.display = "none";
	stsqtrans3.style.display = "inline";

	stsqup2.style.display = "none";
	stsqup3.style.display = "inline";
	stsqright2.style.display = "none";
	stsqright3.style.display = "inline";
	stsqdown2.style.display = "none";
	stsqdown3.style.display = "inline";
	stsqleft2.style.display = "none";
	stsqleft3.style.display = "inline";

	stsqminh2.style.display = "none";
	stsqminh3.style.display = "inline";
	stsqmaxw2.style.display = "none";
	stsqmaxw3.style.display = "inline";
	stsqmaxh2.style.display = "none";
	stsqmaxh3.style.display = "inline";
	stsqminw2.style.display = "none";
	stsqminw3.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "inline";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}


stsqup3.addEventListener("pointerdown", () =>{
	stsqvy3 = -2;

});
stsqup3.addEventListener("pointerup", () =>{
	stsqvy3 = 0;

});
stsqright3.addEventListener("pointerdown", () =>{
	stsqvx3 = 2;

});
stsqright3.addEventListener("pointerup", () =>{
	stsqvx3 = 0;

});
stsqdown3.addEventListener("pointerdown", () =>{
	stsqvy3 = 2;

});
stsqdown3.addEventListener("pointerup", () =>{
	stsqvy3 = 0;

});
stsqleft3.addEventListener("pointerdown", () =>{
	stsqvx3 = -2;

});
stsqleft3.addEventListener("pointerup", () =>{
	stsqvx3 = 0;

});


stsqminh3.addEventListener("pointerdown", () =>{
	stsqvH3 = -2;

});
stsqminh3.addEventListener("pointerup", () =>{
	stsqvH3 = 0;

});
stsqmaxw3.addEventListener("pointerdown", () =>{
	stsqvw3 = 2;

});
stsqmaxw3.addEventListener("pointerup", () =>{
	stsqvw3 = 0;

});
stsqmaxh3.addEventListener("pointerdown", () =>{
	stsqvH3 = 2;

});
stsqmaxh3.addEventListener("pointerup", () =>{
	stsqvH3 = 0;

});

stsqminw3.addEventListener("pointerdown", () =>{
	stsqvw3 = -2;

});
stsqminw3.addEventListener("pointerup", () =>{
	stsqvw3 = 0;

});

	let stsqx4 = canvas.width / 2 -30;
	let stsqy4 = canvas.height / 2 - 30;
	let stsqw4 = 60;
	let stsqh4 = 60;
	let stsqvx4 = 0;
	let stsqvy4 = 0;
	let stsqvw4 = 0;
	let stsqvH4 = 0;

	let transp4;
	function paintSquareTrans4(){
	transp4 = stsqtrans4.value;
	}

function strokeSquare4(){

let strLineWidth4 = stsqwidth4.value;
let strokeSqColor4 = stsqcolor4.value;
	stsqx4 += stsqvx4;
	stsqy4 += stsqvy4;
	stsqw4 += stsqvw4;
	stsqh4 += stsqvH4;

	ctx.beginPath();
	ctx.globalAlpha = transp4;
	ctx.lineWidth = strLineWidth4;
	ctx.strokeStyle = strokeSqColor4;
	ctx.strokeRect(stsqx4,stsqy4,stsqw4,stsqh4);
	requestAnimationFrame(strokeSquare4);
	ctx.closePath();

	//strokesquare4.style.display = "inline";
	strokesquare4.style.display = "none";

	stsqcolor3.style.display = "none";
	stsqcolor4.style.display = "inline";

	stsqwidth3.style.display = "none";
	stsqwidth4.style.display = "inline";

	stsqtrans3.style.display = "none";
	stsqtrans4.style.display = "inline";

	stsqup3.style.display = "none";
	stsqup4.style.display = "inline";
	stsqright3.style.display = "none";
	stsqright4.style.display = "inline";
	stsqdown3.style.display = "none";
	stsqdown4.style.display = "inline";
	stsqleft3.style.display = "none";
	stsqleft4.style.display = "inline";

	stsqminh3.style.display = "none";
	stsqminh4.style.display = "inline";
	stsqmaxw3.style.display = "none";
	stsqmaxw4.style.display = "inline";
	stsqmaxh3.style.display = "none";
	stsqmaxh4.style.display = "inline";
	stsqminw3.style.display = "none";
	stsqminw4.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "inline";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}


stsqup4.addEventListener("pointerdown", () =>{
	stsqvy4 = -2;

});
stsqup4.addEventListener("pointerup", () =>{
	stsqvy4 = 0;

});
stsqright4.addEventListener("pointerdown", () =>{
	stsqvx4 = 2;

});
stsqright4.addEventListener("pointerup", () =>{
	stsqvx4 = 0;

});
stsqdown4.addEventListener("pointerdown", () =>{
	stsqvy4 = 2;

});
stsqdown4.addEventListener("pointerup", () =>{
	stsqvy4 = 0;

});
stsqleft4.addEventListener("pointerdown", () =>{
	stsqvx4 = -2;

});
stsqleft4.addEventListener("pointerup", () =>{
	stsqvx4 = 0;

});


stsqminh4.addEventListener("pointerdown", () =>{
	stsqvH4 = -2;

});
stsqminh4.addEventListener("pointerup", () =>{
	stsqvH4 = 0;

});
stsqmaxw4.addEventListener("pointerdown", () =>{
	stsqvw4 = 2;

});
stsqmaxw4.addEventListener("pointerup", () =>{
	stsqvw4 = 0;

});
stsqmaxh4.addEventListener("pointerdown", () =>{
	stsqvH4 = 2;

});
stsqmaxh4.addEventListener("pointerup", () =>{
	stsqvH4 = 0;

});

stsqminw4.addEventListener("pointerdown", () =>{
	stsqvw4 = -2;

});
stsqminw4.addEventListener("pointerup", () =>{
	stsqvw4 = 0;

});

const strtdraw = document.getElementById("strtdraw");
const strtdraw1 = document.getElementById("strtdraw1");
const strtdraw2 = document.getElementById("strtdraw2");
const strtdraw3 = document.getElementById("strtdraw3");
const strtdraw4 = document.getElementById("strtdraw4");

	strtdraw1.style.display = "none";
	strtdraw2.style.display = "none";
	strtdraw3.style.display = "none";
	strtdraw4.style.display = "none";

const strtup = document.getElementById("strtup");
const strtright = document.getElementById("strtright");
const strtdown = document.getElementById("strtdown");
const strtleft = document.getElementById("strtleft");

const strtup1 = document.getElementById("strtup1");
const strtright1 = document.getElementById("strtright1");
const strtdown1 = document.getElementById("strtdown1");
const strtleft1 = document.getElementById("strtleft1");

	strtup1.style.display = "none";
	strtright1.style.display = "none";
	strtdown1.style.display = "none";
	strtleft1.style.display = "none";

const strtup2 = document.getElementById("strtup2");
const strtright2 = document.getElementById("strtright2");
const strtdown2 = document.getElementById("strtdown2");
const strtleft2 = document.getElementById("strtleft2");

	strtup2.style.display = "none";
	strtright2.style.display = "none";
	strtdown2.style.display = "none";
	strtleft2.style.display = "none";

const strtup3 = document.getElementById("strtup3");
const strtright3 = document.getElementById("strtright3");
const strtdown3 = document.getElementById("strtdown3");
const strtleft3 = document.getElementById("strtleft3");

	strtup3.style.display = "none";
	strtright3.style.display = "none";
	strtdown3.style.display = "none";
	strtleft3.style.display = "none";

const strtup4 = document.getElementById("strtup4");
const strtright4 = document.getElementById("strtright4");
const strtdown4 = document.getElementById("strtdown4");
const strtleft4 = document.getElementById("strtleft4");

	strtup4.style.display = "none";
	strtright4.style.display = "none";
	strtdown4.style.display = "none";
	strtleft4.style.display = "none";

const strfontColor = document.getElementById("strfontcolor");
const strfontWeight = document.getElementById("strfontweight");
const strfontSize = document.getElementById("strfontsize");
const strfontFamily = document.getElementById("strfontfamily");
const strmessagetext = document.getElementById("strmessagetext");

const strfontColor1 = document.getElementById("strfontcolor1");
const strfontWeight1 = document.getElementById("strfontweight1");
const strfontSize1 = document.getElementById("strfontsize1");
const strfontFamily1 = document.getElementById("strfontfamily1");
const strmessagetext1 = document.getElementById("strmessagetext1");

	strfontColor1.style.display = "none";
	strfontWeight1.style.display = "none";
	strfontSize1.style.display = "none";
	strfontFamily1.style.display = "none";
	strmessagetext1.style.display = "none";

const strfontColor2 = document.getElementById("strfontcolor2");
const strfontWeight2 = document.getElementById("strfontweight2");
const strfontSize2 = document.getElementById("strfontsize2");
const strfontFamily2 = document.getElementById("strfontfamily2");
const strmessagetext2 = document.getElementById("strmessagetext2");

	strfontColor2.style.display = "none";
	strfontWeight2.style.display = "none";
	strfontSize2.style.display = "none";
	strfontFamily2.style.display = "none";
	strmessagetext2.style.display = "none";

const strfontColor3 = document.getElementById("strfontcolor3");
const strfontWeight3 = document.getElementById("strfontweight3");
const strfontSize3 = document.getElementById("strfontsize3");
const strfontFamily3 = document.getElementById("strfontfamily3");
const strmessagetext3 = document.getElementById("strmessagetext3");

	strfontColor3.style.display = "none";
	strfontWeight3.style.display = "none";
	strfontSize3.style.display = "none";
	strfontFamily3.style.display = "none";
	strmessagetext3.style.display = "none";

const strfontColor4 = document.getElementById("strfontcolor4");
const strfontWeight4 = document.getElementById("strfontweight4");
const strfontSize4 = document.getElementById("strfontsize4");
const strfontFamily4 = document.getElementById("strfontfamily4");
const strmessagetext4 = document.getElementById("strmessagetext4");

	strfontColor4.style.display = "none";
	strfontWeight4.style.display = "none";
	strfontSize4.style.display = "none";
	strfontFamily4.style.display = "none";
	strmessagetext4.style.display = "none";

	

let strtx = 5;
let strty = 100;
let strtxv = 0;
let strtyv = 0;
function strtDraw(){

	strokeTextButtons.style.display = "inline";
	strtx += strtxv;
	strty += strtyv;

	let strfFamily = strfontFamily.value;
	let strfSize = strfontSize.value;
	let strfWeight = strfontWeight.value;
	let strfColor = strfontColor.value;
	let strmessageText = strmessagetext.value;
	ctx.beginPath();
	ctx.font = strfWeight + " " + strfSize + "px " + strfFamily;
	ctx.strokeStyle = strfColor;
	ctx.lineWidth = 1;
 	ctx.strokeText(strmessageText, strtx, strty);
 	ctx.closePath();
 	requestAnimationFrame(strtDraw);

 	strtdraw.style.display = "none";
 	strtdraw1.style.display = "inline";

 		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "inline";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}
strtup.addEventListener("pointerdown", () =>{
	strtyv = -2;

});

strtup.addEventListener("pointerup", () =>{
	strtyv = 0;

});
strtright.addEventListener("pointerdown", () =>{
	strtxv = 2;

});

strtright.addEventListener("pointerup", () =>{
	strtxv = 0;

});
strtdown.addEventListener("pointerdown", () =>{
	strtyv = 2;

});

strtdown.addEventListener("pointerup", () =>{
	strtyv = 0;

});
strtleft.addEventListener("pointerdown", () =>{
	strtxv = -2;

});

strtleft.addEventListener("pointerup", () =>{
	strtxv = 0;

});

let strtx1 = 5;
let strty1 = 100;
let strtxv1 = 0;
let strtyv1 = 0;
function strtDraw1(){

	//ctx.clearRect(strtx,strty,strtx.length,-strty.length);
	strtx1 += strtxv1;
	strty1 += strtyv1;

	let strfFamily1 = strfontFamily1.value;
	let strfSize1 = strfontSize1.value;
	let strfWeight1 = strfontWeight1.value;
	let strfColor1 = strfontColor1.value;
	let strmessageText1 = strmessagetext1.value;
	ctx.beginPath();
	ctx.font = strfWeight1 + " " + strfSize1 + "px " + strfFamily1;
	ctx.strokeStyle = strfColor1;
	ctx.lineWidth = 1;
 	ctx.strokeText(strmessageText1, strtx1, strty1);
 	ctx.closePath();
 	requestAnimationFrame(strtDraw1);

 	strtdraw1.style.display = "none";
 	strtdraw2.style.display = "inline";

 	strtup.style.display = "none";
	strtright.style.display = "none";
	strtdown.style.display = "none";
	strtleft.style.display = "none";

	strtup1.style.display = "inline";
	strtright1.style.display = "inline";
	strtdown1.style.display = "inline";
	strtleft1.style.display = "inline";

	strfontColor.style.display = "none";
	strfontWeight.style.display = "none";
	strfontSize.style.display = "none";
	strfontFamily.style.display = "none";
	strmessagetext.style.display = "none";

	strfontColor1.style.display = "inline";
	strfontWeight1.style.display = "inline";
	strfontSize1.style.display = "inline";
	strfontFamily1.style.display = "inline";
	strmessagetext1.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "inline";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}
strtup1.addEventListener("pointerdown", () =>{
	strtyv1 = -2;

});

strtup1.addEventListener("pointerup", () =>{
	strtyv1 = 0;

});
strtright1.addEventListener("pointerdown", () =>{
	strtxv1 = 2;

});

strtright1.addEventListener("pointerup", () =>{
	strtxv1 = 0;

});
strtdown1.addEventListener("pointerdown", () =>{
	strtyv1 = 2;

});

strtdown1.addEventListener("pointerup", () =>{
	strtyv1 = 0;

});
strtleft1.addEventListener("pointerdown", () =>{
	strtxv1 = -2;

});

strtleft1.addEventListener("pointerup", () =>{
	strtxv1 = 0;

});


let strtx2 = 5;
let strty2 = 100;
let strtxv2 = 0;
let strtyv2 = 0;
function strtDraw2(){

	//ctx.clearRect(strtx,strty,strtx.length,-strty.length);
	strtx2 += strtxv2;
	strty2 += strtyv2;

	let strfFamily2 = strfontFamily2.value;
	let strfSize2 = strfontSize2.value;
	let strfWeight2 = strfontWeight2.value;
	let strfColor2 = strfontColor2.value;
	let strmessageText2 = strmessagetext2.value;
	ctx.beginPath();
	ctx.font = strfWeight2 + " " + strfSize2 + "px " + strfFamily2;
	ctx.strokeStyle = strfColor2;
	ctx.lineWidth = 1;
 	ctx.strokeText(strmessageText2, strtx2, strty2);
 	ctx.closePath();
 	requestAnimationFrame(strtDraw2);

 	strtdraw2.style.display = "none";
 	strtdraw3.style.display = "inline";

 	strtup1.style.display = "none";
	strtright1.style.display = "none";
	strtdown1.style.display = "none";
	strtleft1.style.display = "none";

	strtup2.style.display = "inline";
	strtright2.style.display = "inline";
	strtdown2.style.display = "inline";
	strtleft2.style.display = "inline";

	strfontColor1.style.display = "none";
	strfontWeight1.style.display = "none";
	strfontSize1.style.display = "none";
	strfontFamily1.style.display = "none";
	strmessagetext1.style.display = "none";

	strfontColor2.style.display = "inline";
	strfontWeight2.style.display = "inline";
	strfontSize2.style.display = "inline";
	strfontFamily2.style.display = "inline";
	strmessagetext2.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "inline";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}
strtup2.addEventListener("pointerdown", () =>{
	strtyv2 = -2;

});

strtup2.addEventListener("pointerup", () =>{
	strtyv2 = 0;

});
strtright2.addEventListener("pointerdown", () =>{
	strtxv2 = 2;

});

strtright2.addEventListener("pointerup", () =>{
	strtxv2 = 0;

});
strtdown2.addEventListener("pointerdown", () =>{
	strtyv2 = 2;

});

strtdown2.addEventListener("pointerup", () =>{
	strtyv2 = 0;

});
strtleft2.addEventListener("pointerdown", () =>{
	strtxv2 = -2;

});

strtleft2.addEventListener("pointerup", () =>{
	strtxv2 = 0;

});

let strtx3 = 5;
let strty3 = 100;
let strtxv3 = 0;
let strtyv3 = 0;
function strtDraw3(){

	//ctx.clearRect(strtx,strty,strtx.length,-strty.length);
	strtx3 += strtxv3;
	strty3 += strtyv3;

	let strfFamily3 = strfontFamily3.value;
	let strfSize3 = strfontSize3.value;
	let strfWeight3 = strfontWeight3.value;
	let strfColor3 = strfontColor3.value;
	let strmessageText3 = strmessagetext3.value;
	ctx.beginPath();
	ctx.font = strfWeight3 + " " + strfSize3 + "px " + strfFamily3;
	ctx.strokeStyle = strfColor3;
	ctx.lineWidth = 1;
 	ctx.strokeText(strmessageText3, strtx3, strty3);
 	ctx.closePath();
 	requestAnimationFrame(strtDraw3);

 	strtdraw3.style.display = "none";
 	strtdraw4.style.display = "inline";

 	strtup2.style.display = "none";
	strtright2.style.display = "none";
	strtdown2.style.display = "none";
	strtleft2.style.display = "none";

	strtup3.style.display = "inline";
	strtright3.style.display = "inline";
	strtdown3.style.display = "inline";
	strtleft3.style.display = "inline";

	strfontColor2.style.display = "none";
	strfontWeight2.style.display = "none";
	strfontSize2.style.display = "none";
	strfontFamily2.style.display = "none";
	strmessagetext2.style.display = "none";

	strfontColor3.style.display = "inline";
	strfontWeight3.style.display = "inline";
	strfontSize3.style.display = "inline";
	strfontFamily3.style.display = "inline";
	strmessagetext3.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "inline";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}
strtup3.addEventListener("pointerdown", () =>{
	strtyv3 = -2;

});

strtup3.addEventListener("pointerup", () =>{
	strtyv3 = 0;

});
strtright3.addEventListener("pointerdown", () =>{
	strtxv3 = 2;

});

strtright3.addEventListener("pointerup", () =>{
	strtxv3 = 0;

});
strtdown3.addEventListener("pointerdown", () =>{
	strtyv3 = 2;

});

strtdown3.addEventListener("pointerup", () =>{
	strtyv3 = 0;

});
strtleft3.addEventListener("pointerdown", () =>{
	strtxv3 = -2;

});

strtleft3.addEventListener("pointerup", () =>{
	strtxv3 = 0;

});

let strtx4 = 5;
let strty4 = 100;
let strtxv4 = 0;
let strtyv4 = 0;
function strtDraw4(){

	//ctx.clearRect(strtx,strty,strtx.length,-strty.length);
	strtx4 += strtxv4;
	strty4 += strtyv4;

	let strfFamily4 = strfontFamily4.value;
	let strfSize4 = strfontSize4.value;
	let strfWeight4 = strfontWeight4.value;
	let strfColor4 = strfontColor4.value;
	let strmessageText4 = strmessagetext4.value;
	ctx.beginPath();
	ctx.font = strfWeight4 + " " + strfSize4 + "px " + strfFamily4;	
	ctx.strokeStyle = strfColor4;	
	ctx.lineWidth = 1;
 	ctx.strokeText(strmessageText4, strtx4, strty4);
 	ctx.closePath();
 	requestAnimationFrame(strtDraw4);

 	strtdraw4.style.display = "none";
 	//strtdraw4.style.display = "inline";

 	strtup3.style.display = "none";
	strtright3.style.display = "none";
	strtdown3.style.display = "none";
	strtleft3.style.display = "none";

	strtup4.style.display = "inline";
	strtright4.style.display = "inline";
	strtdown4.style.display = "inline";
	strtleft4.style.display = "inline";

	strfontColor3.style.display = "none";
	strfontWeight3.style.display = "none";
	strfontSize3.style.display = "none";
	strfontFamily3.style.display = "none";
	strmessagetext3.style.display = "none";

	strfontColor4.style.display = "inline";
	strfontWeight4.style.display = "inline";
	strfontSize4.style.display = "inline";
	strfontFamily4.style.display = "inline";
	strmessagetext4.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "inline";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}
strtup4.addEventListener("pointerdown", () =>{
	strtyv4 = -2;

});

strtup4.addEventListener("pointerup", () =>{
	strtyv4 = 0;

});
strtright4.addEventListener("pointerdown", () =>{
	strtxv4 = 2;

});

strtright4.addEventListener("pointerup", () =>{
	strtxv4 = 0;

});
strtdown4.addEventListener("pointerdown", () =>{
	strtyv4 = 2;

});

strtdown4.addEventListener("pointerup", () =>{
	strtyv4 = 0;

});
strtleft4.addEventListener("pointerdown", () =>{
	strtxv4 = -2;

});

strtleft4.addEventListener("pointerup", () =>{
	strtxv4 = 0;

});


const strcircle  = document.getElementById("strcircle");
const strcircle1  = document.getElementById("strcircle1");
const strcircle2  = document.getElementById("strcircle2");
const strcircle3  = document.getElementById("strcircle3");
const strcircle4  = document.getElementById("strcircle4");
	
	strcircle1.style.display = "none";
	strcircle2.style.display = "none";
	strcircle3.style.display = "none";
	strcircle4.style.display = "none";

const strcup  = document.getElementById("strcup");
const strcright  = document.getElementById("strcright");
const strcdown  = document.getElementById("strcdown");
const strcleft  = document.getElementById("strcleft");

const strcup1  = document.getElementById("strcup1");
const strcright1  = document.getElementById("strcright1");
const strcdown1  = document.getElementById("strcdown1");
const strcleft1  = document.getElementById("strcleft1");

	strcup1.style.display = "none";
	strcright1.style.display = "none";
	strcdown1.style.display = "none";
	strcleft1.style.display = "none";

const strcup2  = document.getElementById("strcup2");
const strcright2  = document.getElementById("strcright2");
const strcdown2  = document.getElementById("strcdown2");
const strcleft2  = document.getElementById("strcleft2");

	strcup2.style.display = "none";
	strcright2.style.display = "none";
	strcdown2.style.display = "none";
	strcleft2.style.display = "none";

const strcup3  = document.getElementById("strcup3");
const strcright3  = document.getElementById("strcright3");
const strcdown3  = document.getElementById("strcdown3");
const strcleft3  = document.getElementById("strcleft3");

	strcup3.style.display = "none";
	strcright3.style.display = "none";
	strcdown3.style.display = "none";
	strcleft3.style.display = "none";

const strcup4  = document.getElementById("strcup4");
const strcright4  = document.getElementById("strcright4");
const strcdown4  = document.getElementById("strcdown4");
const strcleft4  = document.getElementById("strcleft4");

	strcup4.style.display = "none";
	strcright4.style.display = "none";
	strcdown4.style.display = "none";
	strcleft4.style.display = "none";

const strccolor = document.getElementById("strccolor");
const strccolor1  = document.getElementById("strccolor1");
const strccolor2  = document.getElementById("strccolor2");
const strccolor3  = document.getElementById("strccolor3");
const strccolor4  = document.getElementById("strccolor4");

	strccolor1.style.display = "none";
	strccolor2.style.display = "none";
	strccolor3.style.display = "none";
	strccolor4.style.display = "none";

const strclinewidth = document.getElementById("strclinewidth");
const strclinewidt1  = document.getElementById("strclinewidt1");
const strclinewidt2  = document.getElementById("strclinewidt2");
const strclinewidt3  = document.getElementById("strclinewidt3");
const strclinewidt4 = document.getElementById("strclinewidt4");

	strclinewidt1.style.display = "none";
	strclinewidt2.style.display = "none";
	strclinewidt3.style.display = "none";
	strclinewidt4.style.display = "none";

const strctransparency = document.getElementById("strctransparency");
const strctransparency1  = document.getElementById("strctransparency1");
const strctransparency2  = document.getElementById("strctransparency2");
const strctransparency3  = document.getElementById("strctransparency3");
const strctransparency4 = document.getElementById("strctransparency4");

	strctransparency1.style.display = "none";
	strctransparency2.style.display = "none";
	strctransparency3.style.display = "none";
	strctransparency4.style.display = "none";

const strcradius = document.getElementById("strcradius");
const strcradius1 = document.getElementById("strcradius1");
const strcradius2 = document.getElementById("strcradius2");
const strcradius3 = document.getElementById("strcradius3");
const strcradius4 = document.getElementById("strcradius4");

	strcradius1.style.display = "none";
	strcradius2.style.display = "none";
	strcradius3.style.display = "none";
	strcradius4.style.display = "none";

	

let strcx = canvas.width / 2;
let strcy = canvas.height / 2;
let strcxv = 0;
let strcyv = 0;

let strCTransparent;
	function paintCircleTrans(){
	strCTransparent = strctransparency.value;
	}

function strCircle(){

	strokeCircleButtons.style.display = "inline";

	let strcRadius = strcradius.value;
	let strCColor = strccolor.value;
	let strCLineWidth = strclinewidth.value;
	
	strcx += strcxv;
	strcy += strcyv;
		ctx.beginPath();
		ctx.globalAlpha = strCTransparent;
		ctx.strokeStyle = strCColor;
		ctx.lineWidth = strCLineWidth;
		ctx.arc(strcx,strcy,strcRadius,0,Math.PI * 2);
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	requestAnimationFrame(strCircle);

	strcircle.style.display = "none";
	strcircle1.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "inline";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
strcup.addEventListener("pointerdown", () =>{
	strcyv = -2;

});
strcup.addEventListener("pointerup", () =>{
	strcyv = 0;

});
strcright.addEventListener("pointerdown", () =>{
	strcxv = 2;

});
strcright.addEventListener("pointerup", () =>{
	strcxv = 0;

});
strcdown.addEventListener("pointerdown", () =>{
	strcyv = 2;

});
strcdown.addEventListener("pointerup", () =>{
	strcyv = 0;

});
strcleft.addEventListener("pointerdown", () =>{
	strcxv = -2;

});
strcleft.addEventListener("pointerup", () =>{
	strcxv = 0;

});

let strcx1 = canvas.width / 2;
let strcy1 = canvas.height / 2;
let strcr1 = 30;
let strcxv1 = 0;
let strcyv1 = 0;

let strCTransparent1;
	function paintCircleTrans1(){
	strCTransparent1 = strctransparency1.value;
	}

function strCircle1(){
	let strcRadius1 = strcradius1.value;
	let strCColor1 = strccolor1.value;
	let strCLineWidth1 = strclinewidt1.value;
	
	strcx1 += strcxv1;
	strcy1 += strcyv1;
		ctx.beginPath();
		ctx.globalAlpha = strCTransparent1;
		ctx.strokeStyle = strCColor1;
		ctx.lineWidth = strCLineWidth1;
		ctx.arc(strcx1,strcy1,strcRadius1,0,Math.PI * 2);
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	requestAnimationFrame(strCircle1);

	strcircle1.style.display = "none";
	strcircle2.style.display = "inline";

	strcup.style.display = "none";
	strcright.style.display = "none";
	strcdown.style.display = "none";
	strcleft.style.display = "none";

	strcup1.style.display = "inline";
	strcright1.style.display = "inline";
	strcdown1.style.display = "inline";
	strcleft1.style.display = "inline";


	strccolor.style.display = "none";
	strclinewidth.style.display = "none";
	strcradius.style.display = "none";
	strctransparency.style.display = "none";

	strccolor1.style.display = "inline";
	strclinewidt1.style.display = "inline";
	strcradius1.style.display = "inline";
	strctransparency1.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "inline";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
	
}
strcup1.addEventListener("pointerdown", () =>{
	strcyv1 = -2;

});
strcup1.addEventListener("pointerup", () =>{
	strcyv1 = 0;

});
strcright1.addEventListener("pointerdown", () =>{
	strcxv1 = 2;

});
strcright1.addEventListener("pointerup", () =>{
	strcxv1 = 0;

});
strcdown1.addEventListener("pointerdown", () =>{
	strcyv1 = 2;

});
strcdown1.addEventListener("pointerup", () =>{
	strcyv1 = 0;

});
strcleft1.addEventListener("pointerdown", () =>{
	strcxv1 = -2;

});
strcleft1.addEventListener("pointerup", () =>{
	strcxv1 = 0;

});

let strcx2 = canvas.width / 2;
let strcy2 = canvas.height / 2;
let strcr2 = 30;
let strcxv2 = 0;
let strcyv2 = 0;

let strCTransparent2;
	function paintCircleTrans2(){
	strCTransparent2 = strctransparency2.value;
	}

function strCircle2(){

	let strcRadius2 = strcradius2.value;
	let strCColor2 = strccolor2.value;
	let strCLineWidth2 = strclinewidt2.value;
	
	strcx2 += strcxv2;
	strcy2 += strcyv2;
	ctx.beginPath();
	ctx.globalAlpha = strCTransparent2;
	ctx.strokeStyle = strCColor2;
	ctx.lineWidth = strCLineWidth2;
	ctx.arc(strcx2,strcy2,strcRadius2,0,Math.PI * 2);
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
	requestAnimationFrame(strCircle2);

	strcircle2.style.display = "none";
	strcircle3.style.display = "inline";

	strcup1.style.display = "none";
	strcright1.style.display = "none";
	strcdown1.style.display = "none";
	strcleft1.style.display = "none";

	strcup2.style.display = "inline";
	strcright2.style.display = "inline";
	strcdown2.style.display = "inline";
	strcleft2.style.display = "inline";

	strccolor1.style.display = "none";
	strclinewidt1.style.display = "none";
	strcradius1.style.display = "none";
	strctransparency1.style.display = "none";

	strccolor2.style.display = "inline";
	strclinewidt2.style.display = "inline";
	strcradius2.style.display = "inline";
	strctransparency2.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "inline";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
strcup2.addEventListener("pointerdown", () =>{
	strcyv2 = -2;

});
strcup2.addEventListener("pointerup", () =>{
	strcyv2 = 0;

});
strcright2.addEventListener("pointerdown", () =>{
	strcxv2 = 2;

});
strcright2.addEventListener("pointerup", () =>{
	strcxv2 = 0;

});
strcdown2.addEventListener("pointerdown", () =>{
	strcyv2 = 2;

});
strcdown2.addEventListener("pointerup", () =>{
	strcyv2 = 0;

});
strcleft2.addEventListener("pointerdown", () =>{
	strcxv2 = -2;

});
strcleft2.addEventListener("pointerup", () =>{
	strcxv2 = 0;

});

let strcx3 = canvas.width / 2;
let strcy3 = canvas.height / 2;
let strcr3 = 30;
let strcxv3 = 0;
let strcyv3 = 0;

let strCTransparent3;
	function paintCircleTrans3(){
	strCTransparent3 = strctransparency3.value;
	}

function strCircle3(){
	let strcRadius3 = strcradius3.value;
	let strCColor3 = strccolor3.value;
	let strCLineWidth3 = strclinewidt3.value;
	
	strcx3 += strcxv3;
	strcy3 += strcyv3;
	ctx.beginPath();
	ctx.globalAlpha = strCTransparent3;
	ctx.strokeStyle = strCColor3;
	ctx.lineWidth = strCLineWidth3;
	ctx.arc(strcx3,strcy3,strcRadius3,0,Math.PI * 2);
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
	requestAnimationFrame(strCircle3);

	strcircle3.style.display = "none";
	strcircle4.style.display = "inline";

	strcup2.style.display = "none";
	strcright2.style.display = "none";
	strcdown2.style.display = "none";
	strcleft2.style.display = "none";

	strcup3.style.display = "inline";
	strcright3.style.display = "inline";
	strcdown3.style.display = "inline";
	strcleft3.style.display = "inline";

	strccolor2.style.display = "none";
	strclinewidt2.style.display = "none";
	strcradius2.style.display = "none";
	strctransparency2.style.display = "none";

	strccolor3.style.display = "inline";
	strclinewidt3.style.display = "inline";
	strcradius3.style.display = "inline";
	strctransparency3.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "inline";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
strcup3.addEventListener("pointerdown", () =>{
	strcyv3 = -2;

});
strcup3.addEventListener("pointerup", () =>{
	strcyv3 = 0;

});
strcright3.addEventListener("pointerdown", () =>{
	strcxv3 = 2;

});
strcright3.addEventListener("pointerup", () =>{
	strcxv3 = 0;

});
strcdown3.addEventListener("pointerdown", () =>{
	strcyv3 = 2;

});
strcdown3.addEventListener("pointerup", () =>{
	strcyv3 = 0;

});
strcleft3.addEventListener("pointerdown", () =>{
	strcxv3 = -2;

});
strcleft3.addEventListener("pointerup", () =>{
	strcxv3 = 0;

});

let strcx4 = canvas.width / 2;
let strcy4 = canvas.height / 2;
let strcr4 = 30;
let strcxv4 = 0;
let strcyv4 = 0;

let strCTransparent4;
	function paintCircleTrans4(){
	strCTransparent4 = strctransparency4.value;
	}

function strCircle4(){

	let strcRadius4 = strcradius4.value;
	let strCColor4 = strccolor4.value;
	let strCLineWidth4 = strclinewidt4.value;
	
	strcx4 += strcxv4;
	strcy4 += strcyv4;
	ctx.beginPath();
	globalAlpha = strCTransparent4;
	ctx.strokeStyle = strCColor4;
	ctx.lineWidth = strCLineWidth4;
	ctx.arc(strcx4,strcy4,strcRadius4,0,Math.PI * 2);
	ctx.stroke();
	ctx.closePath();
	requestAnimationFrame(strCircle4);

	strcircle4.style.display = "none";
	//strcircle4.style.display = "inline";

	strcup3.style.display = "none";
	strcright3.style.display = "none";
	strcdown3.style.display = "none";
	strcleft3.style.display = "none";

	strcup4.style.display = "inline";
	strcright4.style.display = "inline";
	strcdown4.style.display = "inline";
	strcleft4.style.display = "inline";

	strccolor3.style.display = "none";
	strclinewidt3.style.display = "none";
	strcradius3.style.display = "none";
	strctransparency3.style.display = "none";

	strccolor4.style.display = "inline";
	strclinewidt4.style.display = "inline";
	strcradius4.style.display = "inline";
	strctransparency4.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "inline";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";
}
strcup4.addEventListener("pointerdown", () =>{
	strcyv4 = -2;

});
strcup4.addEventListener("pointerup", () =>{
	strcyv4 = 0;

});
strcright4.addEventListener("pointerdown", () =>{
	strcxv4 = 2;

});
strcright4.addEventListener("pointerup", () =>{
	strcxv4 = 0;

});
strcdown4.addEventListener("pointerdown", () =>{
	strcyv4 = 2;

});
strcdown4.addEventListener("pointerup", () =>{
	strcyv4 = 0;

});
strcleft4.addEventListener("pointerdown", () =>{
	strcxv4 = -2;

});
strcleft4.addEventListener("pointerup", () =>{
	strcxv4 = 0;

});

const imgmake = document.getElementById("imgmake");
const imgmake1 = document.getElementById("imgmake1");
const imgmake2 = document.getElementById("imgmake2");
const imgmake3 = document.getElementById("imgmake3");
const imgmake4 = document.getElementById("imgmake4");
	imgmake1.style.display = "none";
	imgmake2.style.display = "none";
	imgmake3.style.display = "none";
	imgmake4.style.display = "none";

const imgup = document.getElementById("imgup");
const imgright = document.getElementById("imgright");
const imgdown = document.getElementById("imgdown");
const imgleft = document.getElementById("imgleft");



const imgup1 = document.getElementById("imgup1");
const imgright1 = document.getElementById("imgright1");
const imgdown1 = document.getElementById("imgdown1");
const imgleft1 = document.getElementById("imgleft1");

	imgup1.style.display = "none";
	imgright1.style.display = "none";
	imgdown1.style.display = "none";
	imgleft1.style.display = "none";

const imgup2 = document.getElementById("imgup2");
const imgright2 = document.getElementById("imgright2");
const imgdown2 = document.getElementById("imgdown2");
const imgleft2 = document.getElementById("imgleft2");

	imgup2.style.display = "none";
	imgright2.style.display = "none";
	imgdown2.style.display = "none";
	imgleft2.style.display = "none";

const imgup3 = document.getElementById("imgup3");
const imgright3 = document.getElementById("imgright3");
const imgdown3 = document.getElementById("imgdown3");
const imgleft3 = document.getElementById("imgleft3");

	imgup3.style.display = "none";
	imgright3.style.display = "none";
	imgdown3.style.display = "none";
	imgleft3.style.display = "none";

const imgup4 = document.getElementById("imgup4");
const imgright4 = document.getElementById("imgright4");
const imgdown4 = document.getElementById("imgdown4");
const imgleft4 = document.getElementById("imgleft4");

	imgup4.style.display = "none";
	imgright4.style.display = "none";
	imgdown4.style.display = "none";
	imgleft4.style.display = "none";


const imgminH = document.getElementById("imgminH");
const imgmaxW = document.getElementById("imgmaxW");
const imgmaxH = document.getElementById("imgmaxH");
const imgminW = document.getElementById("imgminW");

const imgminH1 = document.getElementById("imgminH1");
const imgmaxW1 = document.getElementById("imgmaxW1");
const imgmaxH1 = document.getElementById("imgmaxH1");
const imgminW1 = document.getElementById("imgminW1");

	imgminH1.style.display = "none";
	imgmaxW1.style.display = "none";
	imgmaxH1.style.display = "none";
	imgminW1.style.display = "none";

const imgminH2 = document.getElementById("imgminH2");
const imgmaxW2 = document.getElementById("imgmaxW2");
const imgmaxH2 = document.getElementById("imgmaxH2");
const imgminW2 = document.getElementById("imgminW2");

	imgminH2.style.display = "none";
	imgmaxW2.style.display = "none";
	imgmaxH2.style.display = "none";
	imgminW2.style.display = "none";

const imgminH3 = document.getElementById("imgminH3");
const imgmaxW3 = document.getElementById("imgmaxW3");
const imgmaxH3 = document.getElementById("imgmaxH3");
const imgminW3 = document.getElementById("imgminW3");

	imgminH3.style.display = "none";
	imgmaxW3.style.display = "none";
	imgmaxH3.style.display = "none";
	imgminW3.style.display = "none";

const imgminH4 = document.getElementById("imgminH4");
const imgmaxW4 = document.getElementById("imgmaxW4");
const imgmaxH4 = document.getElementById("imgmaxH4");
const imgminW4 = document.getElementById("imgminW4");

	imgminH4.style.display = "none";
	imgmaxW4.style.display = "none";
	imgmaxH4.style.display = "none";
	imgminW4.style.display = "none";

const file = document.getElementById("file");
const file1 = document.getElementById("file1");
const file2 = document.getElementById("file2");
const file3 = document.getElementById("file3");
const file4 = document.getElementById("file4");

	
	file1.style.display = "none";
	file2.style.display = "none";
	file3.style.display = "none";
	file4.style.display = "none";



	


	let imgx = canvas.width / 2;
	let imgy = canvas.height / 2;
	let imgw = 100;
	let imgh = 100;
	let imgxv = 0;
	let imgyv = 0;
	let imgwv = 0;
	let imghv = 0;
const image = document.getElementById("imgDisplayed");
function imgMake(){

	imageButtons.style.display = "inline";

	imgx += imgxv;
	imgy += imgyv;
	imgw += imgwv;
	imgh += imghv;
	ctx.beginPath();
	ctx.globalAlpha = 1;
	ctx.drawImage(image, imgx, imgy, imgw, imgh);
	ctx.closePath();
	requestAnimationFrame(imgMake);

	imgmake.style.display = "none";
	imgmake1.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "inline";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}
imgup.addEventListener("pointerdown", () =>{
	imgyv = -2;

});
imgup.addEventListener("pointerup", () =>{

	imgyv = 0;

});
imgright.addEventListener("pointerdown", () =>{

	imgxv = 2;

});
imgright.addEventListener("pointerup", () =>{

	imgxv = 0;

});
imgdown.addEventListener("pointerdown", () =>{

	imgyv = 2;

});
imgdown.addEventListener("pointerup", () =>{

	imgyv = 0;

});
imgleft.addEventListener("pointerdown", () =>{

	imgxv = -2;

});
imgleft.addEventListener("pointerup", () =>{

	imgxv = 0;

});



imgminH.addEventListener("pointerdown", () =>{
	imghv = -2;

});
imgminH.addEventListener("pointerup", () =>{
	imghv = 0;

});
imgmaxW.addEventListener("pointerdown", () =>{
	imgwv = 2;

});
imgmaxW.addEventListener("pointerup", () =>{
	imgwv = 0;

});
imgmaxH.addEventListener("pointerdown", () =>{
	imghv = 2;

});
imgmaxH.addEventListener("pointerup", () =>{
	imghv = 0;

});
imgminW.addEventListener("pointerdown", () =>{
	imgwv = -2;

});
imgminW.addEventListener("pointerup", () =>{
	imgwv = 0;

});
function loadImage(event){

    const image = document.getElementById("imgDisplayed");
    image.style.display = "none";
    image.src = URL.createObjectURL(event.target.files[0]);
}

	let imgx1 = canvas.width / 2;
	let imgy1 = canvas.height / 2;
	let imgw1 = 100;
	let imgh1 = 100;
	let imgxv1 = 0;
	let imgyv1 = 0;
	let imgwv1 = 0;
	let imghv1 = 0;
const image1 = document.getElementById("imgDisplayed1");
function imgMake1(){
	imgx1 += imgxv1;
	imgy1 += imgyv1;
	imgw1 += imgwv1;
	imgh1 += imghv1;
	ctx.beginPath();
	ctx.globalAlpha = 1;
	ctx.drawImage(image1, imgx1, imgy1, imgw1, imgh1);
	ctx.closePath();
	requestAnimationFrame(imgMake1);

	imgmake1.style.display = "none";
	imgmake2.style.display = "inline";


	imgup.style.display = "none";
	imgright.style.display = "none";
	imgdown.style.display = "none";
	imgleft.style.display = "none";

	imgup1.style.display = "inline";
	imgright1.style.display = "inline";
	imgdown1.style.display = "inline";
	imgleft1.style.display = "inline";


	imgminH.style.display = "none";
	imgmaxW.style.display = "none";
	imgmaxH.style.display = "none";
	imgminW.style.display = "none";

	imgminH1.style.display = "inline";
	imgmaxW1.style.display = "inline";
	imgmaxH1.style.display = "inline";
	imgminW1.style.display = "inline";

	file.style.display = "none";
	file1.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "inline";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}
imgup1.addEventListener("pointerdown", () =>{
	imgyv1 = -2;

});
imgup1.addEventListener("pointerup", () =>{

	imgyv1 = 0;

});
imgright1.addEventListener("pointerdown", () =>{

	imgxv1 = 2;

});
imgright1.addEventListener("pointerup", () =>{

	imgxv1 = 0;

});
imgdown1.addEventListener("pointerdown", () =>{

	imgyv1 = 2;

});
imgdown1.addEventListener("pointerup", () =>{

	imgyv1 = 0;

});
imgleft1.addEventListener("pointerdown", () =>{

	imgxv1 = -2;

});
imgleft1.addEventListener("pointerup", () =>{

	imgxv1 = 0;

});

imgminH1.addEventListener("pointerdown", () =>{
	imghv1 = -2;

});
imgminH1.addEventListener("pointerup", () =>{
	imghv1 = 0;

});
imgmaxW1.addEventListener("pointerdown", () =>{
	imgwv1 = 2;

});
imgmaxW1.addEventListener("pointerup", () =>{
	imgwv1 = 0;

});
imgmaxH1.addEventListener("pointerdown", () =>{
	imghv1 = 2;

});
imgmaxH1.addEventListener("pointerup", () =>{
	imghv1 = 0;

});
imgminW1.addEventListener("pointerdown", () =>{
	imgwv1 = -2;

});
imgminW1.addEventListener("pointerup", () =>{
	imgwv1 = 0;

});
function loadImage1(event){

    const image1 = document.getElementById("imgDisplayed1");
    image1.style.display = "none";
    image1.src = URL.createObjectURL(event.target.files[0]);
}

	let imgx2 = canvas.width / 2;
	let imgy2 = canvas.height / 2;
	let imgw2 = 100;
	let imgh2 = 100;
	let imgxv2 = 0;
	let imgyv2 = 0;
	let imgwv2 = 0;
	let imghv2 = 0;
const image2 = document.getElementById("imgDisplayed2");
function imgMake2(){
	imgx2 += imgxv2;
	imgy2 += imgyv2;
	imgw2 += imgwv2;
	imgh2 += imghv2;
	ctx.beginPath();
	ctx.globalAlpha = 1;
	ctx.drawImage(image2, imgx2, imgy2, imgw2, imgh2);
	ctx.closePath();
	requestAnimationFrame(imgMake2);

	imgmake2.style.display = "none";
	imgmake3.style.display = "inline";


	imgup1.style.display = "none";
	imgright1.style.display = "none";
	imgdown1.style.display = "none";
	imgleft1.style.display = "none";

	imgup2.style.display = "inline";
	imgright2.style.display = "inline";
	imgdown2.style.display = "inline";
	imgleft2.style.display = "inline";


	imgminH1.style.display = "none";
	imgmaxW1.style.display = "none";
	imgmaxH1.style.display = "none";
	imgminW1.style.display = "none";

	imgminH2.style.display = "inline";
	imgmaxW2.style.display = "inline";
	imgmaxH2.style.display = "inline";
	imgminW2.style.display = "inline";

	file1.style.display = "none";
	file2.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "inline";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}
imgup2.addEventListener("pointerdown", () =>{
	imgyv2 = -2;

});
imgup2.addEventListener("pointerup", () =>{

	imgyv2 = 0;

});
imgright2.addEventListener("pointerdown", () =>{

	imgxv2 = 2;

});
imgright2.addEventListener("pointerup", () =>{

	imgxv2 = 0;

});
imgdown2.addEventListener("pointerdown", () =>{

	imgyv2 = 2;

});
imgdown2.addEventListener("pointerup", () =>{

	imgyv2 = 0;

});
imgleft2.addEventListener("pointerdown", () =>{

	imgxv2 = -2;

});
imgleft2.addEventListener("pointerup", () =>{

	imgxv2 = 0;

});

imgminH2.addEventListener("pointerdown", () =>{
	imghv2 = -2;

});
imgminH2.addEventListener("pointerup", () =>{
	imghv2 = 0;

});
imgmaxW2.addEventListener("pointerdown", () =>{
	imgwv2 = 2;

});
imgmaxW2.addEventListener("pointerup", () =>{
	imgwv2 = 0;

});
imgmaxH2.addEventListener("pointerdown", () =>{
	imghv2 = 2;

});
imgmaxH2.addEventListener("pointerup", () =>{
	imghv2 = 0;

});
imgminW2.addEventListener("pointerdown", () =>{
	imgwv2 = -2;

});
imgminW2.addEventListener("pointerup", () =>{
	imgwv2 = 0;

});
function loadImage2(event){

    const image2 = document.getElementById("imgDisplayed2");
    image2.style.display = "none";
    image2.src = URL.createObjectURL(event.target.files[0]);
}

	let imgx3 = canvas.width / 2;
	let imgy3 = canvas.height / 2;
	let imgw3 = 100;
	let imgh3 = 100;
	let imgxv3 = 0;
	let imgyv3 = 0;
	let imgwv3 = 0;
	let imghv3 = 0;
const image3 = document.getElementById("imgDisplayed3");
function imgMake3(){
	imgx3 += imgxv3;
	imgy3 += imgyv3;
	imgw3 += imgwv3;
	imgh3 += imghv3;
	ctx.beginPath();
	ctx.globalAlpha = 1;
	ctx.drawImage(image3, imgx3, imgy3, imgw3, imgh3);
	ctx.closePath();
	requestAnimationFrame(imgMake3);

	imgmake3.style.display = "none";
	imgmake4.style.display = "inline";


	imgup2.style.display = "none";
	imgright2.style.display = "none";
	imgdown2.style.display = "none";
	imgleft2.style.display = "none";

	imgup3.style.display = "inline";
	imgright3.style.display = "inline";
	imgdown3.style.display = "inline";
	imgleft3.style.display = "inline";


	imgminH2.style.display = "none";
	imgmaxW2.style.display = "none";
	imgmaxH2.style.display = "none";
	imgminW2.style.display = "none";

	imgminH3.style.display = "inline";
	imgmaxW3.style.display = "inline";
	imgmaxH3.style.display = "inline";
	imgminW3.style.display = "inline";

	file2.style.display = "none";
	file3.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "inline";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}
imgup3.addEventListener("pointerdown", () =>{
	imgyv3 = -2;

});
imgup3.addEventListener("pointerup", () =>{

	imgyv3 = 0;

});
imgright3.addEventListener("pointerdown", () =>{

	imgxv3 = 2;

});
imgright3.addEventListener("pointerup", () =>{

	imgxv3 = 0;

});
imgdown3.addEventListener("pointerdown", () =>{

	imgyv3 = 2;

});
imgdown3.addEventListener("pointerup", () =>{

	imgyv3 = 0;

});
imgleft3.addEventListener("pointerdown", () =>{

	imgxv3 = -2;

});
imgleft3.addEventListener("pointerup", () =>{

	imgxv3 = 0;

});

imgminH3.addEventListener("pointerdown", () =>{
	imghv3 = -2;

});
imgminH3.addEventListener("pointerup", () =>{
	imghv3 = 0;

});
imgmaxW3.addEventListener("pointerdown", () =>{
	imgwv3 = 2;

});
imgmaxW3.addEventListener("pointerup", () =>{
	imgwv3 = 0;

});
imgmaxH3.addEventListener("pointerdown", () =>{
	imghv3 = 2;

});
imgmaxH3.addEventListener("pointerup", () =>{
	imghv3 = 0;

});
imgminW3.addEventListener("pointerdown", () =>{
	imgwv3 = -2;

});
imgminW3.addEventListener("pointerup", () =>{
	imgwv3 = 0;

});
function loadImage3(event){

    const image3 = document.getElementById("imgDisplayed3");
    image3.style.display = "none";
    image3.src = URL.createObjectURL(event.target.files[0]);
}

	let imgx4 = canvas.width / 2;
	let imgy4 = canvas.height / 2;
	let imgw4 = 100;
	let imgh4 = 100;
	let imgxv4 = 0;
	let imgyv4 = 0;
	let imgwv4 = 0;
	let imghv4 = 0;
const image4 = document.getElementById("imgDisplayed4");
function imgMake4(){
	imgx4 += imgxv4;
	imgy4 += imgyv4;
	imgw4 += imgwv4;
	imgh4 += imghv4;
	ctx.beginPath();
	ctx.globalAlpha = 1;
	ctx.drawImage(image4, imgx4, imgy4, imgw4, imgh4);
	ctx.closePath();
	requestAnimationFrame(imgMake4);

	imgmake4.style.display = "none";
	//imgmake4.style.display = "inline";


	imgup3.style.display = "none";
	imgright3.style.display = "none";
	imgdown3.style.display = "none";
	imgleft3.style.display = "none";

	imgup4.style.display = "inline";
	imgright4.style.display = "inline";
	imgdown4.style.display = "inline";
	imgleft4.style.display = "inline";


	imgminH3.style.display = "none";
	imgmaxW3.style.display = "none";
	imgmaxH3.style.display = "none";
	imgminW3.style.display = "none";

	imgminH4.style.display = "inline";
	imgmaxW4.style.display = "inline";
	imgmaxH4.style.display = "inline";
	imgminW4.style.display = "inline";

	file3.style.display = "none";
	file4.style.display = "inline";

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "inline";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}
imgup4.addEventListener("pointerdown", () =>{
	imgyv4 = -2;

});
imgup4.addEventListener("pointerup", () =>{

	imgyv4 = 0;

});
imgright4.addEventListener("pointerdown", () =>{

	imgxv4 = 2;

});
imgright4.addEventListener("pointerup", () =>{

	imgxv4 = 0;

});
imgdown4.addEventListener("pointerdown", () =>{

	imgyv4 = 2;

});
imgdown4.addEventListener("pointerup", () =>{

	imgyv4 = 0;

});
imgleft4.addEventListener("pointerdown", () =>{

	imgxv4 = -2;

});
imgleft4.addEventListener("pointerup", () =>{

	imgxv4 = 0;

});

imgminH4.addEventListener("pointerdown", () =>{
	imghv4 = -2;

});
imgminH4.addEventListener("pointerup", () =>{
	imghv4 = 0;

});
imgmaxW4.addEventListener("pointerdown", () =>{
	imgwv4 = 2;

});
imgmaxW4.addEventListener("pointerup", () =>{
	imgwv4 = 0;

});
imgmaxH4.addEventListener("pointerdown", () =>{
	imghv4 = 2;

});
imgmaxH4.addEventListener("pointerup", () =>{
	imghv4 = 0;

});
imgminW4.addEventListener("pointerdown", () =>{
	imgwv4 = -2;

});
imgminW4.addEventListener("pointerup", () =>{
	imgwv4 = 0;

});
function loadImage4(event){

    const image4 = document.getElementById("imgDisplayed4");
    image4.style.display = "none";
    image4.src = URL.createObjectURL(event.target.files[0]);
}

const lelargecolor = document.getElementById("lelargecolor");
let lALx = 0;
let lALy = 0;
let lALx1 = canvas.width;
let lALy1 = 0;
let lALx2 = canvas.width;
let lALy2 = canvas.height;
let lALx3 = 0;
let lALy3 = canvas.height;
let lALx4 = 150;
let lALy4 = canvas.height;
let lALx5 = 150;
let lALy5 = 125;
let lALr = 125;
let lALx6 = 150;
let lALy6 = 0;
let lALx7 = 0;
let lALy7 = 0;
let lALr1 = 125;

let lALxv = 0;

function leftArcLarge(){

	leftArcButtons.style.display = "inline";

	let lLAC = lelargecolor.value;
	lALx += lALxv;
	lALx1 += lALxv;
	lALx2 += lALxv;
	lALx3 += lALxv;
	lALx4 += lALxv;
	lALx5 += lALxv;
	lALx6 += lALxv;
	lALx7 += lALxv;

	ctx.beginPath();
	ctx.fillStyle = lLAC;
	ctx.moveTo(lALx, lALy);
	ctx.lineTo(lALx1, lALy1);
	ctx.lineTo(lALx2, lALy2);
	ctx.lineTo(lALx3, lALy3);
	ctx.arcTo(lALx4, lALy4,lALx5, lALy5, lALr);
	ctx.arcTo(lALx6, lALy6, lALx7, lALy7, lALr1);
	ctx.fill();
	ctx.closePath();

	requestAnimationFrame(leftArcLarge);

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "inline";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "none";

}

leftarclargeright.addEventListener("pointerdown", () =>{
	lALxv = 2;
});
leftarclargeright.addEventListener("pointerup", () =>{
	lALxv = 0;
});
leftarclargeleft.addEventListener("pointerdown", () =>{
	lALxv = -2;
});
leftarclargeleft.addEventListener("pointerup", () =>{
	lALxv = 0;
});

const relargecolor = document.getElementById("relargecolor");
let lARx = canvas.width;
let lARy = 0;
let lARx1 = 0;
let lARy1 = 0;
let lARx2 = 0;
let lARy2 = canvas.height;
let lARx3 = canvas.width;
let lARy3 = canvas.height;
let lARx4 = canvas.width - 150;
let lARy4 = canvas.height;
let lARx5 = canvas.width - 150;
let lARy5 = 125;
let lARr = 125;
let lARx6 = canvas.width - 150;
let lARy6 = 0;
let lARx7 = canvas.width;
let lARy7 = 0;
let lARr1 = 125;

let lARxv = 0;

function rightArcLarge(){
	rightArcButtons.style.display = "inline";
	let lRAC = relargecolor.value;
	lARx += lARxv;
	lARx1 += lARxv;
	lARx2 += lARxv;
	lARx3 += lARxv;
	lARx4 += lARxv;
	lARx5 += lARxv;
	lARx6 += lARxv;
	lARx7 += lARxv;

	ctx.beginPath();
	ctx.fillStyle = lRAC;
	ctx.moveTo(lARx, lARy);
	ctx.lineTo(lARx1, lARy1);
	ctx.lineTo(lARx2, lARy2);
	ctx.lineTo(lARx3, lARy3);
	ctx.arcTo(lARx4, lARy4, lARx5, lARy5, lARr);
	ctx.arcTo(lARx6, lARy6, lARx7, lARy7, lARr1);
	ctx.fill();
	ctx.closePath();

	requestAnimationFrame(rightArcLarge);

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "inline";
		holeSquareButtons.style.display = "none";

}

rightarclargeright.addEventListener("pointerdown", () =>{
	lARxv = 2;
});
rightarclargeright.addEventListener("pointerup", () =>{
	lARxv = 0;
});
rightarclargeleft.addEventListener("pointerdown", () =>{
	lARxv = -2;
});
rightarclargeleft.addEventListener("pointerup", () =>{
	lARxv = 0;
});

const csquarecolor = document.getElementById("csquarecolor");
let csx = 140;
let csy = 50;
let csx1 = 260;
let csy1 = 50;
let csx2 = 260;
let csy2 = 170;
let csx3 = 200;
let csy3 = 170;
let csx4 = 200;
let csy4 = 150;
let csx5 = 240;
let csy5 = 150;
let csx6 = 240;
let csy6 = 110;
let csr = 40;
let csx7 = 240;
let csy7 = 70;
let csx8 = 200;
let csy8 = 70;
let csr1 = 40;
let csx9 = 160
let csy9 = 70;
let csx10 = 160
let csy10 = 110;
let csr2 = 40;
let csx11 = 160
let csy11 = 150;
let csx12 = 200
let csy12 = 150;
let csr3 = 40;
let csx13 = 200
let csy13 = 170;
let csx14 = 140
let csy14 = 170;
let csx15 = 140
let csy15 = 50;

let csxv = 0;
let csyv = 0;

function holeSquare(){

	holeSquareButtons.style.display = "inline";

	let cSquareColor = csquarecolor.value;
	csx += csxv;
	csx1 += csxv;
	csx2 += csxv;
	csx3 += csxv;
	csx4 += csxv;
	csx5 += csxv;
	csx6 += csxv;
	csx7 += csxv;
	csx8 += csxv;
	csx9 += csxv;
	csx10 += csxv;
	csx11 += csxv;
	csx12 += csxv;
	csx13 += csxv;
	csx14 += csxv;
	csx15 += csxv;

	csy += csyv;
	csy1 += csyv;
	csy2 += csyv;
	csy3 += csyv;
	csy4 += csyv;
	csy5 += csyv;
	csy6 += csyv;
	csy7 += csyv;
	csy8 += csyv;
	csy9 += csyv;
	csy10 += csyv;
	csy11 += csyv;
	csy12 += csyv;
	csy13 += csyv;
	csy14 += csyv;
	csy15 += csyv;

	ctx.beginPath();
	ctx.fillStyle = cSquareColor;
	ctx.moveTo(csx,csy);
	ctx.lineTo(csx1,csy1);
	ctx.lineTo(csx2,csy2);
	ctx.lineTo(csx3,csy3);
	ctx.lineTo(csx4,csy4);
	ctx.arcTo(csx5,csy5,csx6,csy6,csr);
	ctx.arcTo(csx7,csy7,csx8,csy8,csr1);
	ctx.arcTo(csx9,csy9,csx10,csy10,csr2);
	ctx.arcTo(csx11,csy11,csx12,csy12,csr3);
	ctx.lineTo(csx13,csy13);
	ctx.lineTo(csx14,csy14);
	ctx.lineTo(csx15,csy15);
	ctx.fill();
	ctx.closePath();

	requestAnimationFrame(holeSquare);

		fillSquarebuttons.style.display = "none";
		fillTextButtons.style.display = "none";
		fillCircleButtons.style.display = "none";
		strokeSquareButtons.style.display = "none";
		strokeTextButtons.style.display = "none";
		strokeCircleButtons.style.display = "none";
		imageButtons.style.display = "none";
		leftArcButtons.style.display = "none";
		rightArcButtons.style.display = "none";
		holeSquareButtons.style.display = "inline";

}
midsquareright.addEventListener("pointerdown", () =>{
	csxv = 2;

});
midsquareright.addEventListener("pointerup", () =>{
	csxv = 0;

});
midsquareleft.addEventListener("pointerdown", () =>{
	csxv = -2;

});
midsquareleft.addEventListener("pointerup", () =>{
	csxv = 0;

});

midsquareup.addEventListener("pointerdown", () =>{
	csyv = -2;

});
midsquareup.addEventListener("pointerup", () =>{
	csyv = 0;

});
midsquaredown.addEventListener("pointerdown", () =>{
	csyv = 2;

});
midsquaredown.addEventListener("pointerup", () =>{
	csyv = 0;

});
ctx.globalAlpha = 1;

const down = document.getElementById("down");
down.addEventListener("click", function(){

    const canvas = document.getElementById("canvas");

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
});