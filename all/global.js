

const app = (() =>{

const {main} = crn(`<v poa i0>

<meta name="theme-color" media="(prefers-color-scheme: light)" content="#00a1ff" />

<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0d1419" />

<v ref=main poa i0 bg="L180,oz,wz" c clzzz f50 ttu>m o s</v>

</v>`)


return {
main
}

})()



app.icons = {
home : `<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>`,

apps : `<svg><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></svg>`,

}
crn(app.main, `
<v pof b0 f20 bgo p5 px15 cm15 cn15>
	<h>
		<mi>${app.icons.apps}</mi>
		<mi>${app.icons.home}</mi>
	</h>
</v>
`)