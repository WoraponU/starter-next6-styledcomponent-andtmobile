import React, { Component, Fragment } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile'
import './Test.less'

class Home extends Component {
  render() {
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
}

export default Home
