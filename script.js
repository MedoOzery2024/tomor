function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'م' : 'ص';
    hours = hours % 12;
    hours = hours ? hours : 12; // الساعة 0 يجب أن تكون 12
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').innerText = timeString;

    const dateString = now.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('date').innerText = dateString;
}

setInterval(updateClock, 1000);
updateClock();

let invoiceItems = [];

function addItem() {
    const productName = document.getElementById('product-name').value;
    const productCode = document.getElementById('product-code').value;
    const productType = document.getElementById('product-type').value;
    const quantity = document.getElementById('quantity').value;
    const unitType = document.getElementById('unit-type').value;
    const price = document.getElementById('price').value;

    const total = quantity * price;

    const item = {
        productName,
        productCode,
        productType,
        quantity,
        unitType,
        price,
        total
    };

    invoiceItems.push(item);
    renderInvoice();
    clearForm();
}

function renderInvoice() {
    const invoiceBody = document.getElementById('invoice-body');
    invoiceBody.innerHTML = '';

    invoiceItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.productName}</td>
            <td>${item.productCode}</td>
            <td>${item.productType}</td>
            <td>${item.quantity}</td>
            <td>${item.unitType}</td>
            <td>${item.price}</td>
            <td>${item.total}</td>
        `;
        invoiceBody.appendChild(row);
    });
}

function clearForm() {
    document.getElementById('invoice-form').reset();
}

function editItem() {
    // من الممكن إضافة منطق لتعديل العناصر هنا
}

function deleteItem() {
    // من الممكن إضافة منطق لحذف العناصر هنا
}

function saveInvoice() {
    // من الممكن إضافة منطق لحفظ الفاتورة هنا
}

function printInvoice() {
    window.print();
}