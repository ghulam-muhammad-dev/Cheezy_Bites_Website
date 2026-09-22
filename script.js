const WHATSAPP = "923235994187";

function order(item) {
  const message =
`Assalam-o-Alaikum Cheezy Bites!
I want to order:
${item}

Please confirm:
1. Availability
2. Delivery charges (if any)
3. Estimated delivery time

My name:
My location/address:
`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
}

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".thumb-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".thumb-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    const target = document.querySelector(item.dataset.target);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".navbar-collapse");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
