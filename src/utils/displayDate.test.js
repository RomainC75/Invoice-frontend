import { describe, it, expect } from "vitest";
import { displayDate } from "./displayDate"
 
describe('displayDate unit',()=>{
    it('should return an empty string',()=>{
        const wrongDate1 = "lkjsdf"
        const wrongDate2 = 23423
        const wrongDate3 = []
        const wrongDate4 = undefined

        const returnedValue1 = displayDate(wrongDate1)
        const returnedValue2 = displayDate(wrongDate2)
        const returnedValue3 = displayDate(wrongDate3)
        const returnedValue4 = displayDate(wrongDate4)

        expect(returnedValue1).toBe("")
        expect(returnedValue2).toBe("")
        expect(returnedValue3).toBe("")
        expect(returnedValue4).toBe("")
    })

    it('should return 20 Aug 2021', ()=>{
        const date = "2021-08-20 00:00:00.000000"
        const returnValue = displayDate(date)
        expect(returnValue).toBe("20 Aug 2021")
    })
})