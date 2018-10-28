import Main from '@/components/Main'
import Contract from '@/components/system/Contract'

const SystemRouter = [
    {
    path: '/autotest',
    name: '自动化测试',
    component: Main,
    iconCls: 'fa fa-address-card',
    children: [{
        path: '/autotest/casemanage',
        component: Contract,
        name: '测试用例管理'
    },{
        path: '/autotest/runtest',
        component: Contract,
        name: '任务管理'
    },{
        path: '/autotest/dbconfig',
        component: Contract,
        name: '数据库配置'
    }
    ]
}
]

export {
    SystemRouter
}
