const initialBlog = [
    {
        id: 1,
        title: "Chào buổi sáng",
        content: "Hôm nay em mặc một chiếc váy rất đẹp",
        comments: [
            {
                id: 1,
                content: "đẹp lắm"
            },
            {
                id: 2,
                content: "good em"
            },
            {
                id: 3,
                content: "comment 3"
            },
            
        ]
    },
    {
        id: 2,
        title: "Chào buổi trưa",
        content: "Đi trên đôi giày mòn gót anh đã tăng",
        comments: [
            {
                id: 1,
                content: "anh rất thích"
            },
            {
                id: 2,
                content: "love u"
            },
            {
                id: 3,
                content: "comment 3"
            },
            
        ]
    }
]

module.exports = {
    initialBlog
}