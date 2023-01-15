/* theme switcher */ 

var THEME_COOKIE_NAME = "theme"
var DARKMODE = true

function switch_theme(theme) {
	var i;
	var links;

	for(i = 0, links = document.getElementsByTagName("link"); i < links.length; ++i) {
		if((links[i].rel.indexOf("stylesheet") != -1) && links[i].title) {
			links[i].disabled = true;
			if(links[i].title == theme) {
				links[i].disabled = false;
			}
		}
		DARKMODE = (theme == "dark");

		var theme_selector = document.getElementById("darkmode-selector");
		theme_selector.checked = (theme == "dark");

		set_cookie(THEME_COOKIE_NAME, theme)
	}
}

function toggle_darkmode() {
	if(DARKMODE) {
		switch_theme("light");
	} else {
		switch_theme("dark");
	}
}

function load_saved_theme() {
	var theme = get_cookie(THEME_COOKIE_NAME);
	if(theme.length) {
		switch_theme(theme);
	} else {
		if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			switch_theme("dark");
		} else {
			switch_theme("light");
		}
	}
}

load_saved_theme();
