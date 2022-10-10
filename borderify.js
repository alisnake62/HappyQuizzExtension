

// window.open(page,"nom_popup","menubar=no, status=no, scrollbars=no, menubar=no, width=200, height=100");

// browser.browserAction.openPopup();

console.log("test");

// var newHTML = "<html><body><p>70 Lines of HTML<p></body></html>";

// var myWindow = window.openPopup("", "_blank");
// myWindow.document.write(newHTML);

// self.port.on("getSource", function() {
//   DOMtoString(document);
// });

document.cookie = "nom=Balo Ziétin; expires=Mon, 06 Oct 2025 00:00:00 GMT; path=/";
document.cookie = "hobbie=internet; expires=Mon, 06 Oct 2025 00:00:00 GMT; path=/";
let allcookies = document.cookie;
console.log(allcookies);

setTimeout(() => console.log("showing after one second"), 2000)
setTimeout(() => window.open('https://www.google.com', "Popup window", 'width=600 height=300'), 4000)
setTimeout(() => window.open('https://github.com/', "Popup window Testy", 'width=600 height=300'), 6000)
