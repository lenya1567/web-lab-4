function selectOrder() {
    let order = document.querySelectorAll("input");
    let orderResultDiv = document.getElementById("result_cost");
    let orderResult = 0;
    for (let product of order) {
        if (product.checked) {
            orderResult += parseInt(product.value);
        }
    }
    orderResultDiv.innerText = `Общая стоимость: ${orderResult} руб`;
}

selectOrder();