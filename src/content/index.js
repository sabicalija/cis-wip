function run() {
  const content = document.getElementById("content");
  const table = content && content.contentWindow ? content.contentWindow.document.getElementById("t1") : null;
  if (table) {
    const rows = [];
    const domRows = Array.from(table.getElementsByTagName("tr"));

    console.log("DUMMY", "WOWOWW");

    // Get index of table headings
    const columnHeadings = {};
    for (const [jdx, heading] of Array.from(domRows[1].children).entries()) {
      columnHeadings[heading.innerText] = jdx;
    }
    console.log("DUMMY", "columnHeadings", columnHeadings);

    for (const [idx, row] of domRows.entries()) {
      const entry = {};
      if (idx < 2) continue; // Skip first two rows (headings)
      if (row.children[columnHeadings["Dauer"]]) {
        entry.dauer = row.children[columnHeadings["Dauer"]].innerText;
        entry.aktivitaet = row.children[columnHeadings["Aktivität"]].innerText;
        entry.oe = row.children[columnHeadings["OE"]].innerText;
        entry.ap = row.children[columnHeadings["AP"]].innerText;
        entry.projekt = row.children[columnHeadings["Projekt"]].innerText;
        rows.push(entry);
      }
      if (row.id && row.id.startsWith("tag_row")) {
        let date = {
          day: parseInt(row.id.substr(8, 2)),
          month: parseInt(row.id.substr(11, 2)),
          year: parseInt(row.id.substr(14, 4)),
        };
        rows.forEach((entry) => {
          if (!entry.date) {
            entry.date = date;
          }
        });
      }
    }
    console.log("DUMMY", "rows", rows);
  }
}

window.setInterval(run, 2000);
