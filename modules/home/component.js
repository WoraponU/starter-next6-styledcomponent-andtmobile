import React from 'react'
import { Flex, WhiteSpace } from 'antd-mobile'
// import './Test.less'
const Component = () => {
  return (
    <div className="flex-container">
      <div className="sub-title">Basic</div>
      <Flex>
        <Flex.Item>test</Flex.Item>
        <Flex.Item>test</Flex.Item>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <Flex.Item>test</Flex.Item>
        <Flex.Item>test</Flex.Item>
        <Flex.Item>test</Flex.Item>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <Flex.Item>test</Flex.Item>
        <Flex.Item>test</Flex.Item>
        <Flex.Item>test</Flex.Item>
        <Flex.Item>test</Flex.Item>
      </Flex>
      <WhiteSpace size="lg" />
    </div>
  )
}

export default Component
