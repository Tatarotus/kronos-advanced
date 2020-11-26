var sevenYears = [];
// Add years
console.time();
for (var year = 0; year <= 6; year += 1) {
    sevenYears.push([]);
    // Add trimestre
    for (var tri = 0; tri < 4; tri += 1) {
        sevenYears[year].push([]);
        // Add months
        for (var month = 0; month < 3; month += 1) {
            sevenYears[year][tri].push([]);
            // Add weeks
            for (var week = 0; week < 4; week += 1) {
                sevenYears[year][tri][month].push([]);
                // Add days
                for (var day = 0; day < 7; day += 1) {
                    sevenYears[year][tri][month][week].push([]);
                }
            }
        }
    }
}
console.timeEnd();
