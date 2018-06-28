
// controls for changing the background
document.getElementById('background-btn').addEventListener('click', function() {
    document.getElementById('background').style.backgroundImage = "url('https://images5.alphacoders.com/441/441275.jpg')"
    
    

});





// button controls

// controls for the left button
document.getElementById('left').addEventListener('click', function() {
    var position = document.getElementById('ball').style.left;
   
    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

// controls for the right button
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});
// controls for the top button
document.getElementById('top').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.top = newPosition + 'px';
});
// controls for the bottom button
document.getElementById('bottom').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.top = newPosition + 'px';
});