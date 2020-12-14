import { refs } from './refs';

class CountdownTimer {
    constructor(setupObj) {
        this.setupObj = setupObj;
        this.intervalId = null;
        this.isActive = false;
        this.initView();
    };
    initView() {
        this.renderTimer(0);
    }
    getRefs() {
        const timer = document.querySelector(this.setupObj.selector);
        return {
            days: timer.querySelector('[data-value="days"]'),
            hours: timer.querySelector('[data-value="hours"]'),
            mins: timer.querySelector('[data-value="mins"]'),
            secs: timer.querySelector('[data-value="secs"]'),
        };
    }
    renderTimer(time) {
        const timer = this.getRefs();
        timer.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        timer.hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        timer.mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        timer.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    };
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        let targetDate = new Date(this.setupObj.targetDate).getTime();
        this.intervalId = setInterval(() => {
            let currentDate = Date.now();
            let deltaTime = 0;
            if (targetDate > currentDate) {
                deltaTime = targetDate - currentDate;
            } else {
                deltaTime = currentDate - targetDate;
            }
            this.renderTimer.bind(this, deltaTime)();
        }, 1000);
    };
    stop() {
        console.log('stop');
        clearInterval(this.intervalId);
        this.renderTimer(0);
        this.isActive = false;
    };
    pad(value) {
        return String(value).padStart(2, '0');
    };
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let date = 'Dec 31, 2020 23:59:59';

const timer = new CountdownTimer({
    selector: `#${refs.timerId.id}`,
    targetDate: new Date(date),
});

const timerRef = refs.timerId;
// console.log(timerRef);

console.log(refs.timerId.id);

const btnStart = timerRef.querySelector('[data-action="start"]');
const btnStop = timerRef.querySelector('[data-action="stop"]');
btnStart.addEventListener('click', timer.start.bind(timer));
btnStop.addEventListener('click', timer.stop.bind(timer));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let date2 = 'Dec 29, 2018 10:00';

const timer2 = new CountdownTimer({
    selector: `#${refs.timerId2.id}`,
    targetDate: new Date(date2),
});
const timerRef2 = refs.timerId2;
console.log(refs.timerId2.id);

const btnStart2 = timerRef2.querySelector('[data-action="start"]');
const btnStop2 = timerRef2.querySelector('[data-action="stop"]');
btnStart2.addEventListener('click', timer2.start.bind(timer2));
btnStop2.addEventListener('click', timer2.stop.bind(timer2));