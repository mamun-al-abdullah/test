

const app = (() =>{

const {main} = crn(`<v poa i0 nos>

<meta name="theme-color" media="(prefers-color-scheme: light)" content="#00a1ff" />

<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0d1419" />

<v ref=main poa i0 bg="L180,oz,wz" c clzzz f50 ttu>m o s</v>

</v>`)


return {
main
}

})()



app.icons = {
home : `<svg fill=#ffffffaa s24><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>`,

apps : `<svg fill=#ffffffaa s24><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></svg>`,

task : `<svg fill=#ffffffaa s24><path d="M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44A9.9 9.9 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39l-1.61 1.61z"></path></svg>`,

book : `<svg fill=#ffffffaa s24><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path><path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"></path></svg>`,
}
crn( `
<v pof r0 t50p ty-50p f20 bg="L90,oz,wz" px5 py5 bsm5 cm15 cp15 oh>
	<v>
		<mi bgaaae c10 c>${app.icons.book}</mi>
				<h s5></h>
		<mi bgaaze bsm4 c10 c>${app.icons.task}</mi>
				<h s5></h>
		<mi bgaaae c10 c>${app.icons.apps}</mi>
				<h s5></h>
		<mi bgaaae c10 c>${app.icons.home}</mi>
	</v>
</v>
`)