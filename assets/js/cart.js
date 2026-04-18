// Shopping Cart Class
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.init();
    }

    loadCart() {
        const saved = localStorage.getItem('npcforge-cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('npcforge-cart', JSON.stringify(this.items));
        this.updateCartDisplay();
    }

    addItem(product) {
        const existing = this.items.find(item => item.id === product.id);
        
        if (existing) {
            existing.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
        this.saveCart();
        alert(product.name + ' added to cart!');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.saveCart();
            }
        }
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    updateCartDisplay() {
        const count = this.getItemCount();
        const total = this.getTotal();
        
        const countBadge = document.querySelector('.cart-count');
        const totalDisplay = document.querySelector('.cart-total');
        
        if (countBadge) {
            countBadge.textContent = count;
            countBadge.style.display = count > 0 ? 'inline' : 'none';
        }
        
        if (totalDisplay) {
            totalDisplay.textContent = '$' + total.toFixed(2);
        }
    }

    showCart() {
        let modal = document.getElementById('cartModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'cartModal';
            modal.className = 'cart-modal';
            document.body.appendChild(modal);
        }

        let cartHTML = '<div class="modal-content"><h2>Your Cart</h2>';
        
        if (this.items.length === 0) {
            cartHTML += '<p>Your cart is empty</p>';
        } else {
            cartHTML += '<div class="cart-items">';
            this.items.forEach(item => {
                cartHTML += `
                    <div class="cart-item">
                        <div>
                            <h4>${item.name}</h4>
                            <p>$${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div>
                            <input type="number" value="${item.quantity}" min="1" 
                                   onchange="cart.updateQuantity('${item.id}', this.value)">
                            <button onclick="cart.removeItem('${item.id}')">Remove</button>
                        </div>
                    </div>
                `;
            });
            cartHTML += '</div>';
            cartHTML += `<div class="cart-summary">
                <h3>Total: $${this.getTotal().toFixed(2)}</h3>
                <button class="checkout-button" onclick="cart.checkout()">Checkout</button>
            </div>`;
        }
        
        cartHTML += '<button onclick="document.getElementById(\'cartModal\').style.display=\'none\'">Close</button>';
        cartHTML += '</div>';
        
        modal.innerHTML = cartHTML;
        modal.style.display = 'flex';
    }

    checkout() {
        if (this.items.length === 0) {
            alert('Cart is empty!');
            return;
        }

        const total = this.getTotal();
        const itemsList = this.items.map(item => 
            `${item.name} x${item.quantity}: $${(item.price * item.quantity).toFixed(2)}`
        ).join('\n');

        alert('Order Summary:\n\n' + itemsList + '\n\nTotal: $' + total.toFixed(2) + '\n\nRedirecting to FaucetPay...');
        
        // Save order
        localStorage.setItem('pending-order', JSON.stringify({
            items: this.items,
            total: total,
            date: new Date().toISOString()
        }));

        // Redirect to FaucetPay (replace with your merchant ID)
        // window.location.href = 'https://faucetpay.io/pay?merchant=YOUR_ID&amount=' + total;
    }

    init() {
        this.updateCartDisplay();
        
        // Add event listeners to add-to-cart buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.addItem({
                    id: e.target.dataset.id,
                    name: e.target.dataset.name,
                    price: parseFloat(e.target.dataset.price)
                });
            });
        });

        // Cart icon click
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            cartIcon.addEventListener('click', () => this.showCart());
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.cart = new ShoppingCart();
});