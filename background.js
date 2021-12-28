chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log("calisti");
        return { redirectUrl: details.url.replace("youtu.be/", "www.youtube.com/watch?v=") };
    },
    {
        urls: [
            "*://youtu.be/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
