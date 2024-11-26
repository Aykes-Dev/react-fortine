// export const getData = async (): Promise<TodoItem[]>  => {
//   let response = null;
//   await fetch('https://fortniteapi.io/v2/items/list?lang=ru', {
//       headers: {
//           'Authorization': `32b43922-c0772e22-0404b19e-499a9206`,
//       }
//   }).then(response => response.json()).then(data => {
//       response = data.items
//   })
//   return response;
// }

interface TodoItem {
  items: [];
  // Добавьте другие свойства, если необходимо
}

export const getData = async (): Promise<TodoItem> => {
  const response = await fetch("https://fortniteapi.io/v2/items/list?lang=ru", {
    headers: {
      Authorization: `32b43922-c0772e22-0404b19e-499a9206`,
    },
  }); // Замените на ваш URL
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json(); // Убедитесь, что возвращается массив
};
