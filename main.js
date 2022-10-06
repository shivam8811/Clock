setInterval(() => {
    let d = new Date();
    hh = d.getHours();
    mm = d.getMinutes();
    ss = d.getSeconds();

    hhRotate = 30*hh + mm/2;
    mmRotate = 6*mm;
    ssRotate = 6*ss;

    hour.style.transform = `rotate(${hhRotate}deg)`;
    minute.style.transform = `rotate(${mmRotate}deg)`;
    second.style.transform = `rotate(${ssRotate}deg)`;


}, 1000)