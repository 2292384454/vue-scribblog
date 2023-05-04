import {ElMessage} from "element-plus";

export const errorTips = (msg) => {
    ElMessage.error(msg);
};

export const successTips = (msg) => {
    ElMessage.success(msg);
};

export const warningTips = (msg) => {
    ElMessage.warning(msg);
};

export const messageTips = (msg) => {
    ElMessage(msg);
};