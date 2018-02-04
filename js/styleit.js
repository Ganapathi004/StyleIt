/*
 Adds little text styles for Spring Framework Documentation Website.
*/
var styleTag = document.createElement("style");
var styles = document.createTextNode('#header { padding: 0 0.5em 0 0.5em; } #tocbot > ul.toc-list { margin-bottom:0; font-family:Georgia; } #toc li { font-family:Georgia; } .paragraph p { text-align: justify; text-justify: auto; hyphens: auto; } .icon { display: none; }');
styleTag.appendChild(styles);
document.head.appendChild(styleTag);