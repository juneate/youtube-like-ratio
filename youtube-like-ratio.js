window.addEventListener(`load`, () => {
	// Obtain exact number of likes/dislikes from the first sentiment tooltip
	const str = document.querySelector('#sentiment #tooltip').textContent.replaceAll('\n','').replaceAll(',', '')
	const up = parseInt((str).split(' / ')[0])
	const down = parseInt((str).split(' / ')[1])
	
	// Setup the styling for the new component
	const style = document.createElement('style')
	document.head.appendChild(style)
	style.sheet.insertRule(`div#top-level-buttons-computed::before {
			content: "${Math.round(up / (up+down) * 100)}%";
			display: grid;
			box-sizing: border-box;
			height: 2.2em;
			padding: 0em 0.4em 0.125em;
			border: 2px solid var(--yt-spec-grey-3);
			border-radius: 0.25em;
			margin-right: 0.25em;
			align-content: center;
			align-self: center;
			font-size: var(--ytd-tab-system_-_font-size, 1.4em);
			font-weight: var(--ytd-tab-system_-_font-weight, 700);
			letter-spacing: var(--ytd-tab-system_-_letter-spacing, 0.05em);
			color: var(--yt-spec-grey-4);
		}`
	)
	style.sheet.insertRule(`#sentiment {
			width: 100% !important;
			padding-top: 2px !important;
		}`
	)
	style.sheet.insertRule(`#sentiment #container {
			background-color: var(--yt-brand-youtube-red, #f00) !important;
			height: 6px !important;
		}`
	)
	style.sheet.insertRule(`#sentiment #like-bar {
			background-color: var(--yt-spec-light-green, #2ba640) !important;
			height: 100% !important;
		}`
	)
})
