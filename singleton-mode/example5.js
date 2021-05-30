var createLoginLayer = (function() {
	var div

	return function() {
		if (!div) {
			div = document.createElement('div')
			div.innerHTML = '我是登录浮窗'
			div.style.display = 'none'
			document.body.appendChild(div)
		}

		return div
	}
})()
document.getElementById('loginId').onclick = function() {
	var loginLayer = createLoginLayer()
	loginLayer.style.display = 'block'
}
