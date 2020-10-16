<template>
  <div id="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div class="search">
      <h1>输入班级号找到你的班级</h1>
      <a-input-search
        placeholder="input search class id"
        :loading="loading"
        enter-button
        @search="onSearch"
        :size="size"
        :max-length="35"
        style="width:500px;margin: 20px auto;display:block"
      />
    </div>
    <!-- Model搜索结果弹窗 -->
    <div>
      <!-- <a-button type="primary">Open Modal with customized footer</a-button> -->
      <a-modal v-model="visible" title="Title" on-ok="handleOk" :footer="null">
        <!-- <template slot="footer">
          <a-button key="back" @click="handleCancel">Return</a-button>
          <a-button key="submit" type="primary" :loading="mloading" @click="handleOk">Submit</a-button>
        </template>-->
        <a-result
          status="info"
          title="Successfully Purchased Cloud Server ECS!"
          sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        >
          <!-- a-result组件默认为叹号，成功为 status="success",下面为自定义smile -->
          <!-- <template #icon>
            <a-icon type="smile" theme="twoTone" />
          </template>-->
          <template #extra>
            <a-button key="back" @click="handleCancel">Return</a-button>
            <a-button
              key="submit"
              type="primary"
              :loading="mloading"
              @click="handleOk"
              >Submit</a-button
            >
          </template>
        </a-result>
        <!-- <p>Some contents...</p> -->
      </a-modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      loading: false,
      mloading: false,
      size: "large",
      visible: false
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    // 点击搜索事件，并控制显示搜索结果弹窗
    onSearch(value) {
      this.loading = true;
      console.log(value);
      this.visible = true;
    },
    // 显示Model框
    showModal() {
      this.visible = true;
    },
    // 当点击弹窗的确认按钮时，进行路由跳转
    handleOk(e) {
      this.mloading = true;
      setTimeout(() => {
        this.visible = false;
        this.mloading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
    }
  }
};
</script>
<style scoped>
#home {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/homebg.jpg");
  /* 背景图片铺满 */
  background-size: cover;
  /* 背景图片不重复 */
  background-repeat: no-repeat;
  /* 水平与垂直居中 */
  background-position: 50% 50%;
}
.search {
  position: relative;
  top: calc(40% - 100px);
}
h1 {
  text-align: center;
  color: white;
  font-family: sans-serif;
  font-size: 35px;
}
</style>
