let map;

const object = [
  {
    name: "Кызыл",
    coords: {
      latitude: 51.7147,
      longitude: 94.4534
    }
  },
  {
    name: "Туран",
    coords: {
      latitude: 52.14212,
      longitude: 93.92107
    }
  },
  {name: 
    "Ак-Довурак",
    coords: {
      latitude: 51.1833,
      longitude: 90.6
    }
  },
  {
    name: "Шагонар",
    coords: {
      latitude: 51.53213,
      longitude: 92.88827
    }
  },
  {
    name: "Чадан",
    coords: {
      latitude: 51.28939,
      longitude: 91.56686
    }
  }
]

DG.then(async function () {
  map = DG.map('map', {
    center: [51.7147, 94.4534],
    zoom: 11
  });

  object.forEach(async (item) => {
    const someMarker = await fetchData(item.coords.latitude, item.coords.longitude)

    DG.marker([someMarker.latitude, someMarker.longitude]).addTo(map).bindPopup(
      `<div>
        <ul>
        Географические координаты:
        <li>
          ${item.coords.latitude}
        </li>
        <li>
          ${item.coords.longitude}
        </li>
        </ul>
      </div>`
      )
  })

  DG.marker([51.98, 94.89]).addTo(map).bindPopup('Я попап!');
});