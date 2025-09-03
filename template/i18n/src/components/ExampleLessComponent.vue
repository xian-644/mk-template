<template>
  <div class="example-component">
    <h2 class="title">Less 样式示例组件</h2>
    <div class="content">
      <p>这是一个使用 Less 样式的示例组件</p>
      <div class="color-blocks">
        <div class="color-block primary">主色</div>
        <div class="color-block success">成功色</div>
        <div class="color-block warning">警告色</div>
        <div class="color-block danger">危险色</div>
      </div>
      <div class="button-group">
        <button class="custom-button primary">主要按钮</button>
        <button class="custom-button success">成功按钮</button>
        <button class="custom-button warning">警告按钮</button>
        <button class="custom-button danger">危险按钮</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 在<script setup>中不需要显式导出组件
// 这是一个简单的展示组件，不需要额外的逻辑
</script>

<style lang="less" scoped>
// 导入变量
@import '../assets/styles/variables.less';

.example-component {
  padding: @spacing-medium;
  border-radius: @border-radius-base;
  box-shadow: @box-shadow-light;
  background-color: white;
  margin: @spacing-medium 0;

  .title {
    color: @primary-color;
    font-size: @font-size-large;
    margin-bottom: @spacing-medium;
    border-bottom: 1px solid @border-color-light;
    padding-bottom: @spacing-small;
  }

  .content {
    p {
      margin-bottom: @spacing-medium;
      color: @text-regular;
    }
  }

  .color-blocks {
    display: flex;
    margin-bottom: @spacing-medium;

    .color-block {
      flex: 1;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-right: @spacing-small;
      border-radius: @border-radius-small;

      &:last-child {
        margin-right: 0;
      }

      &.primary {
        background-color: @primary-color;
      }

      &.success {
        background-color: @success-color;
      }

      &.warning {
        background-color: @warning-color;
      }

      &.danger {
        background-color: @danger-color;
      }
    }
  }

  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: @spacing-small;

    .custom-button {
      padding: @spacing-small @spacing-medium;
      border: none;
      border-radius: @border-radius-base;
      cursor: pointer;
      color: white;
      font-size: @font-size-base;
      transition: all @transition-duration;

      &.primary {
        background-color: @primary-color;

        &:hover {
          background-color: lighten(@primary-color, 10%);
        }
      }

      &.success {
        background-color: @success-color;

        &:hover {
          background-color: lighten(@success-color, 10%);
        }
      }

      &.warning {
        background-color: @warning-color;

        &:hover {
          background-color: lighten(@warning-color, 10%);
        }
      }

      &.danger {
        background-color: @danger-color;

        &:hover {
          background-color: lighten(@danger-color, 10%);
        }
      }
    }
  }
}
</style>
