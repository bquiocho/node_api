// Table setup
// ------------------------------

// Setting datatable defaults
$.extend( $.fn.dataTable.defaults, {
    language: {
        search: '_INPUT_',
        lengthMenu: '_MENU_',
        paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
    },
stateSave: true
});

// Datatable 'length' options
$('.datatable-show-all').DataTable({
    lengthMenu: [[10, 25, 50, -1], [10, 25, 100, "All"]]
});

// DOM positioning
$('.datatable-actions').DataTable({
    dom: '<"datatable-header length-left filter-right"lf><"datatable-scroll"t><"datatable-footer info-left"ip><"clear">'
});

// External table additions
// ------------------------------

// Add placeholder to the datatable filter option
$('.dataTables_filter input[type=search]').attr('placeholder','Type to filter...');


// Enable Select2 select for the length option
$('.dataTables_length select').select2({
    minimumResultsForSearch: Infinity,
    width: 'auto'
});
