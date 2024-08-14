<script>

const {c1,c2,c3} = crn(`<v poa i0 b0 c tsp pv1000 oh>
		<v bguzg h150 co80 cp80 pof t0 l0 r0></v>
		<h ref=c1 bgom poa b150 c5 tsp tn20>
				<v ref=c2 bgazg clzzz c5 tn20 ry90 tsp>
						<v ref=c3 bgezg clzzz p100 c5 tn20 rx90></v>
				</v>
		</h>
		<h bgozg clzzz pof b0 l0 r0 h60 f20>
				<f c>EASY</f>
				<f c clamq>HARD</f>
		</h>
</v>`)

let r = {t : 3}
aa(100, v=> r.t = os.random(10,50))


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


aa(r.t*300, v=>{
c1.ats(`tn${r.t}`);
c1.style.transform = `rotate3d(${random(1,2)-1},${random(1,2)-1},${random(1,2)-1},${random(1,360)}deg)`;
}
)



</script>