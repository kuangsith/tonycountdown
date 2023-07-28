const targetDate = new Date("August 10, 2023 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `${days} วัน`;
    document.getElementById("hours").innerHTML = `${hours} ชั่วโมง`;
    document.getElementById("minutes").innerHTML = `${minutes} นาที`;
    document.getElementById("seconds").innerHTML = `${seconds} วินาที`;

    if (timeDifference < 0) {
        clearInterval(interval);
        document.getElementById("days").innerHTML = "0 Days";
        document.getElementById("hours").innerHTML = "0 Hours";
        document.getElementById("minutes").innerHTML = "0 Minutes";
        document.getElementById("seconds").innerHTML = "0 Seconds";
    }
}

// Initial call to set the countdown immediately
updateCountdown();

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
