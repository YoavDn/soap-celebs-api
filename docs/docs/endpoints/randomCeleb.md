# Random Celeb
`https://soapcelebsapi.onrender.com/api/celeb/random`

<script setup>
    import { ref } from 'vue'
    const randomSoapCeleb = ref(null)

    function loadRandomSoap() {
        fetch('https://soapcelebsapi.onrender.com/api/celeb/random')
        .then((r) => r.json())
        .then((r) => randomSoapCeleb.value = r)
    }
    loadRandomSoap()
</script>
<button class="fetch-btn" @click="loadRandomSoap">Fetch Random Soap</button>


<div v-if=randomSoapCeleb>
<h2 >Name: {{randomSoapCeleb[0].name}}</h2>
<h3> Scent: {{randomSoapCeleb[0].scent}}</h3>
<h4 >Gender: {{randomSoapCeleb[0].gender}}</h4>
<img :src="randomSoapCeleb[0].imgUrl"/>
</div>


## Query params 
this endpoint has two optional params 

| Param | Description |
| :---- | :---------- |
| gender  | getting the celebs by it's name |
| limit | Limit the result to a specific number of celebs


Not adding the query params will result all soap celebs 