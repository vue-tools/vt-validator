# vt-validator

基于 vue 2.x 封装的 validator 组件，内置了基本的检查规则。

## Install

```javascript
npm i vt-validator -S

import Validator from 'vt-validator'

// global install
Vue.component('Validator', Validator)

// scope install
export default {
    components: {
        Validator
    }
}
```

## Warning

validator 组件必须放在 Form 标签内，validator 组件的具名插槽(slot)内必须有且仅有一个 Input|Select|Textarea 标签。

validator 组件只有在触发表单的 submit 事件时才执行规则验证，所以 validator 组件内置了一个指令 v-submit，必须配合 v-submit 指令才能达到检查表单的值同时给予提示的效果。

validator 允许添加自定义规则，添加的规则分为全局生效和局部生效，全局生效在整个应用内都可以使用，局部生效只能在此页面内使用。

## API

### getRule

根据规则名，获得一个规则的实现(Function)。

Validator.getRule('mobile'); // 获得手机号规则的实现

### addRule

根据规则名，添加一个规则。
```
参数:
    name: 规则名
    operator: 规则实现，正则表达式或返回值为Boolean的函数
    message: 规则的提示信息
    silent: 如果该规则名对应的实现已经存在，是否强制覆盖实现，默认值 false
```
Validator.addRule('text', /\s/g, '{{name}}不能有空格'); // 添加一个名为 text 的规则

### setMessage

根据规则名，设置规则的提示信息，一般用于修改 validator 内置规则的提示信息。

Validator.setMessage('mobile', '手机号格式不正确'); // 修改手机号规则的提示信息

## Usage

```example
<template>
    <!-- v-submit 指令，用于检测规表单值是否适配规则 -->
    <form v-submit.prevent="done">
        <!-- 使用 required, text, email, minlength规则 -->
        <Validator name="用户名" required text email minlength="6">
            <input type="text">
        </Validator>
        <!-- 使用 required 和 mobile 规则 -->
        <Validator name="手机号" required mobile>
            <input type="tel">
        </Validator>
        <input type="submit" value="提交">
    </form>
</template>

<script>
    import Validator from 'vt-validator'

    // 添加一个 email 规则，全局生效
    Validator.addRule('email', /^\s*([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,20})\s*$/, '{{name}}的格式不正确', true);

    // 添加一个 mobile 规则，全局生效
    Validator.addRule('mobile', (val, element, rule) => {
        return /^1\d{10}$/.test(val)
    }, '{{name}}的格式不正确', true);

    export default {
        // 添加一个 text 规则，局部生效
        validators: {
            text: {
                message: '{{name}}不能有空格',
                handler(val, element, rule) {
                    return !/\s/g.test(val)
                }
            }
        },
        methods: {
            // 如果规则都通过，那么 err 的值为 null，如果某一个规则不通过，那么 err 的值为此规则的详情，它是一个对象，包含了 rule, name, element, message 等字段。
            done(err) {
                if (err) {
                    alert(err.message);
                    return;
                }

                // your code
            }
        },
        components: {
            Validator
        }
    }
</script>
```

## Rules

```interface
props:
  mobile:
    type: Boolean
    default: ''
    description: 判断手机号
  email:
    type: Boolean
    default: ''
    description: 判断邮箱
  url:
    type: Boolean
    default: ''
    description: 判断链接
  date:
    type: Boolean
    default: ''
    description: 判断日期
  number:
    type: Boolean
    default: ''
    description: 判断纯数字
  required:
    type: Boolean
    default: ''
    description: 判断是否填写
  min:
    type: Number
    default: ''
    description: 判断最小值
  max:
    type: Number
    default: ''
    description: 判断最大值
  minlength:
    type: Number
    default: ''
    description: 判断最小长度
  maxlength:
    type: Number
    default: ''
    description: 判断最大长度
```