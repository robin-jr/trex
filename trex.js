function Trex() {
	this.x = width / 3;
	this.y = 30;
	this.gravity = 0.9;
	this.velocity = 0;
	this.lift = 15;
	this.speed = 5;
	this.accel = 0.001;

	this.show = function () {
		fill(255);
		ellipse(this.x, this.y, 20, 20);
	};
	this.update = function () {
		this.velocity += this.gravity;
		this.y += this.velocity;
		this.speed += this.accel;

		if (this.y > height) {
			this.y = height;
		}
		if (this.y < 0) {
			this.y = 0;
		}
	};
	this.up = function () {
		this.velocity = -this.lift;
	};
}
