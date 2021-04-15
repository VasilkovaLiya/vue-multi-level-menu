<template>
    <div :class="'search-category__container search-category__container-level'+treeLevel">
        <ul :class="'search-category__list-level'+treeLevel" :data="'data-tree-'+ treeLevel">
            <li v-for="(child, id) of node" :key="id" :class="'search-category__item-level'+treeLevel">
                <a :href="child.path" :class="'search-category__link-level'+treeLevel">
                    <i v-if="child.icon" class="search-category-list__icon" v-html="child.icon"></i>
                    <span>{{ child.label }}</span>
                </a>
                <div :class="[{active: isActive},'search-category__container search-category__container-level'+countLevel]">
                <ul :class="'search-category__list-level'+countLevel" :data="'data-count-'+ countLevel"  v-if="child.children && child.children.length && countLevel!=4">
                    <li :class="'search-category__item-level'+countLevel" v-for="(child,index) of child.children" :key="index">
                        <a :class="[{shown: isActive},'search-category__link-level'+countLevel]" :href="child.path">{{ child.label }}</a>
                        <menuSubLevel :node="child.children" :treeLevel="countLevel+1" :containerHeight="containerHeight"></menuSubLevel>
                    </li>
                </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    components: {menuSubLevel: () => import('./MenuSubLevel.vue')},
    props: {
        node: Array,
        treeLevel:Number,
        containerHeight:Number,
        flag:Boolean
    },
    data: function () {
        return {
        isActive:false,
        test:2,
        }
    },
    computed: {
        countLevel: function () {
        return this.treeLevel + 1
        }
    },
    methods: {
        
    }
}
</script>



