document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector(".fan-table");
  const headers = Array.from(table.querySelectorAll("thead th")).map(
    (th) => th.textContent
  );

  table.querySelectorAll("tbody tr").forEach((row) => {
    row.querySelectorAll("td").forEach((cell, i) => {
      cell.setAttribute("data-label", headers[i]);
    });
  });
});
