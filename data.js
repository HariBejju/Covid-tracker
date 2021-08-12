const cases = new Covid('India')
// cases.changeLocation('Japan')

document.getElementById('btn').addEventListener('click', 
function(){
    document.querySelector('.blackra').style.display = 'block'
})

document.getElementById('cutra').addEventListener('click',
function(){
    document.querySelector('.blackra').style.display = 'none'
})

document.getElementById('submit').addEventListener('click', fetchData)

function fetchData(){
    const changed = document.getElementById('country').value

    if(changed === ''){
        alert(' Field cannot be empty')
    }else{
        cases.changeLocation(changed)
        getCases()
        document.querySelector('.blackra').style.display = 'none'
    }



}
document.addEventListener('DOMContentLoaded', getCases)

function getCases(){
    const ui = new UI()
cases.getCases()
.then(res => ui.paint(res))
.catch(err => console.log(err))
}