/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

if (location.search == ''){
  location.replace("https://arcade.makecode.com/---run?id=" + prompt("ID") + "&hideSimButtons=0&noFooter=0&single=0&fullscreen=1&autofocus=1&loadingColor=#ff0000&sendBuilt=1");
} else {
  location.replace("https://arcade.makecode.com/---run?id=" + location.search.replace('?', '') + "&hideSimButtons=0&noFooter=0&single=0&fullscreen=1&autofocus=1&loadingColor=#ff0000&sendBuilt=1");
}
