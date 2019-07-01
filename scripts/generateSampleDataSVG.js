// export module
module.exports = function (tokenme, tokenid) {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="128" width="128" viewBox="0 0 32 32" xmlns:xlink="http://www.w3.org/1999/xlink">
	<g id="body" style="stroke:${tokenme.skintone};">
		<g id="feet">
			<line x1="12" y1="31" x2="15" y2="31" />
			<line x1="16" y1="31" x2="19" y2="31" />
		</g>
		<g id="rightleg">
			<line x1="13" y1="30" x2="15" y2="30" />
			<line x1="13" y1="29" x2="15" y2="29" />
			<line x1="13" y1="28" x2="15" y2="28" />
			<line x1="13" y1="27" x2="15" y2="27" />
			<line x1="13" y1="26" x2="15" y2="26" />
			<line x1="13" y1="25" x2="15" y2="25" />
			<line x1="13" y1="24" x2="15" y2="24" />
		</g>
		<g id="leftleg">
			<line x1="16" y1="30" x2="18" y2="30" />
			<line x1="16" y1="29" x2="18" y2="29" />
			<line x1="16" y1="28" x2="18" y2="28" />
			<line x1="16" y1="27" x2="18" y2="27" />
			<line x1="16" y1="26" x2="18" y2="26" />
			<line x1="16" y1="25" x2="18" y2="25" />
			<line x1="16" y1="24" x2="18" y2="24" />
		</g>
		<g id="core">
			<line x1="13" y1="23" x2="18" y2="23" />
			<line x1="13" y1="22" x2="18" y2="22" />
			<line x1="13" y1="21" x2="18" y2="21" />
			<line x1="13" y1="20" x2="18" y2="20" />
			<line x1="13" y1="19" x2="18" y2="19" />
			<line x1="13" y1="18" x2="18" y2="18" />
			<line x1="13" y1="17" x2="18" y2="17" />
			<line x1="13" y1="16" x2="18" y2="16" />
			<line x1="13" y1="15" x2="18" y2="15" />
		</g>
		<g id="rightarm">
			<line x1="20" y1="22" x2="21" y2="22" />
			<line x1="20" y1="21" x2="21" y2="21" />
			<line x1="20" y1="20" x2="21" y2="20" />
            <line x1="20" y1="19" x2="21" y2="19" />
            <line x1="20" y1="18" x2="21" y2="18" />
            <line x1="20" y1="17" x2="21" y2="17" />
            <line x1="20" y1="16" x2="21" y2="16" />
            <line x1="18" y1="15" x2="20" y2="15" />
        </g>
		<g id="leftarm">
			<line x1="10" y1="22" x2="11" y2="22" />
			<line x1="10" y1="21" x2="11" y2="21" />
			<line x1="10" y1="20" x2="11" y2="20" />
            <line x1="10" y1="19" x2="11" y2="19" />
            <line x1="10" y1="18" x2="11" y2="18" />
            <line x1="10" y1="17" x2="11" y2="17" />
            <line x1="10" y1="16" x2="11" y2="16" />
            <line x1="11" y1="15" x2="13" y2="15" />
        </g>
		<g id="head">
			<line x1="14" y1="14" x2="17" y2="14" />
			<line x1="13" y1="13" x2="18" y2="13" />
			<line x1="13" y1="12" x2="18" y2="12" />
			<line x1="13" y1="11" x2="18" y2="11" />
			<line x1="13" y1="10" x2="18" y2="10" />
			<line x1="13" y1="9" x2="18" y2="9" />
			<line x1="14" y1="8" x2="17" y2="8" />
		</g>
	</g>
	<g id="eyes" style="stroke:Blue;">
		<line x1="14" y1="10" x2="15" y2="10" />
		<line x1="16" y1="10" x2="17" y2="10" />
	</g>
	<g id="hair" style="stroke:Black;">
		<line x1="13" y1="8" x2="18" y2="8" />
	</g>


	<g id="baselayer" style="stroke:Black;">
		<g id="bottom">
			<line x1="13" y1="25" x2="15" y2="25" />
			<line x1="13" y1="24" x2="15" y2="24" />
			<line x1="16" y1="25" x2="18" y2="25" />
			<line x1="16" y1="24" x2="18" y2="24" />
            <line x1="13" y1="23" x2="18" y2="23" />
			<line x1="13" y1="22" x2="18" y2="22" />
		</g>
		<g id="top">
			<line x1="13" y1="20" x2="18" y2="20" />
			<line x1="13" y1="19" x2="18" y2="19" />
			<line x1="13" y1="18" x2="18" y2="18" />
			<line x1="13" y1="17" x2="18" y2="17" />
			<line x1="13" y1="16" x2="18" y2="16" />
			<line x1="13" y1="15" x2="14" y2="15" />
            <line x1="17" y1="15" x2="18" y2="15" />
		</g>
	</g>
</svg>`
}