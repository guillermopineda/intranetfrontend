import Service from '@/services/muro/Services';



export default{
    getMuro(tipo){
        return Service.get(tipo)
    }
    
}