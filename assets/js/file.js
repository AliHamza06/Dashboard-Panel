function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    const menuIcon = document.querySelector('.menu-open');
    const closeIcon = document.querySelector('.close-icon');
    menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline' : 'none';
    closeIcon.style.display = closeIcon.style.display === 'none' ? 'inline' : 'none';
}
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-open');
    const closeIcon = document.querySelector('.close-icon');
    menuIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
});


// select hide and show 
const myselfRadio = document.getElementById('myself');
const downlineRadio = document.getElementById('downline');
const downlineSelect = document.getElementById('downlineSelect');

myselfRadio.addEventListener('change', function () {
    if (myselfRadio.checked) {
        downlineSelect.classList.add('hidden');
    }
});

downlineRadio.addEventListener('change', function () {
    if (downlineRadio.checked) {
        downlineSelect.classList.remove('hidden');
    }
});

// Initial state check
if (myselfRadio.checked) {
    downlineSelect.classList.add('hidden');
}

