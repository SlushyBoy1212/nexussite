const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace("&lt;", "&lt;"),
});
escape = function(element, html){
  let el = element;
  let escaped = escapeHTMLPolicy.createHTML(html);
  console.log(escaped instanceof TrustedHTML); // true
  el.innerHTML = escaped;
}
escape(document.body.parentElement, "<body></body>");
escape(document.body, "<h1>Set the URL parameter \"jailbreak\" to what you want to set inner html element to.</h1>");
if (new URLSearchParams(window.location.search).get('jailbreak') != null){
  escape(document.body.parentElement, new URLSearchParams(window.location.search).get('jailbreak'));
}
