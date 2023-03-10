let map;

const TuvanCities = [
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
  {
	name: "Ак-Довурак",
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

const KhakasCities = [
  {
    name: "Абаза",
    coords: {
      latitude: 52.39,
      longitude: 90.05
    }
  },
  {
    name: "Абакан",
    coords: {
      latitude: 53.43,
      longitude: 91.25
    }
  },
  {
	name: "Саяногорск",
    coords: {
      latitude: 53.06,
      longitude: 91.24
    }
  },
  {
    name: "Сорск",
    coords: {
      latitude: 54.0,
      longitude: 90.15
    }
  },
  {
    name: "Черногорск",
    coords: {
      latitude: 53.49,
      longitude: 91.17
    }
  }
]

const MongolCities = [
  {
    name: "Улан-Батор",
    coords: {
      latitude: 47.55,
      longitude: 106.55
    }
  },
  {
    name: "Эрдэнэт",
    coords: {
      latitude: 49.0140,
      longitude: 104.0240
    }
  },
  {
	name: "Дархан",
    coords: {
      latitude: 49.2808,
      longitude: 105.5727
    }
  },
  {
    name: "Чойбалсан",
    coords: {
      latitude: 48.0414,
      longitude: 114.3122
    }
  },
  {
    name: "Мурэн",
    coords: {
      latitude: 49.3815,
      longitude: 100.0941
    }
  }
]

DG.then(async function () {
  map = DG.map('map', {
    center: [51.7147, 94.4534],
    zoom: 11
  });

  TuvanCities.forEach(async (item) => {
    const TuvanMarker = await fetchData(item.coords.latitude, item.coords.longitude)

    DG.marker([TuvanMarker.latitude, TuvanMarker.longitude]).addTo(map).bindPopup(
      `<div class="marker">
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
  
  KhakasCities.forEach(async (item) => {
    const KhakasMarker = await fetchData(item.coords.latitude, item.coords.longitude)

    DG.marker([KhakasMarker.latitude, KhakasMarker.longitude]).addTo(map).bindPopup(
      `<div class="marker">
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