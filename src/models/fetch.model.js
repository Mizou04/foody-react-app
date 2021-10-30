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
            mealDetailById : {}, //object
        };
    }
    
    async httpClient({url, file, queryParam}){
        let request = await fetch(url + file + queryParam, {method : "GET" ,headers : {
            "Accept" : "application/json"
        }});
        let response;
        try{
            response = await request.json();
            return {...response}; //store response in (this._data : Array)
        } catch(e){
            response = await e;
            return response
        }
    }
    /**
     * @param {string} letter
     * 
     */
    getMealsByFirstLetter(letter){
        const file = "/search.php";
        letter = letter.toUpperCase();
        const queryParam = `?f=${letter}`;
        
        if(this._data.mealsByFirstLetter?.meals?.some(meal=> meal.strMeal[0] === letter)){
            return this._data.mealsByFirstLetter;
        };
        //can be refactored 
        let res = this.httpClient({url : this.url, file, queryParam})
        this._data.mealsByFirstLetter = {...this._data.mealsByFirstLetter, ...res}
        
        return this._data.mealsByFirstLetter;
    };
    

    getMealByName(name){
        const file = "/search.php";
        const queryParam = `?s=${name}`;
        if(this._data.mealByName?.meals.some(meal=> meal.strMeal === name)){
            return this._data.mealByName;
        };
        
        let res = this.httpClient({url : this.url, file, queryParam})

        this._data.mealByName = {...this._data.mealByName, ...res}; //store response in (this._data : Array)

        return this._data.mealByName;
    }

    getMealDetailsById(id){
        const file = "/lookup.php";
        const queryParam = `?i=${id}`;
        if(this._data.mealDetailById?.meals.some(meal=> meal.idMeal === id)){
            return this._data.mealDetailById;
        };
        
        let res = this.httpClient({url : this.url, file, queryParam})

        this._data.mealDetailById = {...this._data.mealDetailById,...res}; //store response in (this._data : Array)
        
        return this._data.mealDetailById;
    }

    
}

let foodModel = new Model(url);

export default foodModel;
