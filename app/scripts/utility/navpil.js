/* jshint ignore: start */
// dynamically activate list items when clicked
function navpilOnClick(e) {
    e = $(e);
    e.siblings().removeClass("active");
    e.addClass("active");
}
/* jshint ignore: end */

