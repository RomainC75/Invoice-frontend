const months = ["Jan","Feb","Mars","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

export const displayDate = (date:string):string =>{
    const monthNumber = date.match(/(\d{4})-(\d{2})-(\d{2})/)
    if(monthNumber && monthNumber.length>=4){
        const monthName = months[parseInt(monthNumber[2])-1]
        return `${monthNumber[3]} ${monthName} ${monthNumber[1]}`
    }
    return ""
}