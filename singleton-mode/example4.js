/**
 *  @description 适当的使用命名空间
 */

var namespace1 = {
	a: function() {
		alert(1)
	},
	b: function() {
		alert(2)
	}
}

var MyApp = {}

MyApp.namespace = function(name) {
	var parts = name.split('.')
	var current = MyApp

	for (var i in parts) {
		if (!current[parts[i]]) {
			current[parts[i]] = {}
		}
		current = current[parts[i]]
	}
}

MyApp.namespace('event')
MyApp.namespace('dom.style')

/**
 *  @description 上述代码等价于
 *   var MyApp = {
 *      event:{},
 *      dom:{
 *          style:{}
 *      }
 *  }
 */

// 也可以使用闭包封装私有变量

var user = (function() {
	var _name = 'sven'
	var _age = 29

	return {
		getUserInfo: function() {
			return _name + '-' + _age
		}
	}
})()
