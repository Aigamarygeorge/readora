document.getElementById('addBookButton').addEventListener('click', function() {
    const bookInput = document.getElementById('bookInput');
    const bookTitle = bookInput.value.trim();

    if (bookTitle) {
        addToToReadList(bookTitle);
        bookInput.value = ''; // Clear input field
    } else {
        console.error('Book title cannot be empty');
    }
});

function addToToReadList(title) {
    const toReadList = document.getElementById('toReadList');
    const listItem = createListItem(title, moveToCurrentlyReading);
    toReadList.appendChild(listItem);
    console.log(`Added "${title}" to To Read list`);
}

function moveToCurrentlyReading(title) {
    const currentlyReadingList = document.getElementById('currentlyReadingList');
    const listItem = createListItem(title, moveToDoneReading);
    currentlyReadingList.appendChild(listItem);
    removeFromList('toReadList', title);
    console.log(`Moved "${title}" to Currently Reading list`);
}

function moveToDoneReading(title) {
    const doneReadingList = document.getElementById('doneReadingList');
    const listItem = document.createElement('li');
    listItem.textContent = title;
    doneReadingList.appendChild(listItem);
    removeFromList('currentlyReadingList', title);
    console.log(`Moved "${title}" to Done Reading list`);
}

function removeFromList(listId, title) {
    const list = document.getElementById(listId);
    const items = list.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === title) {
            list.removeChild(items[i]);
            console.log(`Removed "${title}" from ${listId}`);
            break;
        }
    }
}

function createListItem(title, moveFunction) {
    const listItem = document.createElement('li');
    listItem.textContent = title;
    listItem.addEventListener('click', function() {
        moveFunction(title);
    });
    return listItem;
}
