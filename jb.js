const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace("&lt;", "&lt;"),
});
escape = function(element, html){
  let el = element;
  let escaped = escapeHTMLPolicy.createHTML(html);
  console.log(escaped instanceof TrustedHTML); // true
  el.innerHTML = escaped;
}
escape(document.body.parentElement, "<html><head><link rel=\"stylesheet\" href=\"https://raw.githubusercontent.com/SlushyBoy1212/nexussite/refs/heads/main/style.css\"</head></html>")
