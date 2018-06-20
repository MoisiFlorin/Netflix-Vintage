/*
$(document).ready(function() {
    $('#device, #prices').hide();

    $(".meniu li").each(function(i) {
        $(this).click(function() {
            $(".meniu-wrapper").find("div:eq('" + i + "')").show().siblings().hide();
        });
    });
});

*/

var divs = ["Menu1", "Menu2", "Menu3"];
var visibleDivId = null;

function toggleVisibility(divId) {
    if (visibleDivId === divId) {
    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
    var i, divId, div;
    for (i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if (visibleDivId === divId) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

/*
function showMenu(){
    var x = document.getElementById('device');
    if(x.style.display === "none") {
        x.style.display = "block";
    }else {
        x.style.display = "none"
    }
}
*/

$('.meniu li').on('click', function(e){
        $('.meniu li').removeClass('active');
        $(e.currentTarget).addClass('active');
    });