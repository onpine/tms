<template>
  <div id="task">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="实验报告"
      sub-title="第二次实验报告"
      @back="() => $router.go(-1)"
    >
      <template slot="tags">
        <a-tag color="blue">Running</a-tag>
      </template>
      <template slot="extra">
        <a-button key="2" @click="showDrawer">未提交</a-button>
        <a-button key="1" @click="showDrawer" type="primary">已提交</a-button>
        <div>
          <!-- <a-button type="primary" @click="showDrawer">Open</a-button>
          <a-button type="primary" @click="showDrawer">Open</a-button>-->
          <a-drawer
            title="Basic Drawer"
            placement="right"
            :closable="false"
            :visible="visible"
            :after-visible-change="afterVisibleChange"
            @close="onClose"
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </a-drawer>
        </div>
      </template>
      <div class="content">
        <!-- <div class="main">
          <a-descriptions size="small" :column="3">
            <a-descriptions-item label="创建人">Lili Qu</a-descriptions-item>

            <a-descriptions-item label="创建时间">2017-01-10</a-descriptions-item>
            <a-descriptions-item label="结束时间">2017-10-10</a-descriptions-item>
            <a-descriptions-item label="课程">嵌入式设计</a-descriptions-item>
          </a-descriptions>
        </div>-->
        <div>
          <a-descriptions
            title
            bordered
            :size="size"
            :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
          >
            <!-- { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }适配不同尺寸的设备 -->
            <a-descriptions-item label="创建人">李虹雨</a-descriptions-item>
            <a-descriptions-item label="开始时间">2020.9.23</a-descriptions-item>
            <a-descriptions-item label="结束时间">2020.9.25</a-descriptions-item>
            <a-descriptions-item label="课程名">RFID</a-descriptions-item>
            <a-descriptions-item label="课程负责人">丁亚飞</a-descriptions-item>
            <a-descriptions-item label="文件格式要求">图片</a-descriptions-item>
            <a-descriptions-item label="任务表述">
              {{tid}}
              新华社斯德哥尔摩9月22日电 诺贝尔基金会首席执行官拉尔斯·海肯斯滕22日表示，受新冠疫情影响，今年12月将不再举行传统的诺贝尔奖颁奖典礼，颁奖仪式将改为线上举行。
              海肯斯滕当天在接受瑞典电视台采访时表示，由于新冠疫情在全球蔓延，诺贝尔基金会决定取消原定于12月10日在瑞典首都斯德哥尔摩举行的诺贝尔奖颁奖典礼。获奖者将不会按惯例被邀请至斯德哥尔摩，而是在各自国家获颁相关奖项。
              海肯斯滕说，今年的获奖者将在瑞典驻相关国家的大使馆或其从事研究的大学被授予诺贝尔奖章和证书，而主办方将在斯德哥尔摩市政厅线上直播颁奖仪式。
            </a-descriptions-item>
          </a-descriptions>
        </div>
        <div class="extra">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-statistic-countdown title="还剩" :value="deadline" style="margin-right: 50px" />
            </a-col>
            <a-col :span="12">
              <a-statistic title="未交" :value="93" class="demo-class">
                <template #suffix>
                  <span>/ 100</span>
                </template>
              </a-statistic>
            </a-col>
          </a-row>
        </div>
        <a-upload-dragger
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          @change="handleChange"
        >
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
          </p>
          <p class="ant-upload-text">单击或拖动文件到该区域上传</p>
          <p class="ant-upload-hint">支持单次或批量上传</p>
        </a-upload-dragger>
      </div>
    </a-page-header>
  </div>
</template>

<script>
export default {
  name: "task",
  props: ["tid"],
  data() {
    return {
      visible: false,
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      size: "small"
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log("visible", val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    }
  }
};
</script>

<style scoped>
#task {
  min-height: calc(100vh - 132.8px);
}
.task_height {
  min-height: calc(100vh - 180.8px);
}
.describe {
  width: 100%;
  padding: 24px;
  line-height: 25px;
}
.ant-page-header-heading {
  margin: 10px 0;
}
tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .ant-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }

  #components-page-header-demo-responsive .extra {
    width: 100%;
    margin-left: 0;
    text-align: left;
  }
}
</style>