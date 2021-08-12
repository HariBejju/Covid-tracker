class Covid{
    constructor(country){
        this.country = country
    }

    changeLocation(country){
        this.country = country
    }

    async getCases(){
        const response = await fetch(`https://corona.lmao.ninja/v2/countries/${this.country}?yesterday&strict&query%20`)
        const responseText = await response.json()
        return responseText
    }

   
}

