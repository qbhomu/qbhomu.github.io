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
    document.body.append(iframe);
    var idk1 = document.getElementsByClassName("cbp-hrsub-inner")[3].children[0].children[1].children[0].children[0];
    if (idk1) {
        idk1.title = "Sponsor";
        idk1.innerHTML = "Sponsor";
    }
    var idk2 = document.getElementsByClassName("page-header")[0];
    if (idk2) {
        idk2.id = "Sponsor";
        idk2.innerHTML = "Sponsor";
    }
}
