<template>
  <div class="channelInfoPage">
    <Form :label-width="120" ref="channelInfoForm">
      <Divider orientation="left">基础信息</Divider>
        <Row :gutter="16">
          <Col span="8">
            <FormItem label="通道名称">
              <Input type="text" ></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="通道编码">
              <Input type="text" ></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="业务类型">
              <Input type="text" disabled ></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="16">
          <Col span="8">
            <FormItem label="开通状态">
              <RadioGroup class="radioGroup">
                <Radio label="true">开通</Radio>
                <Radio label="false">关闭</Radio>
            </RadioGroup>
            </FormItem>
          </Col>
        </Row>
      <Divider orientation="left">核对A方信息</Divider>
        <Row :gutter="16">
          <Col span="8">
            <FormItem label="业务类型">
              <Input type="text" disabled ></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="开通状态">
              <RadioGroup class="radioGroup">
                <Radio label="true">开通</Radio>
                <Radio label="false">关闭</Radio>
            </RadioGroup>
            </FormItem>
          </Col>
        </Row>

      <Divider orientation="left">核对B方信息</Divider>
    </Form>
    
  </div>
</template>
<style lang="less" scoped>
.channelInfoPage {
  max-width: 1200px;
}
// .radioGroup {
//   width: 100%;
//   label {
//     width: 48%;
//     margin: 0;
//   }
// }
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
  Radio
} from "iview";
export default {
  name: "ChannelInfo",
  components: {
    Divider,
    Form,
    FormItem,
    Input,
    Row,
    Col,
    RadioGroup,
    Radio
  }
};
</script>

