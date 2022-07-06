<template>
    <div>
        <YouTube 
            class="youtube"
            :src="video_src"
            @ready="onReady"
            ref="youtube" 
        />
    </div>
</template>
<script>
import YouTube from 'vue3-youtube'

export default {
    name: "VideoVue",
    components: { YouTube },
    props: {
        video_src: String
    }
}
</script>
<style>
    .youtube{
        margin: 10px 0px 20px 0px;
    }
</style>