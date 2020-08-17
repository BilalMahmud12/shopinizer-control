Vue.component('treeselect', VueTreeselect.Treeselect)

new Vue({
    el: '#app',
    data: {
        // Fields
        inventory: false,
        inventory_level: 1,
        purchasability: 1,
        related_products: true,
        customer_group_categories: true,
        customer_type: 1,
        banner_date_switch: 1,
        banner_page_switch: 1,
        promotion_type_switch: 1,

        // UI
        notificationsIsOpen: false,
        hasNotificationsLabel: true,
        helpIsOpen: false,
        moreIsOpen: false,

        // treeselect dump
        treeselect_value: null,
        treeselect_options: [
            {
                id: '1',
                label: 'Bath',
            },
            {
                id: '2',
                label: 'Kitchen',
                children: [
                    {
                        id: '4',
                        label: 'Publications',
                    },
                ],
            }, 
            {
                id: '3',
                label: 'Utility',
            }
        ],
    },
    components: {
        vuejsDatepicker
    },
    mounted() {
        this.initializeJQuery();
        
        // init page loading
        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 800,
            outDuration: 0,
            linkElement: 'a:not([target="_blank"]):not([href^="#"])',
            loading: true,
            loadingParentElement: '.animsition-wrapper',
            loadingClass: 'animsition-loading',
            loadingInner: '<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255) none repeat scroll 0% 0%; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="#e90c59" stroke-width="2"> <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate> <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate></circle><circle cx="50" cy="50" r="0" fill="none" stroke="#46dff0" stroke-width="2"> <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate> <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate></circle></svg>', 
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            overlay : false,
            overlayClass : 'animsition-overlay-slide',
            overlayParentElement : 'body',
            transition: function(url){ window.location.href = url; }
        });

        $(".editor").each(function() {
            new Quill(this, {
                theme: 'snow'
            });
        });
    },
    updated() {
        this.initializeJQuery();
    },
    methods: {
        initializeJQuery() {
            $('.cscroll').scrollSpy({
                target: $('.nscroll a'),
                activeClass: 'text-indigo-700 border-indigo-700'
            }).scroll();
    
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
                order: [[ 2, 'asc' ]]
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
    
            // Select2 init
            $(".select2-df").select2({});
    
            Dropzone.autoDiscover = false;
    
            // Upload images init
            $("#upload-widget").dropzone({
                url: "/upload",
                dictDefaultMessage: "Drag & Drop images here to upload.",
                uploadMultiple: true,
                capture: true,
            });
    
            // Variations repeater
            $('.variations-repeater').repeater({
                repeaters: [{
                    selector: '.variation-values-repeater'
                }]
            });
    
            // Customizations repeater
            $('.customizations-repeater').repeater({});
    
            // Custom Fields repeater
            $('.custom-fields-repeater').repeater({});
    
            // Option Values repeater
            $('.option-values-repeater').repeater({});
    
            // Customer Address repeater
            $('.customer-address-repeater').repeater({});
    
            // Category Discounts repeater
            $('.category-discounts-repeater').repeater({});
    
            // Product Discounts repeater
            $('.product-discounts-repeater').repeater({});
        }
    }
});
