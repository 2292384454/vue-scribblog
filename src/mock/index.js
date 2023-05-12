import Mock from 'mockjs'

Mock.mock('/api/article/list', 'post', {
        "code": 0,
        "message": "success",
        "data": [
            {
                "id": 1,
                "title": "文章1",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 2,
                "title": "文章2",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 3,
                "title": "文章3",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 4,
                "title": "文章4",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 5,
                "title": "文章5",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 6,
                "title": "文章6",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 7,
                "title": "文章7",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 8,
                "title": "文章8",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            }
        ]
    }
)