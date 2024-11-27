interface Data {
  items: [];
}

export const getData = async (): Promise<Data> => {
  const apikey = process.env.REACT_APP_APIKEY;
  if (!apikey) {
    throw new Error("Api key not found.");
  }
  const response = await fetch("https://fortniteapi.io/v2/items/list?lang=ru", {
    headers: {
      Authorization: apikey,
    },
  }); // Замените на ваш URL
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};
