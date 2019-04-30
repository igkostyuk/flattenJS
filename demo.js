// Отредактируйте этот файл, чтобы вывести массив
const originalArray = [1, "2", [3, [[4]]], 5, 6, null, 8];

// *** Не редактируйте ничего ниже этой строки ***
// Этот файл коммитить точно не надо :)

function render(item) {
  if (Array.isArray(item)) {
    const ul = document.createElement("ul");
    item.forEach(t => ul.appendChild(render(t)));
    return ul;
  }

  const li = document.createElement("li");
  if (typeof item === "undefined") {
    li.textContent = "undefined";
  } else if (item === null) {
    li.textContent = "null";
  } else {
    li.textContent = item.toString();
  }
  return li;
}

window.addEventListener("load", () => {
  document.querySelector("[data-before]").appendChild(render(originalArray));
  const flattenArray = window.flatten(originalArray);
  document.querySelector("[data-after]").appendChild(render(flattenArray));
});
