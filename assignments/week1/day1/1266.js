var minTimeToVisitAllPoints = function (points) {
    let seconds = 0;
    for (let i = 1; i < points.length; ++i) {
        const p0 = points[i - 1];
        const p1 = points[i];
        seconds += Math.max(Math.abs(p1[0] - p0[0]), Math.abs(p1[1] - p0[1]));
    }
    return seconds;
};