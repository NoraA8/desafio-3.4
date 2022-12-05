// Variables
const numberProperties = document.querySelector("#numberProperties");
const numberRooms = document.querySelector("#numberRooms");
const minMeters = document.querySelector("#minMeters");
const maxMeters = document.querySelector("#maxMeters");
const btnFilter = document.querySelector("#btnFilter");

// Array de Objetos
const PropertiesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano y disfruta del verano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas en la ciudad",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor y disfruta las vistas",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];
numberProperties.textContent = PropertiesJSON.length;
// Funcion para crear Cards
function createCards(PropertiesJSON) {
  let listDoom = document.querySelector(".properties");
  PropertiesJSON.forEach((PropertiesJSON) => {
    listDoom.innerHTML += `
    <div class="property">
          <div
            class="img"
            style="
              background-image: url('${PropertiesJSON.src}');
            "
          ></div>
          <section>
            <h5>${PropertiesJSON.name}</h5>
            <div class="d-flex justify-content-between">
              <p>Cuartos: ${PropertiesJSON.rooms}</p>
              <p>Metros: ${PropertiesJSON.m}</p>
            </div>
            <p class="my-3">${PropertiesJSON.description}</p>
            <button class="btn btn-info">Ver más</button>
          </section>
        </div>
    `;
  });
}
createCards(PropertiesJSON);
// Filtrado
btnFilter.addEventListener("click", () => {
  const roomsFilter = numberRooms.value;
  const minFilter = minMeters.value;
  const maxFilter = maxMeters.value;
  listDoom = document.querySelector(".properties");

  if (
    roomsFilter.length === 0 ||
    minFilter.length === 0 ||
    maxFilter.length === 0
  ) {
    alert("Faltan campos por llenar");
    return
  } else {
    let clear = () => {
      document.getElementById("numberRooms").value = "";
      document.getElementById("minMeters").value = "";
      document.getElementById("maxMeters").value = "";
    };
    clear();
  }
  listDoom.innerHTML = "";
  let Properties = PropertiesJSON.filter(
    ({rooms, m}) => rooms >= roomsFilter && m >= minFilter && m <= maxFilter
  );
  numberProperties.textContent = Properties.length;
  return(
    createCards(Properties)
  )
});
