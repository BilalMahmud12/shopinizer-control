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
    tippy('[data-tippy-content]', {
        placement: 'right'
    });
    $('#records-table').DataTable({
        responsive: true,
    });
    new Quill('#editor', {
        theme: 'snow'
    });

    $("#upload-widget").dropzone({
        url: "/upload",
        dictDefaultMessage: "Drag & Drop images here to upload.",
        uploadMultiple: true,
        capture: true,
    });
 });