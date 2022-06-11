var target = document.getElementById('header');
var iframe = document.createElement('iframe');
iframe.src = "https://player.twitch.tv/?channel=eric_homu&parent=pixeljoint.com&controls=true";
iframe.parent = "pixeljoint.com";
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
if (target) {
    target.appendChild(iframe);
}