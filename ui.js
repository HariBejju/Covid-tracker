class UI{
    constructor(){
        this.case = document.getElementById('virus-content')
        this.active = document.getElementById('active-content')
        this.death = document.getElementById('death-content')
        this.recovered = document.getElementById('recovered-content')
        this.country = document.getElementById('name')
        this.icon = document.getElementById('image')
    }

    paint(cases){
        this.case.innerText = cases.cases
        this.active.innerText = cases.active
        this.death.innerText = cases.deaths
        this.recovered.innerText = cases.recovered
        this.country.innerText = cases.country
        this.icon.setAttribute('src', `${cases.countryInfo.flag}`)
    }
}