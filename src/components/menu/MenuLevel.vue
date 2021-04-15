<template>
  <div :class="'category__container category__container-level'+treeLevel">
    <ul :class="'category__list-level'+treeLevel">
      <li v-for="(child, id) of node" :key="id" :class="'category__item-level'+treeLevel">
          <a :href="child.path" :class="'category__link-level'+treeLevel">
              <i v-if="child.icon" class="category-list__icon" v-html="child.icon"></i>
              <span>{{ child.label }}</span>
            </a>
            <div :class="[{active: isActive},'category__container category__container-level'+countLevel]">
              <ul :class="'category__list-level'+countLevel"  v-if="child.children && child.children.length && countLevel!=4">
                <li :class="'category__item-level'+countLevel" v-for="(child,index) of child.children" :key="index">
                    <a :class="[{shown: isActive},'category__link-level'+countLevel]" :href="child.path">{{ child.label }}</a>
                    <menuSubLevel :node="child.children" :treeLevel="countLevel+1" :containerHeight="containerHeight"></menuSubLevel>
                </li>
              </ul>
            </div>
      </li>
    </ul>
  </div>
</template>

<script>
import menuSubLevel from "./MenuSubLevel.vue";

export default {
  components: {
    menuSubLevel
  },
  props: {
    node: Array,
    treeLevel:Number,
    containerHeight:Number,
  },
  data: function () {
    return {
      isActive:false,
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
