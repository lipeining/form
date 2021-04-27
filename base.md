## base
Corp
User
App
Form
Record

### 基础表单

#### design
使用 fc-designer 可以得到 rule, options。此时，
通过接口，post appId 下的 form。
这里应该怎样处理事件，怎么记录事件？还是说不支持事件，hook狗子函数等。

#### display
通过 appId, formId 得到 form 信息的 rule, options。
使用 form-create 渲染表单。
支持 onSubmit 接口，
post appId, formId, 记录一条实体数据
put  appId, formId, recordId, 修改一条实体数据。
delete appId, formId, recordId, 删除一条实体数据。
get appId, formId, recordId, 获取一条数据，不可以修改。
#### list
拿到列表数据
get appId, formId, 获取列表，然后根据通用表格，根据 form 的 widget
渲染 headers 和对应的列。

#### design 数据联动

当value或link中配置的field的value发生变化时会触发update回调, 可以在update回调中做一些关于value的联动处理
type update = (val:any, rule:FormRule, fApi:fApi)=>Boolean|void
##### 普通事件触发
记录 widgets trigger 
xxxxinput 可以是常量
yyyyinput 可以是 form.${fieldy} 或者 常量表达式
when ${fieldx} <op> xxxxinput 
result  ${fieldx} <op> yyyyinput
捕获事件触发。
##### 与其他 form 联动
实现通用接口，
获取 appId 下面的全部 form 
获取 appId, formId 的 form 数据
渲染 widgets， 构建 depend 数组。
where 支持多种函数计算，A表.${fieldx}  <op> B表.${fieldx}, 能够反推对应的关系。
result: A表.${fieldx}  <op> B表.${fieldx}
如何实现对应的事件触发呢？需要在渲染表单时，
捕获 input-change 事件，然后解析 widget 的字段，
查找 depend 数组，解析函数计算，得到 result。
此时，可能需要异步请求数据。

#### 实现查找用户的组件
本地内置 url 
get corpId,users 列表，需要传入 loginUser.corpId。
deptId, groupId, manager(depth)
组件需要记录，查找 dept, group, manager, curUser 等情况。
静态负责人，需要确定对应的 where 条件
动态负责人：需要当前登录用户信息和条件关系，计算得到 where 条件。