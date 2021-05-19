
class drop_rect{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'rect',p:{x:0,y:0},topleft:{x:50,y:100},rightbottom:{x:-50,y:-100},stroke:{is:true,color:'rgb(189,224,255)',width:3},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0}],

		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
class right_rect{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'line',p:{x:-6.666666666666667,y:8.164311994315688e-16},pointarray:[[-30,-30],[-10,-30],[30,0],[-10,30],[-30,30],[10,0]],stroke:{is:false,color:'rgb(35,65,255)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'line',p:{x:-23.333333333333332,y:2.8575091980104907e-15},pointarray:[[-30,-10],[-30,10],[-10,0]],stroke:{is:false,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'rect',p:{x:0,y:0},topleft:{x:-50,y:10},rightbottom:{x:50,y:-10},stroke:{is:false,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(66,59,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0},{type:'line',p:{x:-6.666666666666667,y:8.164311994315688e-16},pointarray:[[-30,-30],[-10,-30],[30,0],[-10,30],[-30,30],[10,0]],stroke:{is:false,color:'rgb(66,59,255)',width:2},fill:{is:true,color:'rgb(251,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'line',p:{x:-23.333333333333332,y:2.8575091980104907e-15},pointarray:[[-30,-10],[-30,10],[-10,0]],stroke:{is:false,color:'rgb(251,255,255)',width:2},fill:{is:true,color:'rgb(251,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false}],

		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
class left_rect{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'rect',p:{x:0,y:0},topleft:{x:-50,y:-10},rightbottom:{x:50,y:10},stroke:{is:false,color:'rgb(0,0,0)',width:2},fill:{is:true,color:'rgb(255,25,58)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0},{type:'line',p:{x:-6.666666666666667,y:8.164311994315688e-16},pointarray:[[-30,-30],[-10,-30],[30,0],[-10,30],[-30,30],[10,0]],stroke:{is:false,color:'rgb(255,25,58)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'line',p:{x:-23.333333333333332,y:2.8575091980104907e-15},pointarray:[[-30,-10],[-30,10],[-10,0]],stroke:{is:false,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false}],
		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
class judge_line{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'line',p:{x:0,y:0},pointarray:[[-500,0],[500,0]],stroke:{is:true,color:'rgb(172,235,105)',width:5},fill:{is:true,color:'rgb(0,0,0)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:30,iscolse:false}],

		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){

			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
class passage{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'rect',p:{x:0,y:0},topleft:{x:50,y:250},rightbottom:{x:-50,y:-250},stroke:{is:false,color:'rgb(191,35,0)',width:2},fill:{is:true,color:'rgb(255,168,166)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:50}],
		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}






















/*
//example
class test{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:
		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
*/