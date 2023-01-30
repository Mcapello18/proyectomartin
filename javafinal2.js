
  const button = document.getElementById("button");
  const container = document.getElementById("container");

  button.addEventListener("click", function() {
    const img = document.createElement("img");
    img.src = "https://josesanjuan.es/blog/wp-content/uploads/2016/09/Muchas-gracias.jpg";
    container.appendChild(img);
});