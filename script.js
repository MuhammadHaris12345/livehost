AOS.init()

const showModal = (
  gameName,
  gameCompany,
  gameDescription,
  gamePrice,
  gameGenre,
  gameRam,
  gameGpu,
  gameCpu,
  gameHdd,
  gameImage
) => {
  let modalGameName = document.querySelector("#gameTitle");
  let modalGameCompany = document.querySelector("#gameBrand");
  let modalGameGenre = document.querySelector("#gameGenre");
  let modalGameDescription = document.querySelector("#gameDescription");
  let modalGamePrice = document.querySelector("#gamePrice");
  let modalGameRam = document.querySelector("#gameRam");
  let modalGameGpu = document.querySelector("#gameGpu");
  let modalGameCpu = document.querySelector("#gameCpu");
  let modalGameHdd = document.querySelector("#gameHdd");
  let modalGameImage = document.querySelector("#gameImage");

  modalGameName.textContent = gameName.toUpperCase();
  modalGameCompany.textContent = gameCompany;
  modalGameGenre.textContent = gameGenre;
  modalGameDescription.textContent = gameDescription;
  modalGamePrice.textContent = gamePrice;
  modalGameRam.textContent = gameRam;
  modalGameGpu.textContent = gameGpu;
  modalGameCpu.textContent = gameCpu;
  modalGameHdd.textContent = gameHdd;
  modalGameImage.src = gameImage;

  const gameModal = new bootstrap.Modal(document.getElementById("gameModal"));
  gameModal.show();
};

// Contact Form
function validateForm(event) {
  event.preventDefault();

  let str1 = document.fm.fname.value.trim();
  let str2 = document.fm.lname.value.trim();
  let cityIndex = document.fm.city.selectedIndex;
  let email = document.fm.email.value.trim();


  let reg = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.[A-Za-z]{2,4}$/;
  let nameReg = /^[A-Za-z]+$/;

  if (str1.length === 0) {
    alert("Enter first name");
    return false;
  }

  if (!nameReg.test(str1)) {
    alert("First name should contain only alphabetic characters");
    return false;
  }

  if (str2.length === 0) {
    alert("Enter last name");
    return false;
  }

  if (!nameReg.test(str2)) {
    alert("Last name should contain only alphabetic characters");
    return false;
  }

  if (!reg.test(email)) {
    alert("Invalid email address");
    return false;
  }

  if (cityIndex === 0) {
    alert("Select your city");
    return false;
  }

  let FeedbackSender = `${str1} ${str2}`;
  document.getElementById("FeedbackSender").textContent = FeedbackSender;
  const gameModal = new bootstrap.Modal(document.getElementById("gameModal"));
  gameModal.show();

  // Reset form fields
  document.fm.fname.value = "";
  document.fm.lname.value = "";
  document.fm.city.selectedIndex = 0;
  document.fm.email.value = "";

  return true;
}

// Compare.html
let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
if (select1 && select2) {
  for (let i = 0; i < products.length; i++) {
    select1.innerHTML += `<option value="${i}">${products[i].title}</option>`;
    select2.innerHTML += `<option value="${i}">${products[i].title}</option>`;
  }
}

function updateComparison(index, target) {
  if (index === "-1") return;

  const product = products[index];

  const titleID = `title${target}`;
  const imageID = `image${target}`;
  const brandID = `brand${target}`;
  const genreID = `genre${target}`;
  const descID = `desc${target}`;
  const priceID = `price${target}`;
  const ramID = `ram${target}`;
  const cpuID = `cpu${target}`;
  const gpuID = `gpu${target}`;
  const hddID = `hdd${target}`;

  const otherIndex =
    target === "A"
      ? document.getElementById("select2").value
      : document.getElementById("select1").value;

  if (index === otherIndex) {
    document.getElementById(titleID).innerHTML = "N/A";
    document.getElementById(imageID).src =
      "./Assets/Images/medium Card Size/No_Image.png";
    document.getElementById(brandID).innerHTML = "N/A";
    document.getElementById(genreID).innerHTML = "N/A";
    document.getElementById(descID).innerHTML = "N/A";
    document.getElementById(priceID).innerHTML = "N/A";
    document.getElementById(ramID).innerHTML = "N/A";
    document.getElementById(cpuID).innerHTML = "N/A";
    document.getElementById(gpuID).innerHTML = "N/A";
    document.getElementById(hddID).innerHTML = "N/A";
  } else {
    document.getElementById(titleID).innerHTML = product.title;
    document.getElementById(imageID).src = product.imageSrc;
    document.getElementById(brandID).innerHTML = product.brand;
    document.getElementById(genreID).innerHTML = product.genre;
    document.getElementById(descID).innerHTML = product.description;
    document.getElementById(priceID).innerHTML = `$${product.price}`;
    document.getElementById(
      ramID
    ).innerHTML = `RAM: ${product.requirements.ram}GB`;
    document.getElementById(
      cpuID
    ).innerHTML = `CPU: ${product.requirements.cpu}`;
    document.getElementById(
      gpuID
    ).innerHTML = `GPU: ${product.requirements.gpu}`;
    document.getElementById(
      hddID
    ).innerHTML = `HDD: ${product.requirements.hdd}GB`;
  }
}
