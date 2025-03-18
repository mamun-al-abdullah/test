console.log(1234)
c(5555)

const {prn, lt, dk, light, dark} = crn(`
<v ref=prn>
<meta ref=light name="theme-color" media="(prefers-color-scheme: light)" content="#ff0000" />
<meta ref=dark name="theme-color" media="(prefers-color-scheme: dark)" content="#00ff00" />

<h pof b15 l50p tx-50p>
<v ref=lt bgazx p15 m5 c5 bsm1>light</v>
<v ref=dk bgazg clzzz p15 m5 c5 bsm1>dark</v>
</h>
</v>
`)

lt.c = v=>{
light.ats(`content`, `#aaffff`)
dark.ats(`content`, `#aa00ff`)
c(111)
os.alert(1)
alert(prn.ih)
}

dk.onclick = v=>{
light.ats(`content`, `#00ffff`)
dark.ats(`content`, `#0000ff`)
console.log(222)
os.alert(prn.ih)
alert(prn.ih)
}





const {c1,c2,c3} = crn(`<v poa i0 b0 c tsp pv1000 oh>
		<v bguzg h100 co80 cp80 pof t0 l0 r0></v>
		<h ref=c1 bgom poa b150 c5 tsp tn20>
				<v ref=c2 bgazg clzzz c5 tn20 ry90 tsp>
						<v ref=c3 bgezg clzzz p100 c5 tn20 rx90></v>
				</v>
		</h>
</v>`)

let r = {t : 3}
setTimeout(v=> r.t = random(10,50), 100)


function random(min, max) {
if(!min || !max){
return Math.random()
}
if((min>=0) && (max>=0)){
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}else{
console.log("invoke os.random function with these two arguments : \nmin and max");
return "";
}
}


setInterval(v=>{
c1.ats(`tn${r.t}`);
c1.style.transform = `rotate3d(${random(1,2)-1},${random(1,2)-1},${random(1,2)-1},${random(1,360)}deg)`;
},
r.t*500)

