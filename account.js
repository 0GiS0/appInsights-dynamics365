var accountName = window.parent.Xrm.Page.data.entity.attributes.get("name").getValue();
var userName = Xrm.Page.context.getUserName();
var userId = Xrm.Page.context.getUserId();

if (accountName != null && userName != null && userId != null) {

    console.log("============ AI Telemetry =================")
    console.log('This is the account name: ' + accountName);
    console.log('This is the user id: ' + userId);
    console.log('This is the user name: ' + userName);
    //Send the event to Application Insights
    appInsights.trackEvent("Account", { AccountName: accountName, UserId: userId, UserName: userName });
    console.log('AI: Sent account custom event');
    console.log("============ END AI Telemetry =================")
}
