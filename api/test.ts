const sevenYears: any = [];

// Add years
console.time();
for (let year: number = 0; year <= 6; year += 1) {
  sevenYears.push([]);
  // Add trimestre
  for (let tri: number = 0; tri < 4; tri += 1) {
    sevenYears[year].push([]);
    // Add months
    for (let month: number = 0; month < 3; month += 1) {
      sevenYears[year][tri].push([]);
      // Add weeks
      for (let week: number = 0; week < 4; week += 1) {
        sevenYears[year][tri][month].push([]);
        // Add days
        for (let day: number = 0; day < 7; day += 1) {
          sevenYears[year][tri][month][week].push([]);
        }
      }
    }
  }
}
console.timeEnd();
