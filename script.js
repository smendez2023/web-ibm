// Inicializar carrito
const cartItems = [];

// Función para agregar al carrito con cantidad
function addToCartWithQuantity(productName, price, quantityInputId) {
    const quantityElement = document.getElementById(quantityInputId);
    if (!quantityElement) {
        alert("Elemento de cantidad no encontrado");
        return;
    }

    const quantity = parseInt(quantityElement.value);
    if (isNaN(quantity) || quantity <= 0) {
        alert("Por favor, introduce una cantidad válida.");
        return;
    }

    const existingItem = cartItems.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const item = { name: productName, price, quantity };
        cartItems.push(item);
    }

    console.log('Producto agregado a la cesta:', { name: productName, price, quantity });
}

// Función para ir a la página de resumen
function goToSummaryPage() {
    let total = 0;
    let summary = "Resumen de pedido:\n\n";

    cartItems.forEach(item => {
        const subtotal = item.price * item.quantity;
        summary += `Producto: ${item.name}\n`;
        summary += `Cantidad: ${item.quantity}\n`;
        summary += `Precio unitario: ${item.price}€\n`;
        summary += `Subtotal: ${subtotal}€\n\n`;

        total += subtotal;
    });

    summary += `Total importe del pedido: ${total}€\n\n`;

    const resumenPedidoElement = document.getElementById('pedido-resumen');
    if (resumenPedidoElement) {
        resumenPedidoElement.textContent = summary;
        const summaryContainer = document.getElementById('resumen-pedido');
        if (summaryContainer) {
            summaryContainer.style.display = "block";
        } else {
            alert("Elemento contenedor de resumen no encontrado");
        }
    } else {
        alert("Elemento de resumen de pedido no encontrado");
    }
}

// Función para volver al menú
function returnToMenu() {
    window.location.href = "menu.html";
}

// Función para continuar como invitado
function continueAsGuest() {
    window.location.href = "resumen.html";
}
