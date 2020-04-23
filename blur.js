
function blurSensitiveInfo(windowLocation){
    switch (windowLocation) {
        case "https://www.ebay.co.uk/":
       
            var mainPageUsernameCSSId = "gh-ug";
            // document.getElementById(mainPageUsernameCSSId).style.filter = "blur('3px')";
            // document.getElementById(mainPageUsernameCSSId).style.backgroundColor = "#765765";
            var mainPageUsernameElement = document.getElementById(mainPageUsernameCSSId);
            mainPageUsernameElement.style.backgroundColor = "#838383";
            mainPageUsernameElement.setAttribute("style", "filter: blur('3px')");
            break;
    }
}

function getCurrentLocation() {
    var windowLocation = window.location.href;

    console.log(`Location ${windowLocation}`);

    blurSensitiveInfo(windowLocation);
}

getCurrentLocation();
