var oppName = window.parent.Xrm.Page.data.entity.attributes.get("name").getValue();
var userName = Xrm.Page.context.getUserName();
var userId = Xrm.Page.context.getUserId();

if (contactName != null && userName != null && userId != null) {

    console.log("============ AI Telemetry =================")
    console.log('This is the opp name: ' + oppName);
    console.log('This is the user id: ' + userId);
    console.log('This is the user name: ' + userName);
    //Send the event to Application Insights
    appInsights.trackEvent("Opportunity", { OppName: oppName, UserId: userId, UserName: userName });
    console.log('AI: Sent account custom event');
    console.log("============ END AI Telemetry =================")
}
