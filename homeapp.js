const subjectList = document.getElementById('subjectList');
const subjectForm = document.getElementById('subjectForm');
const subjectNameInput = document.getElementById('subjectName');

function addSubject() {
    const subjectName = subjectNameInput.value;

    if (subjectName.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = subjectName;
        subjectList.appendChild(listItem);
        subjectNameInput.value = '';
    }
}
