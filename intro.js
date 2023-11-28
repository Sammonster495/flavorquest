const jsdom = require("jsdom");
const { JSDOM } = jsdom;
html = '<div class="rectangle" id="rectangle" onclick=""></div>';
document = new JSDOM(html).window.document;

const door = document.getElementsByClassName('rectangle');