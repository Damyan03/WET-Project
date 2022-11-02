<<<<<<< HEAD
const isWeekend = day => {
    return day % 7 === 6 || day % 7 === 0;
}

const getDayName = day => {
    const date = new Date(Date.UTC(2018, 0, day));
    return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
}
let workingDaysCount = 0;
let homeDaysCount = 0;
let officeDaysCount = 0;

window.addEventListener('load', function () {
    const calendar = document.querySelector("#app-calendar")

    for (let day = 1; day <= 31; day++) {
        const weekend = isWeekend(day);

        let dropdown = document.createElement("div");
        dropdown.className = "dropdown";
        calendar.appendChild(dropdown)

        let dayElem = document.createElement("div");
        dayElem.className = `day ${weekend ? "weekend" : ""}`;
        dayElem.innerHTML = `${day}`;
        dropdown.appendChild(dayElem);

        let dropMenu = document.createElement("div");
        dropMenu.className = "dropdown-content";
        dropMenu.id = "myDropdown";
        dropdown.appendChild(dropMenu)

        if (day <= 7) {
            let dayElemName = document.createElement("div");
            dayElemName.className = "name"
            dayElemName.innerHTML = `${getDayName(day)}`;
            dayElem.appendChild(dayElemName);
        }

        let dayMenuWorking = document.createElement("p");
        dayMenuWorking.innerHTML = "Home";
        dropMenu.appendChild(dayMenuWorking);

        let dayMenuOffice = document.createElement("p");
        dayMenuOffice.innerHTML = "Office";
        dropMenu.appendChild(dayMenuOffice);

        let dayMenuVacation = document.createElement("p");
        dayMenuVacation.innerHTML = "Vacation";
        dropMenu.appendChild(dayMenuVacation);

        let dayMenuNationalHoliday = document.createElement("p");
        dayMenuNationalHoliday.innerHTML = "National holiday";
        dropMenu.appendChild(dayMenuNationalHoliday);

        let dayMenuClear = document.createElement("p");
        dayMenuClear.innerHTML = "Clear";
        dropMenu.appendChild(dayMenuClear);

        dropdown.addEventListener("click", event => {
            dropMenu.classList.toggle("show");
        })

        dayMenuWorking.addEventListener("click", event => {
            dropdown.className = "dropdown working"
        })
        dayMenuOffice.addEventListener("click", event => {
            dropdown.className = "dropdown office"
        })
        dayMenuVacation.addEventListener("click", event => {
            dropdown.className = "dropdown vacation"
        })
        dayMenuNationalHoliday.addEventListener("click", event => {
            dropdown.className = "dropdown nationalHoliday"
        })
        dayMenuClear.addEventListener("click", event => {
            dropdown.className = "dropdown"
        })
    }
    document.getElementById("totalWorkDays").innerHTML = `Total workdays count:${workingDaysCount}`;
    document.getElementById("totalHomeDays").innerHTML = `Home workdays count:${homeDaysCount}`;
    document.getElementById("totalOfficeDays").innerHTML = `Office workdays count:${officeDaysCount}`;
});

function showFixedDays() {
    var x = document.getElementById("fixedDaysContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showNationalHoliday() {
    var x = document.getElementById("nationalHolidayList");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function checkWorkdayCount(){
    workingDaysCount = 0;
    homeDaysCount=0;
    document.querySelectorAll(".dropdown").forEach(element => {
        if (element.classList.contains("working")) {
            workingDaysCount++;
            homeDaysCount++;
        }else if(element.classList.contains("office")){
            workingDaysCount++;
            officeDaysCount++;
        }
    })
    document.getElementById("totalWorkDays").innerHTML = `Total workdays count:${workingDaysCount}`;
    document.getElementById("totalHomeDays").innerHTML = `Home workdays count:${homeDaysCount}`;
    document.getElementById("totalOfficeDays").innerHTML = `Office workdays count:${officeDaysCount}`;
}

=======
const isWeekend = day => {
    return day % 7 === 6 || day % 7 === 0;
}

const getDayName = day => {
    const date = new Date(Date.UTC(2018, 0, day));
    return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
}
let workingDaysCount = 0;
let homeDaysCount = 0;
let officeDaysCount = 0;

window.addEventListener('load', function () {
    const calendar = document.querySelector("#app-calendar")

    for (let day = 1; day <= 31; day++) {
        const weekend = isWeekend(day);

        let dropdown = document.createElement("div");
        dropdown.className = "dropdown";
        calendar.appendChild(dropdown)

        let dayElem = document.createElement("div");
        dayElem.className = `day ${weekend ? "weekend" : ""}`;
        dayElem.innerHTML = `${day}`;
        dropdown.appendChild(dayElem);

        let dropMenu = document.createElement("div");
        dropMenu.className = "dropdown-content";
        dropMenu.id = "myDropdown";
        dropdown.appendChild(dropMenu)

        if (day <= 7) {
            let dayElemName = document.createElement("div");
            dayElemName.className = "name"
            dayElemName.innerHTML = `${getDayName(day)}`;
            dayElem.appendChild(dayElemName);
        }

        let dayMenuWorking = document.createElement("p");
        dayMenuWorking.innerHTML = "Home";
        dropMenu.appendChild(dayMenuWorking);

        let dayMenuOffice = document.createElement("p");
        dayMenuOffice.innerHTML = "Office";
        dropMenu.appendChild(dayMenuOffice);

        let dayMenuVacation = document.createElement("p");
        dayMenuVacation.innerHTML = "Vacation";
        dropMenu.appendChild(dayMenuVacation);

        let dayMenuNationalHoliday = document.createElement("p");
        dayMenuNationalHoliday.innerHTML = "National holiday";
        dropMenu.appendChild(dayMenuNationalHoliday);

        let dayMenuClear = document.createElement("p");
        dayMenuClear.innerHTML = "Clear";
        dropMenu.appendChild(dayMenuClear);

        dropdown.addEventListener("click", event => {
            dropMenu.classList.toggle("show");
        })

        dayMenuWorking.addEventListener("click", event => {
            dropdown.className = "dropdown working"
        })
        dayMenuOffice.addEventListener("click", event => {
            dropdown.className = "dropdown office"
        })
        dayMenuVacation.addEventListener("click", event => {
            dropdown.className = "dropdown vacation"
        })
        dayMenuNationalHoliday.addEventListener("click", event => {
            dropdown.className = "dropdown nationalHoliday"
        })
        dayMenuClear.addEventListener("click", event => {
            dropdown.className = "dropdown"
        })
    }
    document.getElementById("totalWorkDays").innerHTML = `Total workdays count:${workingDaysCount}`;
    document.getElementById("totalHomeDays").innerHTML = `Home workdays count:${homeDaysCount}`;
    document.getElementById("totalOfficeDays").innerHTML = `Office workdays count:${officeDaysCount}`;
});

function showFixedDays() {
    var x = document.getElementById("fixedDaysContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showNationalHoliday() {
    var x = document.getElementById("nationalHolidayList");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function checkWorkdayCount(){
    workingDaysCount = 0;
    homeDaysCount = 0;
    officeDaysCount = 0;
    document.querySelectorAll(".dropdown").forEach(element => {
        if (element.classList.contains("working")) {
            workingDaysCount++;
            homeDaysCount++;
        }else if(element.classList.contains("office")){
            workingDaysCount++;
            officeDaysCount++;
        }
    })
    document.getElementById("totalWorkDays").innerHTML = `Total workdays count:${workingDaysCount}`;
    document.getElementById("totalHomeDays").innerHTML = `Home workdays count:${homeDaysCount}`;
    document.getElementById("totalOfficeDays").innerHTML = `Office workdays count:${officeDaysCount}`;
}

>>>>>>> 7c4a04c (test)
