function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    if (li.classList.contains('completed')) {
      li.style.color = '#888'; 
    } else {
      li.style.color = ''; 
    }
  });

  const dustbinBtn = document.createElement('button');
  dustbinBtn.textContent = '🗑️'; 
  dustbinBtn.className = 'dustbin-btn';
  dustbinBtn.onclick = () => li.remove();

  li.appendChild(dustbinBtn);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}

function checkEnter(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}

function clearAllTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; 
}
