<template>
  <div class="parseFormPage">
    <Form :label-width="120" ref="baseInfoForm" :model="baseInfo" :rules="baseRules">
      <Divider orientation="left">基础信息</Divider>
      <Row>
        <!-- row 1 -->
        <Col :lg="6" span="8">
          <FormItem label="商户登录名" prop="mercName">
            <Input type="text" v-model="baseInfo.mercName"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="解析器编码" prop="parseId">
            <Input type="text" v-model="baseInfo.parseId"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="文件类型" prop="fileFormat">
            <Select v-model="baseInfo.fileFormat">
              <Option value="TEXT">文本</Option>
              <Option value="XLS">xls</Option>
              <Option value="XLSX">xlsx</Option>
              <Option value="CSV">csv</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="过滤文件名">
            <Input type="text" v-model="baseInfo.fileName"></Input>
          </FormItem>
        </Col>
        <!-- row 2 -->
        <Col :lg="6" span="8">
          <FormItem label="子解析器编码">
            <Input type="text" v-model="baseInfo.subParseId"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="入库实体">
            <Select v-model="baseInfo.entity">
              <Option value="PLAT">A方</Option>
              <Option value="CHANNEL">B方</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="文本处理方式" :required="baseInfo.fileFormat === 'TEXT'">
            <Select v-model="baseInfo.parseType">
              <Option value="NULL">无</Option>
              <Option value="SUB">按位截取</Option>
              <Option value="SPLIT">按分隔符分列</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="分隔符">
            <Input type="text" v-model="baseInfo.spliter"></Input>
          </FormItem>
        </Col>
        <!-- row 3 -->
        <Col :lg="6" span="8">
          <FormItem label="sheet页">
            <Input type="text" v-model="baseInfo.sheetIndex"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="列数">
            <Input type="text" v-model="baseInfo.columnCount"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="开始行">
            <Input type="text" v-model="baseInfo.beginIndex"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="截止行(倒数)">
            <Input type="text" v-model="baseInfo.endIndex"></Input>
          </FormItem>
        </Col>
        <!-- row 4 -->
        <Col :lg="6" span="8">
          <FormItem label="过滤">
            <Input type="text" v-model="baseInfo.filterIndex"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="过滤编码">
            <Input type="text" v-model="baseInfo.filterCode"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="编码">
            <Input type="text" v-model="baseInfo.charset"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="状态">
            <Select v-model="baseInfo.status">
              <Option value="true">开启</Option>
              <Option value="false">关闭</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
    </Form>

    <Form :label-width="120">
      <Divider orientation="left">实体列描述</Divider>
      <FormItem label="选择实体列">
        <Select multiple class="columnSelect" v-model="selectColumns">
          <Option value="orderNo">订单号</Option>
          <Option value="amount" disabled>交易金额</Option>
          <Option value="transType" disabled>交易类型</Option>
          <Option value="checkKey" disabled>对账主键</Option>
          <Option value="trxTime">交易时间</Option>
        </Select>
      </FormItem>
    </Form>
    <!-- orderNo -->
    <Form
      :label-width="120"
      ref="orderNoForm"
      v-show="selectColumns.indexOf('orderNo') > -1"
      :model="orderNoInfo"
      :rules="orderNoRules"
    >
      <h4 class="subTitle">订单号</h4>
      <Row>
        <Col :lg="6" span="8">
          <FormItem label="对应的数据库列">
            <Input type="text" :value="orderNoInfo.column" disabled></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="下标或截取范围" prop="index">
            <Input type="text" v-model="orderNoInfo.index"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="符号消除">
            <Input type="text" v-model="orderNoInfo.symbolElimination"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="列截取">
            <Input type="text" v-model="orderNoInfo.colSub"></Input>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <!-- amount -->
    <Form :label-width="120" ref="amountForm">
      <h4 class="subTitle">交易金额</h4>
      <Row>
        <Col :lg="6" span="8">
          <FormItem label="对应的数据库列">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="下标或截取范围">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="金额单位">
            <Select>
              <Option value="1">元</Option>
              <Option value="0.1">角</Option>
              <Option value="0.01">分</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="符号消除">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="列截取">
            <Input type="text"></Input>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <!-- transType -->
    <Form :label-width="120" ref="transTypeForm">
      <h4 class="subTitle">交易类型</h4>
      <Row>
        <Col :lg="6" span="8">
          <FormItem label="对应的数据库列">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="下标或截取范围">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="支付">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="退款">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="符号消除">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="列截取">
            <Input type="text"></Input>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <!-- checkKey -->
    <Form :label-width="120" ref="checkKeyForm">
      <h4 class="subTitle">对账主键</h4>
      <Row>
        <Col :lg="6" span="8">
          <FormItem label="对应的数据库列">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="下标或截取范围">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="符号消除">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="列截取">
            <Input type="text"></Input>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <!-- trxTime -->
    <Form :label-width="120" ref="trxTimeForm" v-show="selectColumns.indexOf('trxTime') > -1">
      <h4 class="subTitle">交易时间</h4>
      <Row>
        <Col :lg="6" span="8">
          <FormItem label="对应的数据库列">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="下标或截取范围">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="日期格式化">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="符号消除">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col :lg="6" span="8">
          <FormItem label="列截取">
            <Input type="text"></Input>
          </FormItem>
        </Col>
      </Row>
    </Form>

    <Divider/>
    <div class="btnBox">
      <Button type="primary" style="margin-right: 30px;">确认{{baseInfo.id ? "修改" : "添加"}}</Button>
      <Button @click="goBack">返回</Button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.btnBox {
  padding: 0 10px;
}
.subTitle {
  margin-left: 10px;
  margin-bottom: 15px;
  padding: 3px 10px;
  color: #8c8c8c;
  background-color: #f5f7f9;
}
.columnSelect {
  width: auto;
  /deep/ & > div {
    border: none;
    padding-left: 0;
  }
  /deep/ .ivu-tag-checked:nth-child(-n + 3) {
    > i {
      display: none;
    }
  }
}
</style>
<style lang="less">
.parseFormPage {
  .ivu-divider-horizontal.ivu-divider-with-text-left:before {
    width: 0;
  }
  .ivu-card-body {
    padding: 16px 0;
  }
}
</style>
<script>
import {
  Divider,
  Form,
  FormItem,
  Input,
  Row,
  Col,
  Button,
  Select,
  Option,
  Card,
  Cell,
  CellGroup,
  CheckboxGroup,
  Checkbox
} from "iview";

export default {
  name: "ParseForm",
  components: {
    Divider,
    Form,
    FormItem,
    Input,
    Row,
    Col,
    Button,
    Select,
    Option,
    Card,
    Cell,
    CellGroup,
    CheckboxGroup,
    Checkbox
  },
  data() {
    return {
      baseInfo: {
        id: "",
        mercName: "", // 商户登录名
        parseId: "", // 解析器编码
        fileFormat: "", // 文件类型
        fileName: "", // 过滤文件名
        subParseId: "", // 子解析器编码
        entity: "", // 入库实体
        parseType: "", // 文本处理方式
        spliter: "", // 分隔符
        sheetIndex: "", // sheet页
        columnCount: "", // 列数
        beginIndex: "", // 开始行
        endIndex: "", // 截止行(倒数)
        filterIndex: "", // 过滤
        filterCode: "", // 过滤编码
        charset: "", // 编码
        status: "true" // 状态
      },
      baseRules: {
        mercName: [{ required: true, message: "商户登录名必填" }],
        parseId: [{ required: true, message: "解析器编码必填" }],
        fileFormat: [{ required: true, message: "文件类型必填" }],
        entity: [{ required: true, message: "入库实体必填" }]
      },
      orderNoInfo: {
        column: "orderNo",
        index: "",
        symbolElimination: "",
        colSub: ""
      },
      orderNoRules: {
        index: [{ required: true, message: "下标或截取范围必填" }]
      },
      amountInfo: {
        column: "amount"
      },
      transTypeInfo: {
        column: "transType"
      },
      checkKeyInfo: {
        column: "checkKey"
      },
      trxTimeInfo: {
        column: "trxTime"
      },
      selectColumns: ["amount", "transType", "checkKey"]
    };
  },
  methods: {
    goBack() {
      history.go(-1);
    }
  }
};
</script>

