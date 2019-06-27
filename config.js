var moment = require('moment');

let muteUntilDate = '';

export const setMuteUntilDate = function (seconds) {
    const nextMuteDate = moment(new Date()).add(seconds, "seconds");
    muteUntilDate = nextMuteDate.format('YYYY-MM-DD HH-mm-ss');
};

export const getMuteUntilDate = function () {
    return muteUntilDate;
};