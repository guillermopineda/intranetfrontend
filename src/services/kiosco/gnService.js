import Service from '@/services/kiosco/Services';



export default{
    getKiosco(tipo){
        return Service.get(tipo)
    }
    
}