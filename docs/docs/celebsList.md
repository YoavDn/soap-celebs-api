# Celebs list



<script setup>
    import { ref } from 'vue'
    const celebName = ref('Morgan-Freeman')
    const randomSoapCeleb = ref(null)

    function loadRandomSoap() {
        fetch(`http://localhost:8080/api/celebs?name=${celebName.value}`)
        .then((r) => r.json())
        .then((r) => randomSoapCeleb.value = r)
    }
    loadRandomSoap()
</script>



<div v-if=randomSoapCeleb>
<h2 >Name: {{randomSoapCeleb[0].name}}</h2>
<h3> Scent: {{randomSoapCeleb[0].scent}}</h3>
<h4 >Gender: {{randomSoapCeleb[0].gender}}</h4>
<img :src="randomSoapCeleb[0].imgUrl"/>
</div>
