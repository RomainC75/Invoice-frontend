const months = ["Jan","Feb","Mars","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

export const displayDate = (date:string):string =>{
    if (typeof(date)!='string'){
        return ""
    }
    console.log("date : ", date)
    const monthNumber:RegExpMatchArray|null = date.match(/(\d{4})-(\d{2})-(\d{2})/)
    if(monthNumber && monthNumber.length>=4){
        try{
            const monthName:string = months[parseInt(monthNumber[2])-1]
            return `${monthNumber[3]} ${monthName} ${monthNumber[1]}`
        }catch(e){
            return ""
        }
    }
    return ""
}