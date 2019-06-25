let muteUntilDate = new Date();

export const setMuteUntilDate = function (seconds) {
    let now = new Date();
    now.setSeconds(now.getSeconds() + seconds);
    muteUntilDate = now;
};

export const getMuteUntilDate = function () {
    return muteUntilDate;
};