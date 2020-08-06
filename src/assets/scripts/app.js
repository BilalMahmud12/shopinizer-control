var app = new Vue({
    el: '#app',
    data: {
    },
});

$(document).ready(function() {
    tippy('[data-tippy-content]', {
        placement: 'right'
    });
    $('#records-table').DataTable({
        responsive: true,
    });
 });