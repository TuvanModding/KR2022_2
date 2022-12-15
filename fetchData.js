async function fetchData(lat, long) {
  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`) //url что парсим, передаем широту и долготу
    .then((res) => res.json())    //приваиваем
    .catch((e) => console.error(e)) //если ошибка

    return data // возвращаем данные
}