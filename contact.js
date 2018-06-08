var contactName = window.parent.Xrm.Page.data.entity.attributes.get("fullname").getValue();
var userName = Xrm.Page.context.getUserName();
var userId = Xrm.Page.context.getUserId();

if (contactName != null && userName != null && userId != null) {

    console.log("============ AI Telemetry =================")
    console.log('This is the contact name: ' + contactName);
    console.log('This is the user id: ' + userId);
    console.log('This is the user name: ' + userName);
    //Send the event to Application Insights
    appInsights.trackEvent("Contact", { ContactName: contactName, UserId: userId, UserName: userName });
    console.log('AI: Sent account custom event');
    console.log("============ END AI Telemetry =================")
}
