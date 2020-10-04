var trex;
var rocks = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	trex = new Trex();
	rocks.push(new Rock(trex.speed));
}

function draw() {
	background(0);
	trex.show();
	trex.update();

	//for (let i = 0; i < rocks.length - 1; i++) {
	for (let i = rocks.length - 1; i >= 0; i--) {
		rocks[i].show();
		rocks[i].update();

		if (rocks[i].hits(trex)) {
			console.log("HIT");
		}

		if (rocks[i].x < 0) {
			rocks.splice(0, 1);
			rocks.push(new Rock(trex.speed));
		}
	}
	if (Math.floor(rocks[0].x) == Math.floor(width / 3)) {
		rocks.push(new Rock(trex.speed));
	}
}
function keyPressed() {
	if ((key = " ")) {
		trex.up();
	}
}
