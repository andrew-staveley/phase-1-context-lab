/* Your Code Here */
const createEmployeeRecord = function(employeeInformation) {
    let employee = {
        firstName: employeeInformation[0],
        familyName: employeeInformation[1],
        title: employeeInformation[2],
        payPerHour: employeeInformation[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}
const createEmployeeRecords = function(array) {
    let newArray = []
    for (let line of array) {
        newArray.push(createEmployeeRecord(line))
    }
    return newArray
}
function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    const timeInEvent = {
      type: 'TimeIn',
      hour: parseInt(hour),
      date,
    };
    this.timeInEvents.push(timeInEvent);
    return this;
}
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    const timeOutEvent = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date,
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
}
function hoursWorkedOnDate(soughtDate) {
    const timeInOnDate = this.timeInEvents.find((event) => event.date === soughtDate)
    const timeOutOnDate = this.timeOutEvents.find((event) => event.date === soughtDate)
    const hourIn = timeInOnDate.hour
    const hourOut = timeOutOnDate.hour
    return (hourOut - hourIn) / 100
}
function wagesEarnedOnDate(soughtDate) {
    const hoursWorked = hoursWorkedOnDate.call(this, soughtDate)
    const pay = this.payPerHour
    return hoursWorked*pay
}
function findEmployeeByFirstName(array, firstName) {
    return array.find((element) => element.firstName === firstName)
}
function calculatePayroll(array) {
    let total = 0
    array.forEach((employee) => {
        total += allWagesFor.call(employee)
    })
    return total
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

