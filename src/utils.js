export function calculateHours(from, to) {
    var fromS = from.split(":")
    var fromH = parseFloat(fromS[0])
    var fromM = parseFloat(fromS[1])
    fromM = (fromM * 60) / 3600

    var toS = to.split(":")
    var toH = parseFloat(toS[0])
    var toM = parseFloat(toS[1])
    toM = (toM * 60) / 3600

    return (toH + toM) - (fromH + fromM)
}

export function limitTo(string) {
    if (string.length > 10)
        return string.substring(0, 10) + "..."
    else
        return string
}

export function uniqueUserList(overview) {
    let users = []
    let list = []

    for (let i = 0; i < overview.length; i++) {
        if (!users.includes(overview[i].name)) {
            users.push(overview[i].name)
            list.push({text: overview[i].name, value: overview[i].name}) 
        }
    }

    return list
}

export function getMonths() {
    return [
        {text: "Januar", value: "0"}, 
        {text: "Februar", value: "1"}, 
        {text: "Mars", value: "2"}, 
        {text: "April", value: "3"}, 
        {text: "Mai", value: "4"}, 
        {text: "Juni", value: "5"}, 
        {text: "Juli", value: "6"}, 
        {text: "August", value: "7"}, 
        {text: "September", value: "8"}, 
        {text: "Oktober", value: "9"}, 
        {text: "November", value: "10"}, 
        {text: "Desember", value: "11"}
    ]
    // {text: "Januar", value: "Januar"}, 
    // {text: "Februar", value: "Februar"}, 
    // {text: "Mars", value: "Mars"}, 
    // {text: "April", value: "April"}, 
    // {text: "Mai", value: "Mai"}, 
    // {text: "Juni", value: "Juni"}, 
    // {text: "Juli", value: "Juli"}, 
    // {text: "August", value: "August"}, 
    // {text: "September", value: "September"}, 
    // {text: "Oktober", value: "Oktober"}, 
    // {text: "November", value: "November"}, 
    // {text: "Desember", value: "Desember"}
}

export function uniqueYearList(overview) {
    let dates = []
    let list = []

    for (let i = 0; i < overview.length; i++) {
        let year = new Date(overview[i].workDate).getFullYear()
        if (!dates.includes(year)) {
            dates.push(year)
            list.push({text: year, value: year}) 
        }
    }

    return list
}