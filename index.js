// code your solution here
function saturdayFun(def = 'roller-skate'){
    return "This Saturday, I want to " + def + "!"
}

function mondayWork(def = 'go to the office'){
    return "This Monday, I will " + def + "."
}

function wrapAdjective(flair){
    function special(d = 'special'){
        if (flair === '*') return 'You are ' + '*' + d + '*' + "!"
        else if (flair === '||') return 'You are ' + '||' + d + '||' + "!"
        return 'You are ' + d
    }
    return special
}