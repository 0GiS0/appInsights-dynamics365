var appInsights = window.appInsights || function (a) { function b(a) { c[a] = function () { var b = arguments; c.queue.push(function () { c[a].apply(c, b) }) } } var c = { config: a }, d = document, e = window; setTimeout(function () { var b = d.createElement("script"); b.src = a.url || "https://az416426.vo.msecnd.net/scripts/a/ai.0.js", d.getElementsByTagName("script")[0].parentNode.appendChild(b) }); try { c.cookie = d.cookie } catch (a) { } c.queue = []; for (var f = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; f.length;)b("track" + f.pop()); if (b("setAuthenticatedUserContext"), b("clearAuthenticatedUserContext"), b("startTrackEvent"), b("stopTrackEvent"), b("startTrackPage"), b("stopTrackPage"), b("flush"), !a.disableExceptionTracking) { f = "onerror", b("_" + f); var g = e[f]; e[f] = function (a, b, d, e, h) { var i = g && g(a, b, d, e, h); return !0 !== i && c["_" + f](a, b, d, e, h), i } } return c }({ instrumentationKey: "1b3bf67d-b637-4b87-93ae-13dd7f26ee23" }); window.appInsights = appInsights, appInsights.queue && 0 === appInsights.queue.length && appInsights.trackPageView();

//Application Insights Configuration

appInsights.config.disableExceptionTracking = false;
appInsights.config.disableAjaxTracking = false;
// Default 500 - controls how many ajax calls will be monitored per page view.
// Set to -1 to monitor all ajax calls on the page.
appInsights.config.maxAjaxCallsPerView = -1;
// If true, the SDK will add two headers ('Request-Id' and 'Request-Context') to all 
// CORS requests to correlate outgoing AJAX dependencies with corresponding requests on the server side.
// Default false. 
appInsights.config.enableCorsCorrelation = true;
// appInsights.config.enableDebug = true;
appInsights.config.enableSessionStorageBuffer = false; //this property must be false for Dynamics 365

console.log("============= appInsights.config ======================");
console.dir(appInsights.config);
console.log("=======================================================");

window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.log("============== Error captured =================");
    console.log("msg: " + msg);
    console.log("url: " + url);
    console.log("lineNo: " + lineNo);
    console.log("columnNo: " + columnNo);
    console.log("error: " + error);
    console.log("======================== =================");

    console.log("*** error ***");
    console.dir(error);
    console.log("****************");

    appInsights.trackException(error);

    return false;
};

console.log('Application insights is working');

function badAlert(msg) {
    alet(msg);
}

badAlert("Hello World!");