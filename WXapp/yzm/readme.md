- start 从页面到了组件 ？ 
  页面是老板，组件是员工，页面是组件组成的，
  start 老板也要知道状态， Page data
  <countdown start="{{start}}" />

- 组件的数据 data(内部数据) + properties(外部数据)
- properties 里的 observer 接收到值改变时执行 观察者
- 从内向外触发事件
  内： this.triggerEvent({
      "event_name",
      data
  })
  外： (绑定自定义事件)bind:event_name="真正执行接收消息的函数"

- 页面由组件组成，先去独立的开发组件，再拼起来
- 由外传入的propertites 由内传出的事件
Pages 和Components 就成了不可分割的有机体


喜马拉雅  掘金活动  小米商城  京东商城  马蜂窝旅游攻略  58到家  口碑    猫眼电影    
