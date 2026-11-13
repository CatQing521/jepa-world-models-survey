(function(){
  "use strict";
  var list = document.getElementById("paper-list");
  var count = document.getElementById("paper-count");
  var search = document.getElementById("paper-search");
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".filter"));
  var papers = [];
  var family = "all";

  function alignHash() {
    if (!window.location.hash) return;
    var anchor = document.getElementById(window.location.hash.slice(1));
    if (anchor) anchor.scrollIntoView({behavior:"instant", block:"start"});
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  function render() {
    var q = (search.value || "").trim().toLowerCase();
    var visible = papers.filter(function(p) {
      return (family === "all" || p.family === family) &&
        (!q || (p.name + " " + p.title + " " + p.citeKey).toLowerCase().indexOf(q) !== -1);
    });
    list.replaceChildren();
    visible.forEach(function(p) {
      var item = element("article", "paper-item");
      var tag = element("span", "paper-tag " + p.family.toLowerCase(), "JEPA-" + p.family);
      var info = element("div", "paper-info");
      info.appendChild(element("h3", "", p.name));
      info.appendChild(element("p", "", p.title));
      info.appendChild(element("p", "", p.year + " · " + p.citeKey));
      item.appendChild(tag);
      item.appendChild(info);
      if (p.url) {
        var link = element("a", "paper-link", "↗");
        link.href = p.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", "Open " + p.name + " paper");
        item.appendChild(link);
      }
      list.appendChild(item);
    });
    if (visible.length === 0) list.appendChild(element("p", "empty-state", "No papers match this search."));
    count.textContent = visible.length + " of " + papers.length + " representative entries";
  }
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      family = button.dataset.filter;
      buttons.forEach(function(b) {
        var active = b === button;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      render();
    });
  });
  search.addEventListener("input", render);
  fetch("./papers.json").then(function(r) {
    if (!r.ok) throw new Error("Could not load papers");
    return r.json();
  }).then(function(data) {
    papers = data;
    render();
    alignHash();
    window.requestAnimationFrame(alignHash);
    window.setTimeout(alignHash, 100);
  }).catch(function() {
    count.textContent = "Reading list unavailable";
    list.appendChild(element("p", "empty-state", "Please reload the page to view the reading list."));
  });
})();
