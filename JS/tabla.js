// Hace una tabla con los datos del formulario
var args = location.search.substr(1).split('&');
for (var i = 0; i < args.length; ++i) {
  var parts = args[i].split('=');
  if (parts != null) {
    var field = parts[0];
    var value = decodeURI(parts[1]); //El decode URI es importante para no tener problemas con los caracteres especiales.
    if (value == null) {
      value = "null"
    }
    else {
      value = unescape(value.replace(/\+/g, ' '));
    }
    //console.log(location.search.substr(1));
    //console.log(parts);
    //console.log(value);
    document.writeln('<tr><th id="field">' + field + '</th>');
    document.writeln('<td id="value">' + value + '</td></tr>');
  }
}