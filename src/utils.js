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