<template>
    <b-container class="py-5">
        <b-row>
            <b-col>
                   <img
          class="img-fluid error"
          src="@/assets/errored.gif"
          alt="Error por favor regresa mas tarde."
        />
            </b-col>
        </b-row>
    </b-container>
    
</template>

<script>
export default {
    name: "Errored",
    
}
</script>


<style scoped>

.error{
    min-width: 100%;
}

</style>