<template>
  <div class="channelInfoPage">
    <Form :label-width="120" ref="channelInfoForm" :model="info" :rules="infoRules">
      <Divider orientation="left">基础信息</Divider>
      <Row :gutter="16">
        <Col :lg="7" span="8">
          <FormItem label="通道名称" prop="channelName">
            <Input type="text" v-model="info.channelName"></Input>
          </FormItem>
        </Col>
        <Col :lg="7" span="8">
          <FormItem label="通道编码" prop="channelCode">
            <Input type="text" v-model="info.channelCode"></Input>
          </FormItem>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col :lg="7" span="8">
          <FormItem label="业务类型">
            <Input type="text" disabled v-model="info.busiType"></Input>
          </FormItem>
        </Col>
        <Col :lg="7" span="8">
          <FormItem label="开通状态">
            <RadioGroup class="radioGroup" v-model="info.status">
              <Radio label="true">开通</Radio>
              <Radio label="false">关闭</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
      </Row>

      <Divider orientation="left">核对A方信息</Divider>
      <Row :gutter="16">
        <Col :lg="7" span="8">
          <FormItem label="核对A方名称" prop="checkPlatName">
            <Input type="text" v-model="info.checkPlatName"></Input>
          </FormItem>
        </Col>
        <Col :lg="7" span="8">
          <FormItem label="收入支出文件">
            <RadioGroup class="radioGroup" v-model="info.platIsSameDoc">
              <Radio label="false">单独文件</Radio>
              <Radio label="true">同文件</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
      </Row>
    </Form>

    <Form :label-width="120" ref="platInForm" :model="platIn" :rules="platInRules">
      <h4 class="subTitle">{{info.platIsSameDoc === "true" ? '收入/支出对账设置' : '收入对账设置'}}</h4>
      <Row :gutter="16">
        <Col :lg="7" span="8">
          <FormItem label="支持对账状态">
            <RadioGroup class="radioGroup" v-model="platIn.status">
              <Radio label="true">支持</Radio>
              <Radio label="false">不支持</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
        <Col :lg="7" span="8">
          <FormItem label="解析器编码" prop="parseId">
            <Input type="text" v-model="platIn.parseId"></Input>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <template v-if="info.platIsSameDoc === 'false'">
      <Form :label-width="120" ref="platOutForm" :model="platOut" :rules="platOutRules">
        <h4 class="subTitle">支出对账设置</h4>
        <Row :gutter="16">
          <Col :lg="7" span="8">
            <FormItem label="支持对账状态">
              <RadioGroup class="radioGroup" v-model="platOut.status">
                <Radio label="true">支持</Radio>
                <Radio label="false">不支持</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
          <Col :lg="7" span="8">
            <FormItem label="解析器编码" prop="parseId">
              <Input type="text" v-model="platOut.parseId"></Input>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </template>

    <Form :label-width="120" ref="channelInfoFormB" :model="info" :rules="infoRules">
      <Divider orientation="left">核对B方信息</Divider>
      <Row :gutter="16">
        <Col :lg="7" span="8">
          <FormItem label="核对B方名称" prop="checkChannelName">
            <Input type="text" v-model="info.checkChannelName"></Input>
          </FormItem>
        </Col>
        <Col :lg="7" span="8">
          <FormItem label="收入支出文件">
            <RadioGroup class="radioGroup" v-model="info.channelIsSameDoc">
              <Radio label="false">单独文件</Radio>
              <Radio label="true">同文件</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
      </Row>
    </Form>

    <Form :label-width="120" ref="channelInForm" :model="channelIn" :rules="channelInRules">
      <h4 class="subTitle">{{info.channelIsSameDoc === "true" ? '收入/支出对账设置' : '收入对账设置'}}</h4>
      <Row :gutter="16">
        <Col :lg="7" span="8">
          <FormItem label="支持对账状态">
            <RadioGroup class="radioGroup" v-model="channelIn.status">
              <Radio label="true">支持</Radio>
              <Radio label="false">不支持</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
        <Col :lg="7" span="8">
          <FormItem label="解析器编码" prop="parseId">
            <Input type="text" v-model="channelIn.parseId"></Input>
          </FormItem>
        </Col>
      </Row>
    </Form>

    <template v-if="info.channelIsSameDoc=== 'false'">
      <Form :label-width="120" ref="channelOutForm" :model="channelOut" :rules="channelOutRules">
        <h4 class="subTitle">支出对账设置</h4>
        <Row :gutter="16">
          <Col :lg="7" span="8">
            <FormItem label="支持对账状态">
              <RadioGroup class="radioGroup" v-model="channelOut.status">
                <Radio label="true">支持</Radio>
                <Radio label="false">不支持</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
          <Col :lg="7" span="8">
            <FormItem label="解析器编码" prop="parseId">
              <Input type="text" v-model="channelOut.parseId"></Input>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </template>

    <Divider/>
    <div class="btnBox">
      <Button
        type="primary"
        style="margin-right: 30px;"
        @click="onSubmit"
      >确认{{info.id ? "修改" : "添加"}}</Button>
      <Button @click="goBack">返回</Button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.subTitle {
  padding-left: 20px;
  padding-bottom: 10px;
  color: #8c8c8c;
}
.btnBox {
  padding: 0 10px;
}
</style>
<style lang="less">
.channelInfoPage {
  .ivu-divider-horizontal.ivu-divider-with-text-left:before {
    width: 0;
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
  RadioGroup,
  Radio,
  Button
} from "iview";
export default {
  name: "ChannelForm",
  components: {
    Divider,
    Form,
    FormItem,
    Input,
    Row,
    Col,
    RadioGroup,
    Radio,
    Button
  },
  data() {
    return {
      info: {
        mercId: "1",
        channelName: "",
        channelCode: "",
        busiType: "NET",
        status: "true",
        checkPlatName: "",
        checkChannelName: "",
        platIsSameDoc: "false",
        channelIsSameDoc: "false"
      },
      platIn: {
        id: "",
        fileType: "PLAT",
        trxType: "TRADE",
        status: "true",
        parseId: ""
      },
      platOut: {
        id: "",
        fileType: "PLAT",
        trxType: "REFUND",
        status: "true",
        parseId: ""
      },
      channelIn: {
        id: "",
        fileType: "CHANNEL",
        trxType: "TRADE",
        status: "true",
        parseId: ""
      },
      channelOut: {
        id: "",
        fileType: "CHANNEL",
        trxType: "REFUND",
        status: "true",
        parseId: ""
      },
      infoRules: {
        channelName: [{ required: true, message: "通道名称不可为空" }],
        channelCode: [{ required: true, message: "通道编码不可为空" }],
        checkPlatName: [{ required: true, message: "核对A方名称不可为空" }],
        checkChannelName: [{ required: true, message: "核对B方名称不可为空" }]
      },
      platInRules: {
        parseId: [{ required: true, message: "解析器编码不可为空" }]
      },
      platOutRules: {
        parseId: [{ required: true, message: "解析器编码不可为空" }]
      },
      channelInRules: {
        parseId: [{ required: true, message: "解析器编码不可为空" }]
      },
      channelOutRules: {
        parseId: [{ required: true, message: "解析器编码不可为空" }]
      }
    };
  },
  methods: {
    goBack() {
      history.go(-1);
    },
    onSubmit() {
      const formRefs = [
        "channelInfoForm",
        "channelInfoFormB",
        "platInForm",
        "platOutForm",
        "channelInForm",
        "channelOutForm"
      ];
      const validateArray = [];
      formRefs.map(
        item =>
          this.$refs[item] && validateArray.push(this.$refs[item].validate())
      );
      console.log(validateArray);
      Promise.all(validateArray).then(validArray => {
        console.log(validArray);
        if (validArray.indexOf(false) === -1) {
          let channelMessage = { ...this.info },
            extraInfo = {
              channelCode: channelMessage.channelCode,
              mercId: channelMessage.mercId
            },
            platIn = { ...this.platIn, ...extraInfo },
            platOut = { ...this.platOut, ...extraInfo },
            channelIn = { ...this.channelIn, ...extraInfo },
            channelOut = { ...this.channelOut, ...extraInfo };
          if (channelMessage.platIsSameDoc === "true") {
            platOut = {
              ...platOut,
              parseId: platIn.parseId,
              status: platIn.status
            };
          }
          if (channelMessage.channelIsSameDoc === "true") {
            channelOut = {
              ...channelOut,
              parseId: channelIn.parseId,
              status: channelIn.status
            };
          }
          const data = {
            channelMessage,
            trxType: [platIn, platOut, channelIn, channelOut]
          };
          this.$emit("submit", data);
        }
      });
    }
  }
};
</script>

