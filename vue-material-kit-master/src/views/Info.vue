<template>
    <div id="user-detail">
        <div id="user-info">
            <h2>Me</h2>
            <div>
                <h3>User Info:</h3>
                <h4 ></h4>

            </div>
        </div>
        <div id="user-fav">
            <h2>Video List</h2>
            <!-- <b-row>
                <b-card-group class="col-md-2" :key="idx" v-for="(video, idx) in this.videos">
                    <a :href=video.fileUrl style="color: black; text-decoration: none; height: 100%; width: 100%;">
                        <b-card :title=video.title
                        :img-src=video.thumbnailUrl
                        img-alt="Image"
                        tag="article"
                        style="height: 100%;"
                        >
                         <b-card-text>{{video.description}}</b-card-text>
                        </b-card>
                    </a>
                </b-card-group>
            </b-row> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      data: {
        username: null,
        videos: []
      }
    }
  },
  computed: {
    formattedCards () {
      return this.data.cards.reduce((c, n, i) => {
        if (i % 4 === 0) c.push([])
        c[c.length - 1].push(n)
        return c
      }, [])
    }
  },
  mounted () {
    console.log('User > ', window.localStorage.getItem('username'))
    console.log('Token ', this.$store.getters.getToken)
    let token = this.$store.getters.getToken

    // ��ū�� ���� �Ѱ����? 401 �������� ��� �� �ִ�.
    axios.get('/user/me', {headers: {'Authorization': 'Bearer ' + token}})
      .then(res => {
        console.log('Res ', res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
