const cardtext = document.getElementsByClassName("card-text")[0];

const createWord = (text, index) => {
    const word = document.createElement("span");

    word.innerHTML = `${text}`;

    word.classList.add("card-text-word");

    word.style.transitionDelay = `${index * 40}ms`;

    return word;
}

const addWord = (text, index) => cardtext.appendChild(createWord(text, index));

const createText = text => text.split(" ").map(addWord);

createText("")

