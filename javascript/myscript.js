const canvas=document.getElementById('mycanvas');
const ctx=canvas.getContext('2d');
ww=window.innerWidth
wh=window.innerHeight
canvas.width=ww
canvas.height=wh
mx=ww/2
my=wh/2
let fps=100

let fileup=document.getElementById('fileup')

fileup.addEventListener('change', (e) => {
  console.log(e.target.files[0]); // get file object
});

//全域變數
let rr
let right_rr
let left_rr
let line
let tt=0
let passage_=[]
let drop_speed=3
let all_rr=[]
let all_time=[]
let iskey=[]
let mode=0
let audio

function init(){
	//event
	for(let i=0;i<6;i++){
		let aa=[]
		all_rr.push(aa)
		aa=[]
		all_time.push(aa)

	}



	line=new judge_line({position:{x:ww/2,y:600}})
	line.scale.x=2
	for(let i=0;i<5;i++){
		let pl=new passage({position:{x:550+100*i,y:500}})
		pl.scale.y=3
		pl.visible=false
		passage_.push(pl)

	}
	
	window.addEventListener('keydown',keydown)
	window.addEventListener('keyup',keyup)
}
function update(){
	if(mode===1){
		tt+=10
		for(let i=0;i<all_rr.length;i++){
			for(let y=0;y<all_rr[i].length;y++){
				all_rr[i][y].position.y+=drop_speed
				if(all_rr[i][y].position.y>wh+200){
					all_rr[i].splice(y,y+1)
				}
			}
		}
		if(tt>0&&tt%1000===0){
			if(Math.abs(Math.floor(audio.currentTime*1000)-tt)>10){
				let kk=audio.currentTime
				tt+=Math.floor(kk*100)*10-tt
			}
		}
	
	}
	
	

}
function draw(){
	background('black')
	if(mode===0){
		ctx.font='40px Verdana'
		ctx.fillStyle='white'
		ctx.fillText('PUSH SPACE TO START',ww/2-200,wh/2)

	}
	if(mode===1){
		ctx.font='40px Verdana'
		ctx.fillStyle='white'
		ctx.fillText('Time(ms)'+tt,100,100)
		ctx.beginPath()
		for(let i=500;i<500+100*6;i+=100){
			ctx.moveTo(i,0)
			ctx.lineTo(i,wh)
			ctx.strokeStyle='white'
			ctx.lineWidth=2
			ctx.stroke()
		}
		for(let i=0;i<5;i++){
			passage_[i].draw()
		}
		for(let i=0;i<all_rr.length;i++){
			for(let y=0;y<all_rr[i].length;y++){
				all_rr[i][y].draw()
			}
		}
		line.draw()
	}
	

	
	requestAnimationFrame(draw)
}
setInterval(update,1000/fps)
requestAnimationFrame(draw)


//event function
function keydown(e){
	let keyid=e.code
	if(mode===1){
		if(keyid==='KeyQ'){
			let new_rr=new drop_rect({position:{x:550,y:600},scale:{x:1,y:0.1}})
			all_rr[0].push(new_rr)
			all_time[0].push(tt)
			passage_[0].visible=true
			iskey[0]=true		
		}
		if(keyid==='KeyE'){
			let new_rr=new drop_rect({position:{x:650,y:600},scale:{x:1,y:0.1}})
			all_rr[1].push(new_rr)
			all_time[1].push(tt)
			passage_[1].visible=true
			iskey[1]=true
		}
		if(keyid==='KeyI'){
			let new_rr=new drop_rect({position:{x:850,y:600},scale:{x:1,y:0.1}})
			all_rr[2].push(new_rr)
			all_time[2].push(tt)
			passage_[3].visible=true
			iskey[2]=true
		}
		if(keyid==='KeyP'){
			let new_rr=new drop_rect({position:{x:950,y:600},scale:{x:1,y:0.1}})
			all_rr[3].push(new_rr)
			all_time[3].push(tt)
			passage_[4].visible=true
			iskey[3]=true
		}
		if(keyid==='KeyF'){
			let new_rr=new left_rect({position:{x:750,y:600},scale:{x:-1,y:1}})
			all_rr[4].push(new_rr)
			all_time[4].push(tt)
			passage_[2].visible=true
			iskey[4]=true
		}
		if(keyid==='KeyJ'){
			let new_rr=new right_rect({position:{x:750,y:600},scale:{x:1,y:1}})
			all_rr[5].push(new_rr)
			all_time[5].push(tt)
			passage_[2].visible=true
			iskey[5]=true
		}
		if(keyid==='Enter'){
			console.log('long:'+tt)
			document.open()
			document.write('[')
			for(let i=0;i<6;i++){
				document.write('[')
				document.write(all_time[i])
				document.write(']')
				if(i<5){
					document.write(',<br>')
				}
			}
			document.write(']')
		}
		if(keyid==='ArrowRight'){
			audio.currentTime+=1
			tt+=1000
			
		}
	}
	if(keyid==='Space'){
		mode=1
		audio=document.getElementById('audio')
		audio.play()
	}
	
}
function keyup(e){
	let keyid=e.code
	if(keyid==='KeyQ'){
		passage_[0].visible=false
		iskey[0]=false
	}
	if(keyid==='KeyE'){
		passage_[1].visible=false
		iskey[1]=false
	}
	if(keyid==='KeyI'){
		passage_[3].visible=false
		iskey[2]=false
	}
	if(keyid==='KeyP'){
		passage_[4].visible=false
		iskey[3]=false
	}
	if(keyid==='KeyF'){
		passage_[2].visible=false
		iskey[4]=false
	}
	if(keyid==='KeyJ'){
		passage_[2].visible=false
		iskey[5]=false
	}
}
init()


















