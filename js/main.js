console.log("codefox.me website");

cookie_info_element().hidden = false;
var cookie_info_closed = get_cookie(INFO_COOKIE_NAME);
if(cookie_info_closed.length && cookie_info_closed == "closed") {
	dismiss_cookie_info();
}

window.addEventListener("load", (event) => {
	console.log("page is fully loaded");
	var curYear = document.querySelector(".currentyear");
	curYear.textContent = new Date().getFullYear();
});

/*

TODO: responsive menu for mobile

*/
