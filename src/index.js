import './styles.css';
import { CountdownTimer } from './js/timer';
import { refs } from './js/refs';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let date = 'Dec 31, 2020 23:59:59';

const timer = new CountdownTimer({
    selector: refs.timerId,
    targetDate: new Date(date),
});



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let date2 = 'Dec 29, 2018 10:00';

const timer2 = new CountdownTimer({
    selector: refs.timerId2,
    targetDate: new Date(date2),
});