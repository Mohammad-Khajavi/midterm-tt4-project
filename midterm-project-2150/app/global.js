import * as bootstrap from "bootstrap";
import './global.scss';

document.addEventListener("DOMContentLoaded", () => {

    // Tooltip
    // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    // tooltipTriggerList.forEach(tooltipTriggerEl => {
    //     new bootstrap.Tooltip(tooltipTriggerEl);
    // });

    // Popover
    // const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    // popoverTriggerList.forEach(popoverTriggerEl => {
    //     new bootstrap.Popover(popoverTriggerEl);
    // });

    // Toast
    // const toastElList = [].slice.call(document.querySelectorAll('.toast'));
    // toastElList.forEach(toastEl => {
    //     new bootstrap.Toast(toastEl).show(); // Mostra automaticamente os toasts
    // });

    // Dropdown
    const dropdownList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownList.forEach(dropdownEl => {
        new bootstrap.Dropdown(dropdownEl);
    });

    // 

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});