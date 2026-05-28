function updateInventoryUI() {
    const inventoryBar = document.getElementById('inventory-bar');
    if (!inventoryBar) return;
    
    const inventory = JSON.parse(localStorage.getItem('escapeInventory')) || [];
    inventoryBar.innerHTML = '';
    
    inventory.forEach(item => {
        const img = document.createElement('img');
        img.src = `assets/icons/${item}.png`;
        img.alt = item;
        img.className = 'inventory-item';
        img.draggable = true;
        
        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item);
        });
        
        inventoryBar.appendChild(img);
    });
}

updateInventoryUI();