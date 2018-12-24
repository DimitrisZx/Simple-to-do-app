const $outputField = document.querySelector('#tasks');
const $addButton = document.querySelector('#add-button'); 
const $clearButton = document.querySelector('#clear-button')

$addButton.addEventListener('click', addItem);
$addButton.addEventListener('focus', function(e) {
    e.preventDefault();
    const $inputField = document.querySelector('#task');
    $inputField.style.borderColor = 'grey';
});

$clearButton.addEventListener('click', clearTasks);




// Add new task to task list
function addItem(e) {
    e.preventDefault();
    const $inputField = document.querySelector('#task');
    const $taskItem = document.createElement('li');

    // If there is a value in the input box, add it.
    if($inputField.value) {
        // Check whether the list is empty. If it is, remove the placeholder text.
        if($outputField.innerHTML === 'Add some tasks...') $outputField.innerHTML = '';
        // Create a new task and add it to the list
        $taskItem.innerText = $inputField.value;
        $outputField.appendChild($taskItem);
        $inputField.value = ''; 
    } else {
        $inputField.style.borderColor = 'crimson';
        $inputField.classList.add('wiggle')
        setTimeout(() => {$inputField.classList.remove('wiggle')}, 300) 
    }
}

function clearTasks(e) {
    e.preventDefault();
    $outputField.innerHTML = 'Add some tasks...';
    console.log('works')
}