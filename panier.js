var j = -1;
const table = document.getElementById("tab");
for (let i = 0; i < Number(localStorage.getItem("val")); i++) {
  const newRow = document.createElement("tr");
  const img = document.createElement("img");

  const productCell = document.createElement("td");

  const quantityCell = document.createElement("td");
  const div = document.createElement("div");
  div.classList.add("btn-cont");
  const btn1 = document.createElement("button");
  btn1.classList.add("plus");
  const p0 = document.createElement("p");
  const btn2 = document.createElement("button");
  btn2.classList.add("minus");

  const unitPriceCell = document.createElement("td");
  unitPriceCell.classList.add("unitPrice");

  const priceCell = document.createElement("td");
  priceCell.classList.add("price");

  const delet = document.createElement("td");
  const div2 = document.createElement("div");
  div2.classList.add("del");
  const btn3 = document.createElement("button");
  btn3.classList.add("delete");
  const btn4 = document.createElement("button");
  btn4.classList.add("like");

  var Ttab = JSON.parse(localStorage.getItem("TT"));
  img.setAttribute("src", Ttab[j + 1]);
  productCell.appendChild(img);

  p0.textContent = "0";
  p0.classList.add("p0");
  btn1.textContent = "+";
  btn2.textContent = "-";
  div.appendChild(btn1);
  div.appendChild(p0);
  div.appendChild(btn2);
  quantityCell.appendChild(div);

  unitPriceCell.textContent = Ttab[j + 2];
  j = j + 2;

  priceCell.textContent = "0.000 DT";

  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-trash-alt");
  btn3.appendChild(icon);
  const icon2 = document.createElement("i");
  icon2.classList.add("fas", "fa-heart");
  btn4.appendChild(icon2);
  div2.appendChild(btn3);
  div2.appendChild(btn4);
  delet.appendChild(div2);

  newRow.appendChild(productCell);
  newRow.appendChild(quantityCell);
  newRow.appendChild(unitPriceCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(delet);

  table.appendChild(newRow);
}
const ff = document.createElement("tr");
const a = document.createElement("td");
const b = document.createElement("td");
const c = document.createElement("td");
const d = document.createElement("td");
const e = document.createElement("td");
d.setAttribute("id", "tot");
a.textContent = "";
b.textContent = "";
c.textContent = "Total";
d.textContent = "0.000 DT";
e.textContent = "";
ff.appendChild(a);
ff.appendChild(b);
ff.appendChild(c);
ff.appendChild(d);
ff.appendChild(e);
table.appendChild(ff);

const totalTag = document.querySelector("#tot");
const btnPlus = document.querySelectorAll(".plus");
const btnMinus = document.querySelectorAll(".minus");
const btnPrice = document.querySelectorAll(".price");
const btnDelete = document.querySelectorAll(".delete");
const btnLike = document.querySelectorAll(".like");
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", incr);
  btnMinus[i].addEventListener("click", decrement);
  btnLike[i].addEventListener("click", like);
  btnDelete[i].addEventListener("click", del);
}
function incr(e) {
  const btn = e.target;
  const divElt = btn.parentElement;
  var quntityTag = divElt.querySelector("p");
  var quntityValue = Number(quntityTag.innerHTML);
  quntityValue++;
  quntityTag.innerHTML = quntityValue;
  const unitePrice = Number(
    divElt.parentElement.parentElement
      .querySelector(".unitPrice")
      .innerHTML.toString()
      .slice(0, -3)
  );
  const tdElt = divElt.parentElement;
  const trElt = tdElt.parentElement;
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML.toString().slice(0, -3));
  priceValue += unitePrice;
  priceTag.innerHTML = priceValue + ".000 DT";
  totalTag.innerHTML =
    Number(totalTag.innerHTML.toString().slice(0, -3)) + unitePrice + ".000 DT";
}
function decrement(e) {
  const btn = e.target;
  const divElt = btn.parentElement;
  var quntityTag = divElt.querySelector("p");
  var quntityValue = Number(quntityTag.innerHTML);
  if (quntityValue > 0) quntityValue--;
  quntityTag.innerHTML = quntityValue;
  const unitePrice = Number(
    divElt.parentElement.parentElement
      .querySelector(".unitPrice")
      .innerHTML.toString()
      .slice(0, -3)
  );
  const tdElt = divElt.parentElement;
  const trElt = tdElt.parentElement;
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML.toString().slice(0, -3));
  priceValue = quntityValue * unitePrice;
  priceTag.innerHTML = priceValue + ".000 DT";
  totalTag.innerHTML =
    Number(totalTag.innerHTML.toString().slice(0, -3)) - unitePrice + ".000 DT";
}
function like(e) {
  const btn = e.target;
  if (btn.style.color == "red") {
    btn.style.color = "black";
  } else {
    btn.style.color = "red";
  }
}
function del(e) {
  const btn = e.target;
  btn.parentElement.parentElement.parentElement.remove();
  totalTag.innerHTML =
    Number(totalTag.innerHTML.toString().slice(0, -3)) -
    Number(
      btn.parentElement.parentElement.parentElement
        .querySelector(".price")
        .innerHTMLtoString()
        .slice(0, -3)
    ) +
    ".000 DT";
}
