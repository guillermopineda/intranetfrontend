import Service from '@/services/aviso/Services';



export default{
    getAviso(){
        return Service.get()
    }
    
}