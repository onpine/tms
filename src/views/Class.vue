<template>
  <div id="class">
    <a-layout class="min_height" id="components-layout-demo-responsive">
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
        class="min_height"
      >
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" @select="select">
          <a-menu-item key="1">
            <a-icon type="pause-circle" />
            <span class="nav-text">进行中</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="lock" />
            <span class="nav-text">未开始</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="check-circle" />
            <span class="nav-text">已结束</span>
          </a-menu-item>
          <a-menu-item key="4">
            <a-icon type="download" />
            <span class="nav-text">文件下载</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout class="min_height">
        <a-layout-header :style="{ background: '#fff', padding: 0 }">{{cid}}班任务中心{{tkey}}</a-layout-header>
        <keep-alive>
          <router-view :cdata="{'cid':cid,'type':tkey}"></router-view>
        </keep-alive>
        <!-- <a-layout-content class="min_height" :style="{ margin: '24px 16px 0' }">
          <div
            class="myContent"
            :style="{ padding: '24px', background: '#fff', minHeight: '100%' }"
          >
            <a-card title="嵌入式实训报告打印" class="myCard" style="width: 300px;height:250px;" hoverable>
              <a slot="extra" href="#">more</a>
              <p>郑老师要求大家，打印上学期的八次实验报告，明天早上九点之前交，大家自行下载，尽快打印，互相转告,明天早上九点之前交，大家自行下载，尽快打印，互相转告</p>
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
              <a slot="extra" href="#">more</a>
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
        </a-layout-content>-->
        <a-layout-footer
          style="textAlign: center;background: rgb(255, 255, 255);"
        >Task Management System ©2020 Created by ZINC Studio</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Cards from "../components/Cards";
import Task from "../components/Task";
export default {
  props: ["cid"],
  data() {
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      tkey: "1"
    };
  },
  components: {
    Cards,
    Task
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
    },
    /**
     *Menu导航菜单事件 @select事件 被选中时调用被选中时调用
     * obj =  { item, key, selectedKeys }
     */
    select(obj) {
      this.tkey = obj.key;
    }
  }
};
</script>

<style scoped>
#class {
  min-height: 100vh;
}
.min_height {
  min-height: 100vh;
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