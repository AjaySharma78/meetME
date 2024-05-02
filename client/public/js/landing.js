const createButton = document.querySelector("#createroom");
const codeCont = document.querySelector("#roomcode");
const joinBut = document.querySelector("#joinroom");

function uuidv4() {
    return Math.random().toString(36).substring(2, 10);
}

const createroomtext = "Creating Room...";

createButton.addEventListener("click", (e) => {
    e.preventDefault();
    createButton.disabled = true;
    createButton.innerHTML = "Creating Room";
    createButton.classList = "createroom-clicked";

    setInterval(() => {
        if (createButton.innerHTML < createroomtext) {
            createButton.innerHTML = createroomtext.substring(
                0,
                createButton.innerHTML.length + 1
            );
        } else {
            createButton.innerHTML = createroomtext.substring(
                0,
                createButton.innerHTML.length - 3
            );
        }
    }, 500);

    var data = uuidv4();
    location.href = `/room.html?room=${data}`;
});

joinBut.addEventListener("click", (e) => {
    e.preventDefault();
    if (codeCont.value.trim() == "") {
        codeCont.classList.add("roomcode-error");
        return;
    }
    const code = codeCont.value;
    location.href = `/room.html?room=${code}`;
});

codeCont.addEventListener("change", (e) => {
    e.preventDefault();
    if (codeCont.value.trim() !== "") {
        codeCont.classList.remove("roomcode-error");
        return;
    }
});
