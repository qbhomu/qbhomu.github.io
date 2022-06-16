var scripts = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16"];
if (!document.getElementById("garaje_co33ww")) {
    var iframe = document.createElement('iframe');
    iframe.src = `https://player.twitch.tv/?channel=eric_homu&parent=${window.location.hostname}&controls=true`;
    iframe.id = "garaje_co33ww";
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
    // scripts.forEach(script => {
    //     if (document.getElementById(script)) {
    //         document.getElementById(script).remove();
    //     }
    // });
}
