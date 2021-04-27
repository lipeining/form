// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
const mockList = [
    {
        // url: `/api/corps/1/forms/1`,
        url: /\/api\/corps\/\d+\/forms\/\d+$/,
        method: 'get',
        func: () => {
            return {
                rule: [{
                    display: true,
                    field: "pkh5qnzs0u8b",
                    hidden: false,
                    info: "input user name",
                    props: {
                        autofocus: true,
                        clearable: true,
                        maxlength: 20,
                        minlength: 1,
                        showWordLimit: true,
                        type: "text",
                    },
                    title: "name",
                    type: "input",
                    value: undefined,
                    _fc_drag_tag: "input",
                }],
                options: {
                    form: {
                      labelPosition: "right",
                      size: "mini",
                      labelWidth: "125px",
                      hideRequiredAsterisk: false,
                      showMessage: true,
                      inlineMessage: false
                    }
                  },
            }
        },
    },
    {
        url: /\/api\/corps\/\d+\/forms\/\d+\/records$/,
        method: 'get',
        func: () => {
            return {
                rows: [
                    { pkh5qnzs0u8b: Random.cname(), recordId: 1 },
                    { pkh5qnzs0u8b: Random.cname(), recordId: 2 },
                    { pkh5qnzs0u8b: Random.cname(), recordId: 3 },
                    { pkh5qnzs0u8b: Random.cname(), recordId: 4 },
                    { pkh5qnzs0u8b: Random.cname(), recordId: 5 },
                ],
                cols: [
                    { prop: 'recordId', label: 'recordId' },
                    { prop: 'pkh5qnzs0u8b', label: 'name' },
                ],
                count: 3,
            }
        },
    },
    {
        // url: `/api/corps/1/forms/1/records/1`,
        url: /\/api\/corps\/\d+\/forms\/\d+\/records\/\d+$/,
        method: 'get',
        func: () => {
            return { pkh5qnzs0u8b: Random.cname(), recordId: 1 }
        },
    },
];
for (const mockItem of mockList) {
    console.log(mockItem);
    Mock.mock(mockItem.url, mockItem.method, mockItem.func);
}