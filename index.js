function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeesData) {
    return employeesData.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    hour = parseInt(hour, 10)

    this.timeInEvents.push({
        type: "TimeIn",
        hour: hour,
        date: date
    })

    return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    hour = parseInt(hour, 10)

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: hour,
        date: date
    })

    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date)
    let timeOut = this.timeOutEvents.find(event => event.date === date)

    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function allWagesFor() {
    return this.timeInEvents.reduce((total, event) => {
        return total + wagesEarnedOnDate.call(this, event.date)
    }, 0)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName)
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => {
        return total + allWagesFor.call(record)
    }, 0)
}