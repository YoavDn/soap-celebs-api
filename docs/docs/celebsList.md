# Celebs list

<script setup>
    import { ref } from 'vue'
    let celebs = ref(null)
    const currentCeleb = ref(null)

    const init =  () => {
        fetch('https://soap-celebs-api-production.up.railway.app/api/celeb/list')
        .then((res) => res.json())
        .then((res) => {
            celebs.value = res
            loadSoap(res[0])
          }
        )
    }
    init()

    function loadSoap( name ) {
        fetch(`https://soap-celebs-api-production.up.railway.app/api/celeb?name=${name}`)
        .then((res) => res.json())
        .then((res) => currentCeleb.value = res)
    }

    function changeSoap(e) {
        loadSoap(e.target.value)
    }
</script>

<br>
<div>
<label for=selectTag>https://soap-celebs-api-production.up.railway.app/api/celeb?name=</label>
<select name="selectTag" @change="changeSoap">
<option v-for="celeb in celebs"
 :value='celeb'
 >{{celeb}}</option> 
</select>
</div>

<div v-if=currentCeleb>
<h2 >Name: {{currentCeleb[0].name}}</h2>
<h3> Scent: {{currentCeleb[0].scent}}</h3>
<h4 >Gender: {{currentCeleb[0].gender}}</h4>
<img :src="currentCeleb[0].imgUrl"/>
</div>
