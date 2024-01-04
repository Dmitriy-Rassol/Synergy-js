function myCreateElement () {
    var postWrapDiv = document.createElement("div");
      postWrapDiv.className = "post-wrap";

      var postItemDiv = document.createElement("div");
      postItemDiv.className = "post-item";

      var postItemWrapDiv = document.createElement("div");
      postItemWrapDiv.className = "post-item-wrap";

      var postLinkA = document.createElement("a");
      postLinkA.className = "post-link";

      var postTitleH3 = document.createElement("h3");
      postTitleH3.className = "post-title";
      postTitleH3.innerHTML = "My new div";

      var postContentP = document.createElement("p");
      postContentP.className = "post-content";
      postContentP.innerHTML =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel arcu purus. Duis egestas purus et ex interdum lobortis. Quisque nec magna viverra, interdum dolor at, congue augue. Quisque sed interdum augue, a lacinia nulla. Sed risus nibh, vestibulum eu nisi eu, imperdiet tempor quam.";

      postLinkA.appendChild(postTitleH3);
      postLinkA.appendChild(postContentP);

      postItemWrapDiv.appendChild(postLinkA);

      postItemDiv.appendChild(postItemWrapDiv);

      postWrapDiv.appendChild(postItemDiv);

      document.body.appendChild(postWrapDiv);
}