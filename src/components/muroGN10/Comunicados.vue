<template>
    <b-container >
               <b-img 
               :id="nota.beneficio.id"
                :src="`http://tdushots.blob.core.windows.net${nota.beneficio.hotdeal.imagenes[0].path}`"
                
                ></b-img>

    </b-container>
</template>

<script>

export default {
    name: "Comunicados24",
    props: ["nota"]
    
}
</script>



<style scoped>

</style>