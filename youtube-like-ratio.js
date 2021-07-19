window.addEventListener(`load`, () => {
	const str = document.querySelector('#sentiment #tooltip').textContent.replaceAll('\n','').replaceAll(',', '')
	const up = parseInt((str).split(' / ')[0])
	const down = parseInt((str).split(' / ')[1])
	
	const style = document.createElement('style')
	document.head.appendChild(style)
	style.sheet.insertRule(`div#top-level-buttons-computed::before {
			content: "${Math.round(up / (up+down) * 100)}%";
			font-size: var(--ytd-tab-system_-_font-size, 1.4em);
			font-weight: var(--ytd-tab-system_-_font-weight, 700);
			letter-spacing: var(--ytd-tab-system_-_letter-spacing, 0.05em);
			display: grid;
			place-content: center;
			color: var(--yt-button-icon-button-text-color, var(--yt-spec-text-secondary, inherit));
			padding-bottom: 0.3em;
			padding-right: 0.4em;
			padding: 0 0.4em 0.3em;
			box-sizing: border-box;
		}`
	)
	document.querySelector('#sentiment').style.width = `100%`
	document.querySelector('#sentiment #container').style.backgroundColor = `var(--yt-brand-youtube-red, #f00)`
	document.querySelector('#sentiment #like-bar').style.backgroundColor = `var(--yt-spec-light-green, #2ba640)`
})
