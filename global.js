
const [m,c1,c2,c3] = crn(`<v poa i0 b0 c tsp pv300 oh>
		<v bguzg h150 co80 cp80 pof t0 l0 r0></v>
		<h ref=c1 bgomu poa b150 c5 tsp tn20>
				<v ref=c2 bgazg clzzz c5 tn20 ry90 tsp>
						<v ref=c3 bgezg clzzz p100 c5 tn20 rx90></v>
				</v>
		</h>
		<h bgozg clzzz pof b0 l0 r0 h60 f20>
				<f c>EASY</f>
				<f c clamq>HARD</f>
		</h>
</v>`)


let dg = 270
c1.style.transform = `rotate3d(1,1,1,${dg}deg)`
c1.c = function (){
dg = dg==270? 0 : 270
c1.style.transform = `rotate3d(1,1,1,${dg}deg)`
}

