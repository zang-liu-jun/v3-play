<template>
  <div>
    <ComTitle title="websocket"></ComTitle>
    <div class="ws">
      <div class="ws-left-box">
        <div class="state">
          <span>连接状态:</span>
          <span>CLOSED</span>
        </div>
        <div class="input">
          <el-input v-model="wsUrl" :disabled="true" placeholder="Please input">
            <template #prepend>服务地址</template>
            <template #append>
              <div class="connect" @click="ws">
                <el-icon color="#409EFF"><promotion /></el-icon>
              </div>
            </template>
          </el-input>
        </div>
        <div class="send">
          <div class="text-box">
            <textarea v-model="message"></textarea>
          </div>
          <div class="button-box">
            <el-button type="primary" @click="sendMes(message)">发送</el-button>
            <el-button type="danger" @click="clearMessage">清空</el-button>
          </div>
        </div>
      </div>
      <div class="ws-right-box">
        <div class="record">消息记录</div>
        <div class="reply-content">
          <el-scrollbar>
            <TransitionGroup name="list">
              <div v-for="item in replyArr" :key="item.time" class="reply-list">
                {{ item.msg }}
              </div>
            </TransitionGroup>
          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ComTitle from "@/components/common/ComTitle/ComTitle.vue";
import { useWs } from "./useWs";
import { ref } from "vue";

const wsUrl = ref("http://localhost:3003");
const message = ref("");
const { sendMes, replyArr, clearMessage } = useWs();
</script>

<style scoped lang="scss">
.ws {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  .ws-left-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
    margin-left: 20px;
    width: 400px;
    height: 300px;
    background-color: #fff;
    .state {
      margin-top: 10px;
      width: 90%;
      height: 40px;
      font-size: 18px;
      border-bottom: 1px solid #c8c8c8;
    }
    .input {
      width: 90%;
      margin-top: 10px;
      .connect {
        &:hover {
          cursor: pointer;
        }
      }
    }
    .send {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .text-box {
        width: 90%;
        textarea {
          padding: 5px;
          width: 100%;
          border: 1px solid #dcdfe6;
          outline: none;
          resize: none;
          background-color: #ffffff;
        }
      }
      .button-box {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        width: 90%;
      }
    }
  }
  .ws-right-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-right: 20px;
    height: 300px;
    background-color: #fff;
    .record {
      margin-top: 10px;
      padding-bottom: 10px;
      width: 90%;
      height: 35px;
      font-size: 18px;
      border-bottom: 1px solid #c8c8c8;
    }
    .reply-content {
      width: 90%;
      overflow-y: scroll;
      margin-bottom: 10px;
      &::-webkit-scrollbar {
        display: none;
      }
      .reply-list {
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
}
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.7s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
