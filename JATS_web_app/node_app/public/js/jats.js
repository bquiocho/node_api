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
$('.datatable-dom-position').DataTable({
    dom: '<"datatable-header length-left filter-right"lf><"datatable-scroll"t><"datatable-footer info-left"ip><"clear">'
});

// Basic datatable
$('.datatable-actions').DataTable();

// External table additions
// ------------------------------

// Add placeholder to the datatable filter option
$('.dataTables_filter input[type=search]').attr('placeholder','Type to filter...');


// Enable Select2 select for the length option
$('.dataTables_length select').select2({
    minimumResultsForSearch: Infinity,
    width: 'auto'
});

function quickSummary() {
  hidePanels();
  var panel = document.getElementById("quick_summary_panel");
  panel.style.display = "block";
  var panel2 = document.getElementById("actions_assigned_panel");
  panel2.style.display = "block";
  var panel3 = document.getElementById("actions_assignee_panel");
  panel3.style.display = "block";

}

function openActions() {
  hidePanels();
  var panel = document.getElementById("actions_open_panel");
  panel.style.display = "block";
  var drop_down = document.getElementById("actions-drop-down");
  drop_down.className = "dropdown mega-menu mega-menu-wide";
}

function closedActions() {
  hidePanels();
  var panel = document.getElementById("actions_closed_panel");
  panel.style.display = "block";
  var drop_down = document.getElementById("actions-drop-down");
  drop_down.className = "dropdown mega-menu mega-menu-wide";
}

function infoActions() {
  hidePanels();
  var panel = document.getElementById("actions_info_panel");
  panel.style.display = "block";
  var drop_down = document.getElementById("actions-drop-down");
  drop_down.className = "dropdown mega-menu mega-menu-wide";
}


function hidePanels(){
  document.getElementById("actions_open_panel").style.display = "none";
  document.getElementById("actions_closed_panel").style.display = "none";
  document.getElementById("actions_info_panel").style.display = "none";

  document.getElementById("quick_summary_panel").style.display = "none";
  document.getElementById("actions_assigned_panel").style.display = "none";
  document.getElementById("actions_assignee_panel").style.display = "none";

}
