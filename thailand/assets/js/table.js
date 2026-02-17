let test = new DataTable(".datatable", {
  responsive: true,
  info: false,
  paging: false,
  lengthChange: false,
  bFilter: false,
  ordering: true,

  layout: {
    bottomEnd: {
      paging: {
        numbers: false,
      },
    },
  },
});
