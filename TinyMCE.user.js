// ==UserScript==
// @name          WYSIWYG Enhancement
// @namespace     http://www.powdertoy.co.uk
// @description   Replaces the default TPT WYSIWYG (TinyMCE) with a newer version of the TinyMCE editor
// @match         *://powdertoy.co.uk/Discussions/Thread/*
// @match         *://powdertoy.co.uk/Groups/Thread/*
// @require       http://tinymce.cachefly.net/4.1/tinymce.min.js
// @updateURL     http://raw.githubusercontent.com/FeynmanTech/Extensions/master/TinyMCE.user.js
// @version       0.5
// ==/UserScript==

/*
var head = document.getElementsByTagName("head");
head[1].innerHTML = head[1].innerHTML + '\n<script src="//tinymce.cachefly.net/4.1/tinymce.min.js"></script>';
*/

tinyMCE.baseURL = "http://files.brilliant-minds.tk/~feynman";

tinymce.init({
    skin: "lightgraynofonts",
	selector: "textarea",
	plugins: [
		"advlist autolink lists link image charmap print preview anchor",
		"searchreplace visualblocks code fullscreen",
		"insertdatetime media table contextmenu paste"
	],
	toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | save"
});
