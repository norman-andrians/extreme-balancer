window.onload = function()
{
	var timer = 0;
	var countdown = 11;
	var text = document.getElementById('countdown');
	var khj = document.getElementById("kdhfkh");

	var progress = setInterval(timeres, 1000);

	khj.style.opacity = 0;

	function timeres()
	{
		if (timer == 11) {
			clearInterval(progress);

			khj.style.opacity = 1;

			window.location.href = "files/extreme-balancer-0.0.4-alpha.zip";
		} else {
			timer++;
			countdown--;
			text.innerHTML = "Download starts in " + countdown + "s";
		}
	}
}