<template>
  <div id="cards">
    <a-layout-content class :style="{ margin: '24px 16px' }">
      <div
        class="myContent cards_height"
        :style="{ padding: '24px', background: '#fff', minHeight: '' ,background:'#f0f2f5'}"
      >
        <a-card title="嵌入式实训报告打印" class="myCard" style="width: 300px;height:250px;" hoverable>
          <router-link slot="extra" :to="'/class/'+cdata.cid+'/Task/t001'">更多</router-link>
          <p>{{cdata.type+"----"+cdata.cid}}郑老师要求大家，打印上学期的八次实验报告，明天早上九点之前交，大家自行下载，尽快打印，互相转告,明天早上九点之前交，大家自行下载，尽快打印，互相转告</p>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-statistic-countdown
                title="距离结束"
                :value="deadline"
                style="margin-right: 50px"
                @finish="onFinish"
              />
            </a-col>
            <a-col :span="12">
              <a-statistic title="未完成" :value="93" class="demo-class">
                <template #suffix>
                  <span>/ 100</span>
                </template>
              </a-statistic>
            </a-col>
          </a-row>
          <a-progress
            :stroke-color="{from: '#108ee9',to: '#87d068',}"
            :percent="60"
            status="active"
          />
        </a-card>
        <a-card
          title="Default size card"
          class="myCard"
          style="width: 300px;height:250px;"
          hoverable
        >
          <router-link slot="extra" to="Task/t001">更多</router-link>
          <p>card content</p>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-statistic-countdown
                title="距离结束"
                :value="deadline"
                style="margin-right: 50px"
                @finish="onFinish"
              />
            </a-col>
            <a-col :span="12">
              <a-statistic title="未完成" :value="93" class="demo-class">
                <template #suffix>
                  <span>/ 100</span>
                </template>
              </a-statistic>
            </a-col>
          </a-row>
          <a-progress
            :stroke-color="{from: '#108ee9',to: '#87d068',}"
            :percent="99.9"
            status="active"
          />
        </a-card>
      </div>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  props: ["cdata"],
  data() {
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    onFinish() {
      console.log("finished!");
    }
  }
};
</script>

<style scoped>
#cards {
  min-height: calc(100vh - 132.8px);
}
.cards_height {
  min-height: calc(100vh - 180.8px);
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.myContent {
  display: grid;
  /* 每一列的宽度，尽可能的在一行中插入更多列 */
  grid-template-columns: repeat(auto-fill, 300px);
  /* 行间距 */
  grid-row-gap: 20px;
  /* 列间距 */
  grid-column-gap: 10px;
  /* justify-items属性设置单元格内容的水平位置（左中右），align-items属性设置单元格内容的垂直位置（上中下）。 */
  justify-items: center;
  /* justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）。 */
  justify-content: space-around;
}
p {
  height: 60px;
  display: block;
  line-height: 20px;
  overflow: hidden;
  text-align: left;
}
/* .myCard {
} */
</style>