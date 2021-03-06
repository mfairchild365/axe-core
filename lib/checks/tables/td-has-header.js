var row, cell,
	badCells = [];

for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
	row = node.rows[rowIndex];
	for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
		cell = row.cells[cellIndex];

		if (cell.textContent.trim() !== '' &&
				axe.commons.table.isDataCell(cell) &&
				!axe.commons.aria.label(cell)) {

			var headers = axe.commons.table.getHeaders(cell)
			.reduce(function (out, header) {
				return (out || header !== null && !!header.textContent.trim());
			}, false);
			if (!headers) {
				badCells.push(cell);
			}
		}
	}
}

if (badCells.length) {
	this.relatedNodes(badCells);
	return false;
}

return true;
