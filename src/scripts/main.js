AOS.init();

const eventdate=new Date("nov 17,2023 22:30:00")
const timesStampEvent=eventdate.getTime()

const daysPerMs=1000*60*60*24
const hoursPerMs=1000*60*60
const minutesPerMs=1000*60


const timercout=setInterval(function(){
    const timerNow=new Date().getTime()

const timeToStart=timesStampEvent - timerNow

const daysToStart= Math.floor(timeToStart / daysPerMs )
const hoursToStart= Math.floor((timeToStart % daysPerMs) / hoursPerMs)
const minutsToStart= Math.floor(timeToStart % hoursPerMs / minutesPerMs)
const secondsToStart = Math.floor((timeToStart % minutesPerMs/1000))

document.getElementById('day').innerHTML=daysToStart
document.getElementById('hours').innerHTML=hoursToStart
document.getElementById('minutes').innerHTML=minutsToStart
document.getElementById('seconds').innerHTML=secondsToStart


    if(timeToStart <0){
        clearInterval(timercout)
        document.getElementById('heroTxt').innerHTML= ` O Evento ja rolou mas fique atento em nossas redes para os proximos`
    }

},1000)