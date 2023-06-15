function before() {
    document.getElementById('myImage')
        .src = "images/3BHK-image.jpg";
    document.getElementById('message')
        .innerHTML = "Hii! GeeksforGeeks people";
}

function afterr() {
    document.getElementById('myImage')
        .src = "images/4BHK-image.jpeg";
    document.getElementById('message')
        .innerHTML = "Bye! GeeksforGeeks people";
}