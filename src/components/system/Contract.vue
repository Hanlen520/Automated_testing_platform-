<template>
	<el-container class="index">
		<el-header>
	        <div class="index index-title">
	        	<span class="index index-title name">测试用例管理</span>
	        </div>
		</el-header>
		<el-main>
			<el-form :inline="true" :model="CaseInfo" class="demo-form-inline">
				<div class="casesearch">
					<el-form-item>
						<el-input placeholder="用例名称"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input v-model="CaseInfo.caseid" placeholder="用例ID" value="caseid"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button icon="el-icon-search" @click="search(CaseInfo.caseid)">查询</el-button>
					</el-form-item>
					<pre>{{ CaseRes }}</pre>
				</div>
			</el-form>
		</el-main>
	</el-container>
</template>
<script>
	export default
	{
		data()
		{
            return {
                casename:'',
                CaseInfo:{},
                CaseRes:{}
            }
        },
        methods: {
        	search(caseid){
        		let params = {'searchcaseid':caseid}
        		console.log(params)
        		this.$api.caseApi.searchCaseName(params).then(res => {
        			console.log(res)
        			this.CaseRes=res.message
        		})

        	}
        }
	}
</script>
<style>
.odp-search {
    padding-top: 2%;
    padding-bottom: 0;
    padding-left: 4%;
    float: left;
    }
</style>