import Service from '@/services/biblioteca/Services';



export default{
    getBiblioteca(tipo){
        return Service.get(tipo)
    }
    
}