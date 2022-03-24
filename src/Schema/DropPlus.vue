<template>
    <el-tooltip placement="top"
                content="添加兄弟/子节点">
        <el-dropdown trigger="click"  @command="addFieldAction">
            <i class="el-icon-plus plus"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="false">
                    <span>兄弟节点</span>
                </el-dropdown-item>
                <el-dropdown-item :command="true">
                    <span>子节点</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-tooltip>
</template>

<script>
export default {
    name: "DropPlus",
    components: {},
    props: {
        prefix: {
            type: Array,
            default: () => [],
        },
        name: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {
        addFieldAction(command) {
            this.$emit("add-field", {type:'add-field',isChild:command});
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
