  
const  duracao  =  (tempo)  =>  {
    let  hora  =  duracao/3600
    let  minutos  =  ( tempo % 3600)/60
    let  segundos  =  ( tempo % 3600)% 60
    console.log ( `O evento possui ${hora.toFixed(0)} horas; ${minutos.toFixed(0)} miutos; ${segundos.toFixed(0)} e segundos`)
}