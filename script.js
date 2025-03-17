let audio = document.getElementById("audio-player");
let fileInput = document.getElementById("file-input");
let playlist = document.getElementById("playlist");

fileInput.addEventListener("change", function(event) {
    let files = event.target.files;
    for (let file of files) {
        let url = URL.createObjectURL(file);
        let listItem = document.createElement("li");
        listItem.textContent = file.name;
        listItem.addEventListener("click", function() {
            audio.src = url;
            audio.play();
        });
        playlist.appendChild(listItem);
    }
});
