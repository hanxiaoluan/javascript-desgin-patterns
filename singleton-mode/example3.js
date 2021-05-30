var CreateDiv = function(html) {
	this.html = html
	this.init()
}

CreateDiv.prototype.init = function() {
	var div = document.createElement('div')
	div.innerHTML = this.html
	document.body.appendChild(div)
}

// 接下来引入代理类 proxySingletonCreateDiv
var ProxySingletonCreateDiv = (function() {
	var instance
	return function(html) {
		if (!instance) {
			instance = new CreateDiv(html)
		}
		return instance
	}
})()

var a = new ProxySingletonCreateDiv('sven1')
var b = new ProxySingletonCreateDiv('sven2')

console.log(a === b)
