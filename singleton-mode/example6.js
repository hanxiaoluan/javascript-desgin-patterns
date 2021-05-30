var getSingle = function(fn) {
	var result
	return function() {
		return result || (result = fn.apply(this, arguments))
	}
}

var createLoginLayer = function() {
	var div = document.createElement('div')
	div.innerHTML = '我是登录浮窗'
	div.style.display = 'none'
	document.body.appendChild('div')

	return div
}

var createSingleLoginLayer = getSingle(createLoginLayer)

var createIframe = function() {
	var iframe = document.createElement('iframe')
	document.body.appendChild(iframe)
	return iframe
}

var createSingleIframe = getSingle(createIframe)
