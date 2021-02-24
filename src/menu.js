let menuDir = {
    "version": "v1.0.1",
    "menu": [
        {
            path:"",
            name:"name",
            meta: {
                title:"系统设置",
                icon:"el-icon-setting",
            },
            children: [
                {
                    path:"",
                    name:"name",
                    meta: {
                        title:"账户中心",
                        icon:"el-icon-user",
                    },
                    children:[
                        {
                            path:"",
                            name:"name",
                            meta: {
                                title:"账户列表",
                                icon:"el-icon-user",
                            },
                        },
                        {
                            path:"",
                            name:"name",
                            meta: {
                                title:"黑名单",
                                icon:"el-icon-user",
                            },
                        },
                    ]
                },
                {
                    path:"",
                    name:"name",
                    meta: {
                        title:"微服务系统设置",
                        icon:"el-icon-setting",
                    },
                    children:[
                        {
                            path:"",
                            name:"name",
                            meta: {
                                title:"服务列表",
                                icon:"el-icon-user",
                            },
                        },
                        {
                            path:"",
                            name:"name",
                            meta: {
                                title:"应用列表",
                                icon:"el-icon-user",
                            },
                        },
                    ]
                },
            ]
        },
        {
            path:"",
            name:"name",
            meta: {
                title:"平台管理",
                icon:"el-icon-monitor",
            },
            children: [
                {
                    path:"",
                    name:"name",
                    meta: {
                        title:"平台概述",
                        icon:"el-icon-tickets",
                    }
                },
                {
                    path:"",
                    name:"name",
                    meta: {
                        title:"租户管理",
                        icon:"el-icon-office-building",
                    }
                },
                {
                    path:"",
                    name:"name",
                    meta: {
                        title:"成员管理",
                        icon:"el-icon-use",
                    }
                },
            ]
        }
    ]
}

export default menuDir
