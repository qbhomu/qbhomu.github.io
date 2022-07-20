// if (location.protocol !== 'https:') {
//     location.replace(`https:${location.href.substring(location.protocol.length)}`);
// }
if (!document.getElementById("script_twt")) {
    var script = document.createElement('script');
    script.src = "https://player.twitch.tv/js/embed/v1.js";
    script.id = "script_twt";
    document.body.append(script);
    script.addEventListener('load', function () {
        if (!document.getElementById("98d2j1")) {
            var iframe = document.createElement('div');
            iframe.id = "98d2j1";
            iframe.style.opacity = 0;
            iframe.style.position = "absolute";
            iframe.style.zIndex = -1;
            iframe.style.top = "-30px";
            document.body.append(iframe);
            var options = {
                width: 400,
                height: 400,
                channel: "eric_homu",
                parent: ["www.uptheclarets.com", "www.utcmedia.co.uk"]
            };
            var player = new Twitch.Player("98d2j1", options);
        }
    });
};
