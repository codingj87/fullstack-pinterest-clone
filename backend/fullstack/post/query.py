from fullstack.models import Post
from fullstack.post.type import PostListType, PostType


data = [
        {
            'id': 1,
            'title': 'New Balance 992',
            'contents': 'New Balance 992',
            'image': 'https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTlfMjU0/MDAxNjE4Nzk5NTc3MjI4.3qMD-UiUTMIEWUysy2vZUTMKDDhUZtD7fRe8jQyiMA0g.-F6Pg6tMbdcKTPFcjXH0-mC03lTlmmeBJ7hqob6wpVkg.JPEG.jayuyu/%EB%89%B4%EB%B0%9C%EB%9E%80%EC%8A%A418.jpeg?type=w800',
            'writer': 'codingj87',
            'ctime': 1640236452,
        },
        {
            'id': 2,
            'title': 'PUMA suede',
            'contents': 'PUMA suede',
            'image': 'https://www.puma-catchup.com/wp-content/uploads/2018/12/G38-Bboy-Fabulous-750x417.jpg',
            'writer': 'codingj87',
            'ctime': 1640236452,
        },
        {
            'id': 3,
            'title': 'SALOMON : XT 6 ADV',
            'contents': 'SALOMON : XT 6 ADV',
            'image': 'https://images.onthelook.co.kr/pr/s64k1E8U2bZwQWYphHNcPw.jpeg',
            'writer': 'codingj87',
            'ctime': 1640236452,
        }
]

data = data + data

def get_post_list(parnet, info, **kwargs):

    result = 'success'
    # objects = Post.objects.all()

    objects = data

    return PostListType(result=result, objects=objects)

def get_post(parnet, info, **kwargs):

    result = 'success'

    objects = data

    post_id = kwargs.get('id')
    if post_id:
        post = list(filter(lambda post: post['id'] == post_id, objects))[0]
    else: 
        post = {
            'id': 0,
            'title': '',
            'contents': '',
            'image': '',
            'writer': '',
            'ctime': 0,
        }

    return post