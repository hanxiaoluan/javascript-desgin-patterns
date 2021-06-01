
/**
 * @description 这是来自于flash的动画
 */

var tween = {
	linear: function(t, b, c, d) {
		return c * t / d + b
	},
	easeIn: function(t, b, c, d) {
		return c * (t /= d) * t + b
	},
	strongEaseIn: function(t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b
	}
}

var Animate = function(dom) {
	this.dom = dom // 进行运算的dom节点
	this.startTime = 0 // 动画开始时间
	this.startPos = 0 // 动画开始时的dom节点的起始位置
	this.endPos = 0 // 动画结束时的结束位置
	this.propertyName = null // dom节点需要被改变的css属性名
	this.easing = null // 缓动算法
	this.duration = null // 动画持续时间
}

/**
 *
 * @param {*} propertyName  要改变的css属性名
 * @param {*} endPos  小球运动的目标位置
 * @param {*} duration 动画持续时间
 * @param {*} easing 缓动算法
 */
Animate.prototype.start = function(propertyName, endPos, duration, easing) {
	this.startTime = +new Date()
	this.startPos = this.dom.getBoundingClientRect()[propertyName] // dom节点的初始位置
	this.propertyName = propertyName
	this.endPos = endPos
	this.duration = duration
	this.easing = tween[easing]

	var self = this
	var timeId = setInterval(() => {
		if (self.step() === false) {
			clearInterval(timeId)
		}
	}, 19)
}

Animate.prototype.step = function() {
	var t = +new Date()
	if (t >= this.startTime + this.duration) {
		this.update(this.endPos)
		return false
	}

	var pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration)

	this.update(pos)
}

Animate.prototype.update = function(pos) {
	this.dom.style[this.propertyName] = pos + 'px'
}

var div = document.getElementById('div')
var animate = new Animate(div)

animate.start('left', 500, 1000, 'stringEaseOut')
