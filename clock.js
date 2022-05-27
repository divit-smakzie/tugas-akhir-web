// let teks = ''
// let n = prompt('jumlah pengulangan ');
// for(let i=1; i<=n; i++)
// 	for(let j=1; j<=n; j++)
// 		for(let k=1; k<= n; k++)
// 			teks += "Hai"

// console.log(teks)

let [a,t] = [5,7]
let k =  a + t + (Math.sqrt(a^2 + t^2))
console.log(k);
console.log(4^2)

// console.log(4.3 % 89)
// let canvas = document.getElementById('arena')
// let ctx = canvas.getContext('2d')

// let radius = canvas.height/2
// ctx.translate(radius,radius)
// radius = radius * 0.9

// function gambarLingkaran(){
// 	ctx.beginPath()
// 	ctx.arc(0, 0, radius, 0, Math.PI * 2)
// 	ctx.fillStyle = "white"
// 	ctx.fill()

// 	ctx.beginPath()
// 	ctx.arc(0, 0, radius* 0.1, 0, Math.PI * 2)
// 	ctx.fillStyle = "black"
// 	ctx.fill()
// }

// function gambarAngka(){
// 	let angka
// 	let angle
// 	let fontSize

// 	//konfigurasi font
// 	ctx.font = radius * 0.15+"px Arial"
// 	ctx.textBaseline = "middle"
// 	ctx.textAlign = "center"
// 	ctx.fillStyle = "green"

// 	//pengulangan penulisan angka
// 	for(angka=1; angka < 13; angka++){
// 		angle = angka * Math.PI/6
// 		ctx.rotate(angle)
// 		ctx.translate(0, -radius * 0.82)
// 		ctx.rotate(-angle)
// 		fontSize = radius * 0.15 * (angka % 6 - 2)
// 		console.log
// 		if(angka % 6 != 0){
// 			ctx.font =  +"px Arial"
// 			ctx.fillStyle = "red"
// 		}else{
// 			ctx.font = radius * 0.2 +"px Arial"
// 			ctx.fillStyle = "green"	
// 		}
		
// 		ctx.fillText(angka, 0, 0)
// 		ctx.rotate(angle)
// 		ctx.translate(0, radius * 0.82)
// 		ctx.rotate(-angle)
// 	}
// }

// function gambarWaktu(){
//     let now = new Date()
//     let jam = now.getHours()
//     let menit = now.getMinutes()
//     let detik = now.getSeconds() 

//     //jarum jam
//     jam = jam % 12
//     jam = (jam * Math.PI/6) + (menit * Math.PI/(6*60)) + (detik * Math.PI/(6*3600))
//     gambarJarum(jam, radius * 0.5, radius * 0.07, 'black')

//     //jarum menit
//     menit = (menit * Math.PI/30) + (detik * Math.PI/(30*60))
//     gambarJarum(menit, radius * 0.65, radius * 0.06, 'green')

//     //jarum detik
//     detik = (detik * Math.PI/30)
//     gambarJarum(detik, radius * 0.7, radius * 0.02, 'yellow')

//     // Jam : ....  Menit: .... Detik: ...
//     // console.log("Jam: "+jam+" Menit: "+menit+" Detik: "+detik)
// }

// function gambarJarum(posisi, panjang, lebar,warna){
//     ctx.beginPath()
//     ctx.lineWidth = lebar
//     ctx.lineCap = "round"
//     ctx.moveTo(0,0)
//     ctx.rotate(posisi)
//     ctx.lineTo(0, -panjang)
//     ctx.strokeStyle = warna
//     ctx.stroke()
//     ctx.rotate(-posisi)
// }

// setInterval(function(){
//     gambarLingkaran()
//     gambarAngka()
//     gambarWaktu()
// },1000)










