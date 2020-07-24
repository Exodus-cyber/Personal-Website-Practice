




//jQuery for Icon Hover funciton to toggle size
// also make clickable 
$(document).ready(function() {
    $(".fa").hover(function() {
           $(this).css("font-size", "40px");
    }, function() {
        $(this).css("font-size", "30px");
    });
});

$(document).ready(function() {
    $("#clickl").click(function() { 
       window.location = "https://www.linkedin.com/in/anthony-cullors-b44a07157/"
    });
});

$(document).ready(function() {
    $("#clickg").click(function() { 
       window.location = "https://github.com/exodus-cyber"
    });
});

$(document).ready(function() {
    $("#clicki").click(function() { 
       window.location = "https://www.instagram.com/anthonycullors/"
    });
});

$(document).ready(function() {
    $("#clickf").click(function() { 
       window.location = "http://facebook.com/anthonycullors"
    });
});

$(document).ready(function() {
    $(".clickGL").click(function() { 
       $(this).gitRequest();
    });
});




// ajax request list of GitHub repositories 
// https://api.github.com/users/YOURUSERNAME/repos
let gitRequest = new XMLHttpRequest();
gitRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myGitObj = JSON.parse(this.responseText);
        document.getElementById("#repos").innerHTML = myGitObj.login;
    }
}
gitRequest.open("GET", "anthony.json", true);
gitRequest.send();



//sticky footer
$(document).ready(function () {
    var $docH = $(document).height();
    $('.footer').css({
        top: ($docH - 52) + 'px'
    });
});