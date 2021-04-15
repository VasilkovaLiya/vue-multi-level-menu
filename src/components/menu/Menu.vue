<template>
    <div class="category">
        <div :class="'category__container category__container-level'+treeLevel">
            <ul :class="['category__list-level'+treeLevel]">
            <li v-for="(child, id) of ierarchcat" :key="id" :class="'category__item-level'+treeLevel">
                <a :href="child.path" :class="'category__link-level'+treeLevel" >
                    <i v-if="child.icon" class="category-list__icon" v-html="child.icon"></i>
                    <span>{{ child.label }}</span></a>
                    <div :class="['category__container category__container-level'+countLevel]">
                    <ul :class="'category__list-level'+countLevel"  v-if="child.children && child.children.length">
                        <li :class="'category__item-level'+countLevel" v-for="(child,index) of child.children" :key="index">
                            <a :class="[{shown: isActive},'category__link-level'+countLevel]" :href="child.path">{{ child.label }}</a>
                            <menuLevel :node="child.children" :treeLevel="countLevel+1"></menuLevel>
                        </li>
                    </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import menuLevel from './MenuLevel.vue'
export default {
	components: {menuLevel},
    props:{ baseurl: String},
	data() {
		return {
			level:'',
            needToBack: false,
            ierarchcat:[
                {path:'someurl',
                label:'Категория1',
                    children: [
                        {path:'someurl',
                        label:'Субкатегория1'},
                        {path:'someurl',
                        label:'Субкатегория2'},
                        {path:'someurl',
                        label:'Субкатегория3'},
                    ]
                },
                {path:'someurl',
                label:'Категория2',
                    children: [
                        {path:'someurl',
                        label:'Субкатегория1',
                            children: [
                            {path:'someurl',
                            label:'Уровень3 Категории2'},
                            {path:'someurl',
                            label:'Уровень3 Категории2'},
                            {path:'someurl',
                            label:'Уровень3 Категории2'},
                        ]},
                        {path:'someurl',
                        label:'Субкатегория2',
                            children: [
                            {path:'someurl',
                            label:'Уровень3 Категории2'},
                            {path:'someurl',
                            label:'Уровень3 Категории2'},
                            {path:'someurl',
                            label:'Уровень3 Категории2'},
                        ]},
                        {path:'someurl',
                        label:'Субкатегория3',
                            children: [
                            {path:'someurl',
                            label:'Уровень3 Категории2'},
                            {path:'someurl',
                            label:'Уровень3 Категории2'},
                            {path:'someurl',
                            label:'Уровень3 Категории2'},
                        ]},
                    ]
                },
            ],
            treeLevel:1,
            isActive:false,
		}
	},
	created(){
        this.getCategoryIerarhy();
	},
	computed: {
        countLevel: function () {
			return this.treeLevel + 1
        }
    },
	methods:{
		getCategoryIerarhy(){
            //получить список категорий из БД
			axios.get(
				this.baseurl+'/local/api/?path=bid.categories'
			).then(response => {
				this.ierarchcat = response.data;
			}).catch(() => {});
        },
	}
}
</script>

<style lang="scss">
.category {
    margin-top: 20px;
    &__link-level1 {
        font-weight: bold;
        font-size: 24px;
    }
    &__link-level2 {
        padding-left: 15px;
    }
    &__link-level3 {
        padding-left: 30px;
    }
}
</style>
