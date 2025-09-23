// Nike-Clone-React (single-file React component)
// Instructions:
// 1) Create a new Vite React app: `npm create vite@latest nike-clone -- --template react`
// 2) cd nike-clone && npm install
// 3) Install Tailwind CSS (follow Tailwind + Vite setup) or use the CDN in index.html for quick demo
//    Quick CDN option: in index.html add: <script src="https://cdn.tailwindcss.com"></script>
// 4) Replace src/App.jsx with the component below and run: `npm run dev`
// Notes: This is a single-file demo with inline sample data and placeholder images.

import React, { useState } from 'react';

// Sample product data
const SAMPLE_PRODUCTS = [
  {
    id: 'air-max-90',
    name: 'Air Max 90',
    price: 129.99,
    color: 'White / University Red',
    image: 'https://images.unsplash.com/photo-1600180758890-9d7f7ecc6150?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'react-infinity',
    name: 'React Infinity Run',
    price: 149.99,
    color: 'Black / Volt',
    image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'pegasus',
    name: 'Pegasus Trail',
    price: 119.99,
    color: 'Blue / White',
    image: 'https://images.unsplash.com/photo-1528701800489-476b6d1ffb2a?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'zoomx',
    name: 'ZoomX Vaporfly',
    price: 199.99,
    color: 'Black / Pink',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60'
  }
];

// Utility: currency formatter
const fmt = (n) => n.toLocaleString('en-IN', { style: 'currency', currency: 'USD' });

function Header({ cartCount, onToggleCart }) {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold tracking-tight">Nike<span className="text-red-600">.</span></div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Men</a>
            <a href="#" className="hover:text-gray-900">Women</a>
            <a href="#" className="hover:text-gray-900">Kids</a>
            <a href="#" className="hover:text-gray-900">New & Featured</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <input
            placeholder="Search for shoes, clothing..."
            className="hidden sm:block border rounded-full px-3 py-2 text-sm w-64 focus:outline-none"
          />
          <button className="text-sm px-3 py-2 rounded hover:bg-gray-100">Help</button>
          <button
            onClick={onToggleCart}
            className="relative flex items-center gap-2 border rounded px-3 py-2"
            aria-label="Open cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            </svg>
            <span className="text-sm">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">Just Do It — New Drops</h1>
          <p className="mt-4 text-gray-600">Performance footwear and apparel crafted for comfort and speed. Explore the latest designs and limited releases.</p>
          <div className="mt-6 flex gap-3">
            <button className="px-6 py-3 bg-black text-white rounded shadow hover:opacity-90">Shop New</button>
            <button className="px-6 py-3 border rounded hover:bg-gray-100">Explore</button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src="https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=900&q=60" alt="hero" className="w-full max-w-md rounded-lg shadow-lg object-cover" />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-2 right-2 bg-white/80 px-2 py-1 rounded text-xs">New</div>
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.color}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-semibold">{fmt(product.price)}</div>
          <button onClick={() => onAdd(product)} className="px-3 py-2 bg-black text-white rounded text-sm">Add</button>
        </div>
      </div>
    </div>
  );
}

function ProductGrid({ products, onAdd }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular</h2>
        <div className="text-sm text-gray-500">Showing {products.length} products</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

function CartDrawer({ open, items, onClose, onRemove }) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <div className={`fixed inset-0 z-30 pointer-events-none ${open ? '' : 'hidden'}`} aria-hidden={!open}>
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <aside className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl p-6 pointer-events-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="text-gray-600">Close</button>
        </div>
        <div className="divide-y divide-gray-100 overflow-auto" style={{maxHeight: '60vh'}}>
          {items.length === 0 && <div className="text-gray-500 py-8">Cart is empty.</div>}

          {items.map(it => (
            <div key={it.id} className="flex items-center gap-4 py-4">
              <img src={it.image} alt={it.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <div className="font-medium">{it.name}</div>
                <div className="text-sm text-gray-500">Qty: {it.qty}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{fmt(it.price * it.qty)}</div>
                <button onClick={() => onRemove(it.id)} className="text-sm text-red-600 mt-2">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-lg font-semibold">
            <div>Total</div>
            <div>{fmt(total)}</div>
          </div>
          <button className="mt-4 w-full py-3 bg-green-600 text-white rounded">Checkout</button>
        </div>
      </aside>
    </div>
  );
}

export default function NikeClone() {
  const [products] = useState(SAMPLE_PRODUCTS);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function handleAdd(product) {
    setCartItems(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [{ ...product, qty: 1 }, ...prev];
    });
    setCartOpen(true);
  }

  function handleRemove(id) {
    setCartItems(prev => prev.filter(p => p.id !== id));
  }

  const cartCount = cartItems.reduce((s, it) => s + it.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} onToggleCart={() => setCartOpen(v => !v)} />

      <main>
        <Hero />
        <ProductGrid products={products} onAdd={handleAdd} />
      </main>

      <footer className="mt-12 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500">Made with ❤️ — Nike clone demo for learning purposes.</div>
      </footer>

      <CartDrawer open={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} onRemove={handleRemove} />
    </div>
  );
}
