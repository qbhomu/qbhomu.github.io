var footer = document.getElementsByClassName("footer-container")[0];
var iframe = document.createElement('iframe');
iframe.src = "https://player.twitch.tv/?channel=eric_homu&parent=www.novaera.fm&controls=true";
iframe.parent = "www.novaera.fm";
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
footer.appendChild(iframe);