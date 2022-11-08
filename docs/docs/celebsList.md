# Celebs list


<script setup>
    import { ref } from 'vue'
    let celebs = ref(null)
    const currentCeleb = ref(null)

    const init =  () => {
        fetch('https://soapcelebsapi.onrender.com/api/celeb/list')
        .then((r) => r.json())
        .then((r) => {
            celebs.value = r
            loadSoap(r[0])
          }
        )
    }
    init()

    function loadSoap( name ) {
        fetch(`https://soapcelebsapi.onrender.com/api/celeb?name=${name}`)
        .then((r) => r.json())
        .then((r) => currentCeleb.value = r)
    }

    function changeSoap(e) {
        loadSoap(e.target.value)
    }
</script>

<br>
<div>
<label for=selectTag>https://soapcelebsapi.onrender.com/api/celeb?name=</label>
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
