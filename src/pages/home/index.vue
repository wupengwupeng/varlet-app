<template>
	<view>
		 <var-app-bar title="title">
		    <template #left>
		      <var-button
		        round
		        text
		        color="transparent"
		        text-color="#fff"
		        @click="goBack"
		      >
		        <var-icon name="chevron-left" :size="24" />
		      </var-button>
		    </template>
		  </var-app-bar>
		<var-space :size="[10, 10]">
		    <var-button>默认按钮</var-button>
		    <var-button type="primary">主要按钮</var-button>
		    <var-button type="info">信息按钮</var-button>
		    <var-button type="success">成功按钮</var-button>
		    <var-button type="warning">警告按钮</var-button>
		    <var-button type="danger">危险按钮</var-button>
			<var-button @click="toggleTheme"> 切换暗黑模式</var-button>
		  </var-space>
		  <text>sdf</text>
		    <var-input placeholder="请输入文本" v-model="value" />
			  <var-select placeholder="请选择一个选项" v-model="value">
			    <var-option label="吃饭" />
			    <var-option label="睡觉" />
			  </var-select>
			  <var-bottom-navigation v-model:active="active" class="tabBar">
			      <var-bottom-navigation-item label="标签" icon="home" />
			      <var-bottom-navigation-item label="标签" icon="magnify" />
			      <var-bottom-navigation-item label="标签" icon="heart" />
			      <var-bottom-navigation-item label="标签" icon="account-circle" />
			    </var-bottom-navigation>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'
import dark from '@varlet/ui/es/themes/dark'
import { StyleProvider } from '@varlet/ui'

let currentTheme = null
const value = ref('')
const active = ref(0)

const toggleTheme = () => {
  currentTheme = currentTheme ? null : dark
  StyleProvider(currentTheme)
}


const handleClick = (active) => {
  Snackbar.success(`clicked ${active}`)
}
const goBack = () => {
  Snackbar({
    content: '返回',
    position: 'top'
  })
}


</script>

<style style="scss" scoped>
	body{
		background-color: var(--color-body);
	}
	.tabBar{
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
