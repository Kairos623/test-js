k = 0
a = 2
n = 1


document.querySelectorAll(selectors ='.image img').forEach(callback = (el = Element, index = number) => {
    el.addEventListener(type = 'click', listener = () => {
        if (index === a){
            el.parentNode.classList.add('image__success')
            k = k + 1
        }
        else{
            el.parentNode.classList.add('image__failure')
            document.querySelectorAll(selectors = '.image')[a].classList.add('image__success')
        }
        document.querySelectorAll(selectors = '.image').forEach((e = Element) =>{
            e.style.pointerEvents = 'none'
        })
        document.querySelector(selectors = '.button').classList.add('button__active')
        n = n + 1
    })
})

document.querySelector(selectors = '.button').addEventListener(type = 'click', listener = () => {
    if (n == 2){
        document.querySelector(selectors = '.text div').textContent = 'На какой картинке лев?'
        a = 3
    }
    else if (n == 3){
        document.querySelector(selectors = '.text div').textContent = 'На какой картинке Земля?'
        a = 0
    }
    else if (n == 4){
        document.querySelector(selectors = '.text div').textContent = 'Вы набрали ' + k + ' / ' + (n-1)+' баллов'
    }
    document.querySelector('.button').classList.remove('button__active')
    document.querySelectorAll('.image').forEach(callbackfn = (el = Element, index = number) => {
        el.style.pointerEvents = ''
        el.classList.remove('image__success')
        el.classList.remove('image__failure')
        el.querySelector('img').src = 'imgs/'+n+'_'+(index)+'.jpg'
    })
    document.getElementById('a'+n).classList.add('link__active')
    document.getElementById('a'+(n-1)).classList.remove('link__active')
})