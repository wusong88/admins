<template>
	<div class="hello">
		<el-container style="width: 100%; height: 100%; border: 1px solid #eee">

			<el-col :md="6" :lg="6" :xl="6" style="border-right:2px solid #e9e9e9;">
				<div class="roleBox">
					<el-header>角色列表</el-header>
					<div class="btns">
						<el-button type="primary" @click="dialogAddRole = true"><i class="el-icon-circle-plus-outline"></i> 新建</el-button>
						<el-button type="primary" @click="dialogUpdateRole = true"><i class="el-icon-circle-check"></i> 修改</el-button>
						<el-button type="danger" @click="dialogDelRole = true"><i class="el-icon-remove-outline"></i> 删除</el-button>
					</div>
					<el-table stripe ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" >
						</el-table-column>
						<el-table-column prop="roleName" label="角色名" width="70">
						</el-table-column>
						<el-table-column prop="roleType" label="类型" width="70">
						</el-table-column>
						<el-table-column prop="roleDesc" label="描述" show-overflow-tooltip>
						</el-table-column>
					</el-table>
					<div style="margin-top: 20px">
						<el-button @click="toggleSelection()">取消选择</el-button>
					</div>
					<!-- 对话框：新建角色 -->
					<el-dialog title="新建角色"  width="30%" :visible.sync="dialogAddRole">
					  <el-form label-width="80px">
					    <el-form-item label="角色名" >
					      <el-input></el-input>
					    </el-form-item>
					    <el-form-item label="类型" >
					      <el-input></el-input>
					    </el-form-item>
						<el-form-item label="描述" >
						  <el-input></el-input>
						</el-form-item>
					  </el-form>
					  <div slot="footer" class="dialog-footer">
					    <el-button @click="dialogAddRole = false">取 消</el-button>
					    <el-button type="primary" @click="dialogAddRole = false">确 定</el-button>
					  </div>
					</el-dialog>
					<!-- 对话框：修改角色 -->
					<el-dialog title="修改角色" width="30%" :visible.sync="dialogUpdateRole">
					  <el-form label-width="80px">
					    <el-form-item label="角色名" >
					      <el-input></el-input>
					    </el-form-item>
					    <el-form-item label="类型" >
					      <el-input></el-input>
					    </el-form-item>
						<el-form-item label="描述" >
						  <el-input></el-input>
						</el-form-item>
					  </el-form>
					  <div slot="footer" class="dialog-footer">
					    <el-button @click="dialogUpdateRole = false">取 消</el-button>
					    <el-button type="primary" @click="dialogUpdateRole = false">确 定</el-button>
					  </div>
					</el-dialog>
					<!-- 对话框：删除角色 -->
					<el-dialog title="删除角色" width="30%" :visible.sync="dialogDelRole">
					  <span>确认删除角色？</span>
					  <div slot="footer" class="dialog-footer">
					    <el-button @click="dialogDelRole = false">取 消</el-button>
					    <el-button type="primary" @click="dialogDelRole = false">确 定</el-button>
					  </div>
					</el-dialog>
					
				</div>
			</el-col>

			<el-col :md="18" :lg="18" :xl="18">
				<div class="limitsBox">
					<el-header class="bg-purple">权限设置</el-header>
					<div class="btns">
						<el-button type="primary"><i class="el-icon-folder-checked"></i> 保存</el-button>
						<el-button type="primary"><i class="el-icon-refresh-right"></i> 重置</el-button>
						<el-button type="primary"><i class="el-icon-circle-check"></i> 全选</el-button>
						<el-button type="danger"><i class="el-icon-remove-outline"></i> 全不选</el-button>
					</div>


					<!-- <treeTable :data="tree_table" :columns="columns" checkBox expandAll parentChild border :options="{key:'id', children:'Children'}" @treeTableSelect="getTreeTableSelect" /> -->
					<treeTable :data="data1" :columns="columns" border/>
					
				</div>
			</el-col>


		</el-container>

	</div>
</template>

<script>
	import treeTable from "./treeTable"
	export default {
		
		name: 'HelloWorld',
		data() {
			return {
				tableData: [{
					roleName: '投诉',
					roleType: '普通',
					roleDesc: '投诉一下'
				}, {
					roleName: '医助',
					roleType: '普通',
					roleDesc: '只可查看工单'
				}, {
					roleName: '质检',
					roleType: '普通',
					roleDesc: '质检描述。。'
				}, {
					roleName: '技术',
					roleType: '普通',
					roleDesc: '超管，哈哈哈哈'
				}],
				multipleSelection: [],
				dialogAddRole: false,
				dialogUpdateRole: false,
				dialogDelRole: false,
				
				columns: [
				        {
				          text: "事件",
				          value: "event",
				          width: 200
				        },
				        {
				          text: "ID",
				          value: "id"
				        }
				      ],
				      data1: [
				        {
				          id: 0,
				          event: "事件1",
				          timeLine: 50,
				          comment: "无"
				        },
				        {
				          id: 1,
				          event: "事件1",
				          timeLine: 100,
				          comment: "无",
				          child: [
				            {
				              id: 2,
				              event: "事件2",
				              timeLine: 10,
				              comment: "无"
				            },
				            {
				              id: 3,
				              event: "事件3",
				              timeLine: 90,
				              comment: "无",
				              child: [
				                {
				                  id: 4,
				                  event: "事件4",
				                  timeLine: 5,
				                  comment: "无"
				                },
				                {
				                  id: 5,
				                  event: "事件5",
				                  timeLine: 10,
				                  comment: "无"
				                },
				                {
				                  id: 6,
				                  event: "事件6",
				                  timeLine: 75,
				                  comment: "无",
				                  child: [
				                    {
				                      id: 7,
				                      event: "事件7",
				                      timeLine: 50,
				                      comment: "无",
				                      child: [
				                        {
				                          id: 71,
				                          event: "事件71",
				                          timeLine: 25,
				                          comment: "xx"
				                        },
				                        {
				                          id: 72,
				                          event: "事件72",
				                          timeLine: 5,
				                          comment: "xx"
				                        },
				                        {
				                          id: 73,
				                          event: "事件73",
				                          timeLine: 20,
				                          comment: "xx"
				                        }
				                      ]
				                    },
				                    {
				                      id: 8,
				                      event: "事件8",
				                      timeLine: 25,
				                      comment: "无"
				                    }
				                  ]
				                }
				              ]
				            }
				          ]
				        }
				      ]
				
				
				
				// columns: [
				//         {
				//           value: "id",
				//           text: "值",
				//         },
				//         {
				//           value: "name",
				//           text: "名字"
				//         }
				//       ],
				      // tree_table:[
				      //   {
				      //     id: "1",
				      //     name: "第1级",
				      //     Children: [
				      //      {
				      //        id: "1-1",
				      //        name: "第1-1级",
				      //        Children: [
				      //          /* {
				      //             id: "1-1-1",
				      //             name: "第1-1-1级",
				      //           }, */
				      //           {
				      //             id: "1-1-2",
				      //             name: "第1-1-2级",
				      //             Children: [
				      //               {
				      //             id: "1-1-2-1",
				      //             name: "第1-1-2-1级",
				      //           },
				      //           {
				      //             id: "1-1-2-2",
				      //             name: "第1-2-2-2级",
				      //           },
				      //             ]
				      //           },
				      //        ]
				      //      },
				      //      {
				      //        id: "1-2",
				      //        name: "第1-2级",
				      //        Children: [
				      //           {
				      //             id: "1-2-1",
				      //             name: "第1-2-1级",
				      //           },
				      //           {
				      //             id: "1-2-2",
				      //             name: "第1-2-2级",
				      //           },
				      //        ]
				      //      },
				      //     ]
				      //   }
				      // ]
				
			}
		},
		methods: {
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		},
		isSelect(){
			
		},
		

		//----------------------------
		
		getTreeTableSelect(val){
		  console.log(val);
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
		font-weight: bold;
	}

	.roleBox {
		width: 100%;
		height: 100%;
		/* border-right: 5px solid #999; */
	}

	.btns {
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		padding: 8px 0 8px 10px;
		border-bottom: 1px solid #e9e9e9;
	}

	.limitsBox .el-header {
		background: #d3dce6;
	}
	/* .el-form-item__label{width: 20%;} */




	.el-aside {
		color: #333;
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
</style>
