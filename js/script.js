var numBoxes = 16;

$(document).ready(function() {
	displayGrid(numBoxes);
	$('.reset').click(function() {
		reset();
	});

});

function displayGrid(n) {
	size = 480;
	var boxSize = (size - 2*n)/n;
	var wrap = $(".wrap").html("");
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			wrap.append( $("<div></div>").addClass("square").height(boxSize).width(boxSize) );
		}
		wrap.append($("<div></div>").css("clear", "both"));
	}
	etch();
};

function clean(){
	$(".square").remove();
	displayGrid(numBoxes);

};
function etch() {
	$(".square").mouseenter(function() {
		$(this).addClass('etch');
	});
};

function reset() {
	var input = prompt("Enter number of squares");
	displayGrid(input);
	//$(".square").css({"background": "#FFFFFF"});
	$(this).addClass('clear');
};