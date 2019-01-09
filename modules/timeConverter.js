'use strict';

var timer = function (input) {

    var min = Math.floor(input / 60); //godziny na minuty
    var sec = Math.floor(input % 60); //na sekundy

    if (min < 60) {
        var time = min + ' min and ' + sec + ' sec.'; // jeśli czas wynosi poniżej 60 minut pokaż czas w minutach i skeundach
    } else if (min >= 60) { // jeśli jest równy lub większy niż 60 minut pokaż czas w godzinach minutach i sekundach
        var hour = Math.floor(min / 60);
        var minLeft = min % 60;
        var time = hour + ' h and ' + minLeft + ' min and ' + sec + ' sec.';
    }
    return time;

}
exports.timeCon = timer;