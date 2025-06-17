/*

HeaderBar

"<header tag=\"HeaderBar\">
<a href=\"/\" id=\"/\" class=\"link\" style=\"color:#000000; font-size:15px;\">Home</a>
 | 
<a href=\"/mc\" id=\"/mc\" class=\"link\" style=\"color:#000000; font-size:15px;\">MC Server</a>
 | 
<a href=\"/faq\" id=\"/faq\" class=\"link\" style=\"color:#000000; font-size:15px;\">FAQ</a>
</header>"
 | 
<a href=\"/r\" id=\"/r\" class=\"link\" style=\"color:#000000; font-size:15px;\">SubReddit</a>
</header>"

"<header tag=\"HeaderBar\"><a href=\"/\" id=\"/\" class=\"link\" style=\"color:#000000; font-size:15px;\">Home</a> | <a href=\"/mc\" id=\"/mc\" class=\"link\" style=\"color:#000000; font-size:15px;\">MC Server</a> | <a href=\"/faq\" id=\"/faq\" class=\"link\" style=\"color:#000000; font-size:15px;\">FAQ</a> | <a href=\"/r\" id=\"/r\" class=\"link\" style=\"color:#000000; font-size:15px;\">SubReddit</a></header>"

*/
document.getElementById("header").innerHTML = "<header tag=\"HeaderBar\"><a href=\"/\" id=\"/\" class=\"link\" style=\"color:#000000; font-size:15px;\">Home</a> | <a href=\"/mc\" id=\"/mc\" class=\"link\" style=\"color:#000000; font-size:15px;\">MC Server</a> | <a href=\"/faq\" id=\"/faq\" class=\"link\" style=\"color:#000000; font-size:15px;\">FAQ</a> | <a href=\"/r\" id=\"/r\" class=\"link\" style=\"color:#000000; font-size:15px;\">SubReddit</a></header>"
// header stuff

document.getElementById(location.pathname).setAttribute("style", "font-size:25px; color:#0000ff;")
