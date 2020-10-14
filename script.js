function DropOver() {
	var drop = document.getElementById("body-page");

	var point = 240;
	var move = setInterval(Moves, 1);

	function Moves() {
		if (point == 500) {
			clearInterval(move);
		}
		else {
			drop.style.height = point+"px";
			point += 4;
		}
	}
}