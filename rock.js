function Rock(speed) {
	this.y = random(height - 100, height - 20);
	this.x = width;
	this.w = 10;
	this.h = 100;
	this.accel = 0.011;
	this.speed = speed;
	this.highlight = false;

	this.show = function () {
		if (this.highlight) {
			fill(255, 0, 0);
		} else {
			fill(255);
		}
		rect(this.x, this.y, this.w, this.h);
	};
	this.update = function () {
		this.speed += this.accel;
		this.x -= this.speed;
	};
	this.hits = function (trex) {
		if (trex.y > this.y && Math.floor(trex.x) == Math.floor(this.x)) {
			this.highlight = true;
			return true;
		} else {
			return false;
		}
	};
}
