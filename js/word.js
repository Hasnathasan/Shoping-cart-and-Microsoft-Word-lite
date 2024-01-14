document.getElementById('bold').addEventListener('click', function(){
    inputText().style.fontWeight = 'bold';
})
document.getElementById('italic').addEventListener('click', function(){
    inputText().style.fontStyle = 'italic';
})
document.getElementById('underline').addEventListener('click', function(){
    inputText().style.textDecoration = 'underline';
})
document.getElementById('left').addEventListener('click', function(){
    inputText().style.textAlign = 'left';
})
document.getElementById('center').addEventListener('click', function(){
    inputText().style.textAlign = 'center';
})
document.getElementById('right').addEventListener('click', function(){
    inputText().style.textAlign = 'right';
})
document.getElementById('fontSize').addEventListener('click', function(){
    let size = document.getElementById('fontSize').value;

    size = size + 'px';
    console.log(size);
    inputText().style.fontSize = size;
})


function inputText(){
    const inputValue = document.getElementById('textarea');
    return inputValue;
}
function setText(value){
    const textOfTextarea = document.getElementById('textarea');
    textOfTextarea.value = value;
}
const inputValue = document.getElementById('textarea');