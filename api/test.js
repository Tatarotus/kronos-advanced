var sevenYears = [];
// Add years
for (var i = 0; i <= 6; i += 1) {
    sevenYears.push([]);
    // Add months
    for (var j = 0; j < 12; j += 1) {
        sevenYears[i].push([]);
        // Add days
        // TODO Add February days
        if (j < 7) {
            if (j % 2 === 0) {
                for (var n = 0; n < 31; n += 1) {
                    // Add 31 Days
                    sevenYears[i][j].push([]);
                }
            }
            else {
                // eslint-disable-next-line no-lonely-if
                if (j === 1) {
                    if (i % 4 === 0) {
                        for (var n = 0; n < 29; n += 1) {
                            // Add feb days
                            sevenYears[i][j].push([]);
                        }
                    }
                    else {
                        for (var n = 0; n < 28; n += 1) {
                            // Add feb days
                            sevenYears[i][j].push([]);
                        }
                    }
                }
                else {
                    for (var n = 0; n < 30; n += 1) {
                        // Add 30 Days
                        sevenYears[i][j].push([]);
                    }
                }
            }
        }
        else {
            // eslint-disable-next-line no-lonely-if
            if (j % 2 === 0) {
                for (var n = 0; n < 30; n += 1) {
                    // Add 31 Days
                    sevenYears[i][j].push([]);
                }
            }
            else {
                for (var n = 0; n < 31; n += 1) {
                    // Add 30 Days
                    sevenYears[i][j].push([]);
                }
            }
        }
    }
}
console.log(sevenYears);
