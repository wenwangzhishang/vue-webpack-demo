<template>
  <el-card class="i-card">
    <h1>我要提个i</h1>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="申请人">
        <el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="选择申请人" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
      </el-form-item>
      <el-form-item label="部门">
        <el-select v-model="form.region" placeholder="请选择部门">
          <el-option v-for="(depart,index) of departments" :key="index" :label="depart.label" :value="depart.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="跟进意愿">
        <el-radio-group v-model="form.resource">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="重要" name="type"></el-checkbox>
          <el-checkbox label="紧急" name="type"></el-checkbox>
          <el-checkbox label="不重要" name="type"></el-checkbox>
          <el-checkbox label="不紧急" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="项目执行人">
        <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="选择申请人" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="呀屎啦">1
        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        name2: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      restaurants: [],
      state1: '',
      state2: '',
      departments: [
        {
          label: '一部',
          value: '1'
        },
        {
          label: '二部',
          value: '2'
        },
        {
          label: '三部',
          value: '3'
        },
        {
          label: '四部',
          value: '4'
        },
      ]
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "张小康", "mobile": "11111111111" },
        { "value": "张三", "mobile": "11111111111" },
        { "value": "李四", "mobile": "11111111111" },
        { "value": "大锤", "mobile": "11111111111" },
        { "value": "小螺丝", "mobile": "11111111111" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
  },
}
</script>
<style>
.i-card {
  width: 50%;
  margin: 0 auto;
  min-width: 480px;
}
</style>

