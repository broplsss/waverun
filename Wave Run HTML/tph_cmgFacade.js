function gameEventStart()
{
	//window.alert(1);
	if (typeof parent.cmgGameEvent === "function") { 
		parent.cmgGameEvent("start");
	}
	return 0;
}
function gameEventNewLevel()
{

	//window.alert(2);
	if (typeof parent.cmgGameEvent === "function") { 
		parent.cmgGameEvent("start", "1");
	}
	return 0;
}
function gameEventReplay()
{
	//window.alert(3);
	if (typeof parent.cmgGameEvent === "function") { 
		parent.cmgGameEvent("replay", "1");
	}
	return 0;
}
function gameAlertTest()
{
	//window.alert("SUCCESS!");
	//alert("SUCCESS!");
	return 0;
}
function getDomain()
{
	//window.alert(window.location.hostname);
	return window.location.hostname;
}
function printDomain(domain)
{
	window.alert(domain);
	return 0;
}