  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    setTimeout(() => {
        loader.classList.add("hidden");
      content.style.display = "block";
    }, 2000);
  });