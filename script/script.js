(function() {
	var colors = [
		'#D63031',
		'#E44236',
		'#AE1438',
		'#2475B0',
		'#3498DB',
		'#192A56',
		'#26ae60',
		'#10A881',
		'#218F76',
		'#2C3335',
		'#8395A7',
		'#4C4B4B',
		'#2B2B52',
		'#8B78E6',
		'#E74292',
		'#1287A5'
	];
	var randomIndex = Math.floor(Math.random() * colors.length);

	document.body.style.backgroundColor = colors[randomIndex];
})();
