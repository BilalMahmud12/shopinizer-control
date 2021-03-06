Vue.component('treeselect', VueTreeselect.Treeselect)

new Vue({
    el: '#app',
    data: {
        // UI
        notificationsIsOpen: false,
        hasNotificationsLabel: true,
        helpIsOpen: false,
        moreIsOpen: false,

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
        discount_type_switch: 1,
        coupon_conditions_switch: 1,
        show_advanced_pricing: false,
        shoppers_password: false,
        discount_type: 'discount',
        shopper_logout: 1,
        logout_duration: 1,
        HSTS: 1,
        Header: 1,
        xFrame_header: true,
        Frame: 1,
        SMTP: 1,
        review_emails: false,
        order_invoice: false,

        // dum
        treeselect_options: [],
        treeselect_value: null,
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

        // Tippy
        tippy('[data-tippy-content]', {
            placement: 'right'
        });

        // START Charts
        var chartConfig = {
            spanGaps: false,
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            legend: { display: false },
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    display: false,
                    scaleLabel: {
                        display: false,
                    }
                }]
            }
        };

        if(document.getElementById('chart-1') !== null) {
            var chart1 = new Chart(document.getElementById('chart-1').getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Sun', 'Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
                    datasets: [
                        {
                            label: 'This Week',
                            borderColor: '#4c51bf',
                            pointBackgroundColor: '#4c51bf',
                            borderWidth: 1,
                            data: [0, 0, 0, 0],
                            fill: false,
                        },
                        {
                            label: 'Last Week',
                            borderColor: '#4c51bf',
                            pointBackgroundColor: '#4c51bf',
                            borderWidth: 1,
                            data: [0, 0, 0],
                            fill: false, 
                        }
                    ]
                },
                options: chartConfig,
            });
            
            var chart2 = new Chart(document.getElementById('chart-2').getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Sun', 'Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
                    datasets: [
                        {
                            label: 'This Week',
                            borderColor: '#4c51bf',
                            pointBackgroundColor: '#4c51bf',
                            borderWidth: 1,
                            data: [0, 0, 0, 0],
                            fill: false,
                        },
                        {
                            label: 'Last Week',
                            borderColor: '#4c51bf',
                            pointBackgroundColor: '#4c51bf',
                            borderWidth: 1,
                            data: [0, 0, 0],
                            fill: false, 
                        }
                    ]
                },
                options: chartConfig,
            });

            var chart3 = new Chart(document.getElementById('chart-3').getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Sun', 'Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
                    datasets: [
                        {
                            label: 'This Week',
                            borderColor: '#4c51bf',
                            pointBackgroundColor: '#4c51bf',
                            borderWidth: 1,
                            data: [0, 0, 0, 0],
                            fill: false,
                        },
                        {
                            label: 'Last Week',
                            borderColor: '#4c51bf',
                            pointBackgroundColor: '#4c51bf',
                            borderWidth: 1,
                            data: [0, 0, 0],
                            fill: false, 
                        }
                    ]
                },
                options: chartConfig,
            }); 

            var chart4 = new Chart(document.getElementById('chart-4').getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Sun', 'Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
                    datasets: [
                        {
                            label: 'This Week',
                            borderColor: '#4c51bf',
                            pointBackgroundColor: '#4c51bf',
                            borderWidth: 1,
                            data: [0, 0, 0, 0],
                            fill: false,
                        },
                        {
                            label: 'Last Week',
                            borderColor: '#4c51bf',
                            pointBackgroundColor: '#4c51bf',
                            borderWidth: 1,
                            data: [0, 0, 0],
                            fill: false, 
                        }
                    ]
                },
                options: chartConfig,
            });
        }
        // END Charts

        // START Form Validate
        $("#category-form").validate({
            rules: {
                name: {
                    digits: true,

                }
            },
            messages: {
                name: {
                    digits: 'only digits'
                }
            }
        });
        // END Form Validate

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
            responsive: false,
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

        // Upload images init
        Dropzone.autoDiscover = false;
        if($("#upload-widget").length) {
            $("#upload-widget").dropzone({
                url: "/upload",
                dictDefaultMessage: "Drag & Drop images here to upload.",
                uploadMultiple: true,
                capture: true,
            });
        }

        if($(".editor").length) {
            $(".editor").each(function() {
                new Quill(this, {
                    theme: 'snow'
                });
            });
    
        }

        if($('.cscroll').length) {
            $('.cscroll').scrollSpy({
                target: $('.nscroll a'),
                activeClass: 'text-indigo-700 border-indigo-700'
            }).scroll();
        }

        // Variations repeater
        $('.variations-repeater').repeater({
            isFirstItemUndeletable: true,
            repeaters: [{
                isFirstItemUndeletable: true,
                selector: '.variation-values-repeater'
            }]
        });

        // Customizations repeater
        $('.customizations-repeater').repeater({isFirstItemUndeletable: true});

        // Custom Fields repeater
        $('.custom-fields-repeater').repeater({isFirstItemUndeletable: true});

        // Option Values repeater
        $('.option-values-repeater').repeater({isFirstItemUndeletable: true});

        // Customer Address repeater
        $('.customer-address-repeater').repeater({isFirstItemUndeletable: true});

        // Category Discounts repeater
        $('.category-discounts-repeater').repeater({isFirstItemUndeletable: true});

        // Product Discounts repeater
        $('.product-discounts-repeater').repeater({isFirstItemUndeletable: true});
    },
    updated() {
        this.initializeJQuery();
        $('.product-discount-repeater').repeater({isFirstItemUndeletable: true});
    },
    methods: {
        initializeJQuery() {
            // Select2 init
            if($(".select2-df").length) {
                $(".select2-df").select2({});
            }
        }
    }
});
