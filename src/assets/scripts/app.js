Vue.component('treeselect', VueTreeselect.Treeselect)

new Vue({
    el: '#app',
    data: {
        // treeselect dump
        treeselect_value: null,
        treeselect_options: [ {
            id: 'a',
            label: 'a',
            children: [ {
            id: 'aa',
            label: 'aa',
            }, {
            id: 'ab',
            label: 'ab',
            } ],
        }, {
            id: 'b',
            label: 'b',
        }, {
            id: 'c',
            label: 'c',
        } ],
    },
});

Dropzone.autoDiscover = false;

$(document).ready(function() {
    // Tippy
    tippy('[data-tippy-content]', {
        placement: 'right'
    });

    // Records tables
    var mainTable = $('#records-table').DataTable({
        columnDefs: [
            {
                "targets": 'no-sort',
                "orderable": false,
            },
            {
                targets: 0,
                data: "select",
                searchable: false,
                orderable: false,
                className: 'select-checkbox',
                width: "4%"
            }
        ],
        responsive: true,
        select: {
            style: 'multi',
            selector: 'td:first-child'
        },
        order: [[ 1, 'asc' ]]
    });

    $('.select-checkbox').on('click', function() {
        $(this).find('.select-row').prop("checked", !$(this).find('.select-row').prop("checked"));
    });

    $('.select-all').click(function() {
        var all = mainTable.rows({ search: 'applied' }).count();
        var selectedRows = mainTable.rows({ selected: true, search: 'applied' }).count();

        if (selectedRows < all) {
            mainTable.rows({ search: 'applied' }).deselect();
            mainTable.rows({ search: 'applied' }).select();
            $(this).find('input').prop("checked", true);
            $('#records-table').find('.select-row').prop("checked", true);
        } else {
            mainTable.rows({ search: 'applied' }).deselect();
            $(this).find('input').prop("checked", false);
            $('#records-table').find('.select-row').prop("checked", false);
        }
    });

    // Quill editor
    new Quill('#editor', {
        theme: 'snow'
    });

    // Upload images
    $("#upload-widget").dropzone({
        url: "/upload",
        dictDefaultMessage: "Drag & Drop images here to upload.",
        uploadMultiple: true,
        capture: true,
    });
 });