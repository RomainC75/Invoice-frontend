import axios from "axios";

export default class FakeBackendService {
    static getAllProduct = async() => {
        return await axios.get('http://localhost:5000');
    }
    static getCountryList = () => {
        let responseData = {
            "data": {
                "result": [{
                    "name": "Canada",
                    "description": "Dominion of Canada",
                    "name_en": "Canada",
                    "nationality": "Canadian"
                }, {
                    "name": "USA",
                    "description": "United States of America",
                    "name_en": "USA",
                    "nationality": "American"
                }], "isSuccessful": true, "isResult": true, "errorMessages": []
            }
        };
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 0, responseData);
        }).catch(err => {
            throw new Error(err);
        });
    };
}