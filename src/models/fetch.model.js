const url = "https://www.themealdb.com/api/json/v1/1";

export class ModelInterface{
    constructor(url){
        this.url = url;
        this._data = {};
        this._controller = undefined;
    }
    subscribe(controller){}
}

export class Model extends ModelInterface{
    constructor(url){
        super(url);
        this._data = { //for Caching purpose
            mealsByFirstLetter : {}, //object 
            mealByName : {}, //object 
            mealDetailById : {} //object 
        };
    }
    /**
     * @param {string} letter
     * @param {Function} successCallback
     * @param {Function} failCallback
     */
    async getMealsByFirstLetter(letter){
        const file = "/search.php";
        const queryParam = "?f=";
        letter = letter.toUpperCase();
        
        if(this._data.mealsByFirstLetter?.meals?.some(meal=> meal.strMeal[0] === letter)){
            return this._data.mealsByFirstLetter;
        };

        let request = await fetch(this.url + file + queryParam + letter, {method : "GET" ,headers : {
            "Accept" : "application/json"
        }});
        let response;
        try{
            response = await request.json();
            this._data.mealsByFirstLetter = {...this._data.mealsByFirstLetter, ...response}; //store response in (this._data : Array)
        } catch(e){
            response = await e;
            return response
        }

        return this._data.mealsByFirstLetter;
    };

    async getMealByName(name){
        const file = "/search.php";
        const queryParam = "?s=";
        if(this._data.mealByName?.some(meal=> meal.strMeal === name)){
            return this._data.mealByName;
        };
        let request = await fetch(this.url + file + queryParam + name, {method : "GET" ,headers : {
            'Accept': 'application/json'
        }});
        let jsonRes = await request.json();

        this._data.mealByName = [...this._data.mealByName,...jsonRes.meals]; //store response in (this._data : Array)

        return this._data.mealByName;
    }
    async getMealDetailsById(id){
        const file = "/lookup.php";
        const queryParam = "?i=";
        if(this._data.mealDetailById?.some(meal=> meal.idMeal === id)){
            return this._data.mealDetailById;
        };
        let request = await fetch(this.url + file + queryParam + id, {method : "GET" ,headers : {
            'Accept': 'application/json'
        }});
        let jsonRes = await request.json();

        this._data.mealDetailById = [...this._data.mealDetailById,...jsonRes.meals]; //store response in (this._data : Array)
        return this._data.mealDetailById;
    }
}

let foodModel = new Model(url);

export default foodModel;
