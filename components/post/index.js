// components/post/index.js
Component({
  properties: {
    res:Object
  },
  data: {
  },
  methods: {
    onTap(event){
      const pid = this.properties.res.postId
      this.triggerEvent('posttap',{
        pid
      })
    },
  }
})
