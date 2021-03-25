import Service from '@/services/empleados/Services';



export default{
    getEmpleados(){
        return Service.get()
    }
    
}