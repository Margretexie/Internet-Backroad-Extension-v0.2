console.log("background script running");
var explorecount = 0;
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
   console.log(message);
   if (message === "counting"){
    explorecount++;
    console.log("number:" + explorecount);
    document.getElementById("num").innerHTML = explorecount;
    chrome.browserAction.setBadgeBackgroundColor({ color: [122, 186, 122, 255] });
    chrome.browserAction.setBadgeText({text: '' + explorecount});


}
}
