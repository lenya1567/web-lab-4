let finalCost = 0;

function activateProduct(ev) {
    let productElement = ev.target.parentElement.getElementsByClassName("product_count")[0];
    productElement.value = ev.target.checked ? 1 : 0;
    productElement.dataset["inCart"] = ev.target.checked ? "1" : "0";
    calcCost()
}

function updateProductCount(ev) {
    let value = ev.data ?? "";
    if (value == "-") {
        ev.target.value = ""
    } else if (!value.match(/(^$|^0$|^[1-9]\d*$)/)) {
        ev.target.value = "0"
    }
    calcCost()
}

function calcCost() {
    let products = document.querySelectorAll(`.product_count[data-in-cart="1"]`);
    let resultCost = document.getElementById("result_cost");
    let cost = 0;
    for (let product of products) {
        if (product.value != "") {
            cost += parseInt(product.dataset.cost) * parseInt(product.value)
        }
    }
    finalCost = cost;
    resultCost.innerText = `Итого: ${cost} р.`
}

function sendInformation() {
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    if (firstName != "" && lastName != "") {
        alert(`Заказчик: ${lastName} ${firstName}\nИтого: ${finalCost} р.`)
    }
}