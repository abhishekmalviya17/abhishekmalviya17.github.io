"use strict";

var updateContent = function(data) {
  var section = document.getElementById("section");
  section.innerHTML = "";
  for (var i = 0; i < data.RelatedTopics.length; i++) {
    var results = data.RelatedTopics[i].Result;
    if (results=="") {
      continue;
    }
    var paragraph = document.createElement("p");
    paragraph.innerHTML = data.RelatedTopics[i].Result;
    section.appendChild(paragraph);
  }
};

var loadContent = function() {
  var query = document.getElementById("searchInput").value;

  if (query=="") {
    alert("Please enter something field is empty");
  }

  var url = "https://api.duckduckgo.com/?q="+query+"&format=json&pretty=1";
  var request = new XMLHttpRequest();
  request.open("get", url);
  request.send();
  request.onreadystatechange = function(data) {
    if (request.readyState == 4 && request.status == 200) {
      var jsonData = JSON.parse(request.responseText);
      updateContent(jsonData);
    }
  };
};

var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", loadContent);