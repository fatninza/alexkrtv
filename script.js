// Найдем элемент, который хотим скопировать
const runString = document.getElementById("runString01");

// Получим контейнер, куда нужно вставить копию
const duplicateContainer = document.getElementById("duplicateContainer");

// Копируем содержимое
const clonedRunString = runString.cloneNode(true);

// Вставляем копию в новый контейнер
duplicateContainer.appendChild(clonedRunString);