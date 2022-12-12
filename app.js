window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //stops page from refreshing itself after submitting
        // w/o this, the code after this won't work!

        const task = input.value;

        if (!task) {
            alert("PLEASE FILL OUT A TASK!");
            return; //we don't want anything else to happen
        }
        

        // note: all shit that gets added starts at end of div w/matching class, meaning it'll add after the buttons
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_el_content = document.createElement('div');
        task_el_content.classList.add('content');

        task_el.appendChild(task_el_content);
        
        //basically making copies of edit/delete buttons for the newly created tasks
        const task_el_input = document.createElement('input');
        task_el_input.classList.add('text');
        task_el_input.type = 'text';
        task_el_input.value = task;
        task_el_input.setAttribute('readonly', 'readonly');

        task_el_content.appendChild(task_el_input);

        const task_el_actions = document.createElement('div');
        task_el_actions.classList.add('actions');

        const task_el_edit = document.createElement('button');
        task_el_edit.classList.add('edit');
        task_el_edit.innerHTML = "Edit";

        const task_el_delete = document.createElement('button');
        task_el_delete.classList.add('delete');
        task_el_delete.innerHTML = "Delete";

        task_el_actions.appendChild(task_el_edit);
        task_el_actions.appendChild(task_el_delete);

        task_el.appendChild(task_el_actions);

        list_el.appendChild(task_el);

        input.value = "";

        task_el_edit.addEventListener('click', () => {
            if (task_el_edit.innerText.toLowerCase() == "edit") {
                task_el_input.removeAttribute('readonly');
                task_el_input.focus(); //handy, cursor is right there in input field
                task_el_edit.innerText = "Save";
            }

            else if (task_el_edit.innerText.toLowerCase() == "save") {
                task_el_input.setAttribute('readonly', 'readonly');
                task_el_edit.innerText = "Edit";
            }
            
        })

        task_el_delete.addEventListener('click', () => {
            list_el.removeChild(task_el);
        })

    })
})