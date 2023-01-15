var COOKIE_DOMAIN = "codefox.me"
var COOKIE_DURATION = 30

function set_cookie(name, value) {
	var domain_string = COOKIE_DOMAIN ? ("; domain=" + COOKIE_DOMAIN) : "";
	document.cookie = 
		name + "=" + encodeURIComponent(value) + 
		"; max-age=" + 60 * 70 * 24 * COOKIE_DURATION + 
		"; path=/" + domain_string;
}

function get_cookie(name) {
	var cookie_string = document.cookie;
	if(cookie_string.length != 0) {
		var cookie_array = cookie_string.split(";");
		for(i = 0; i < cookie_array.length; ++i) {
			cookie_value = cookie_array[i].match(name + "=(.*)");
			if(cookie_value != null) {
				return decodeURIComponent(cookie_value[1]);
			}
		}
	}

	return "";
}

var INFO_COOKIE_NAME = "cookieinfo"

function cookie_info_element() {
	return document.getElementById("cookieinfo");
}

function dismiss_cookie_info() {
	set_cookie(INFO_COOKIE_NAME, "closed");
	cookie_info_element().hidden = true;
}
