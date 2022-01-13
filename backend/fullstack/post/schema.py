import graphene
from fullstack.post.type import PostListType, PostType
from fullstack.post.query import get_post_list, get_post


class Query(graphene.ObjectType):
    get_post_list = graphene.Field( 
        PostListType,
        title=graphene.String(description='제목'),
        writer=graphene.String(description='작성자'),
        resolver=get_post_list,
    )

    get_post = graphene.Field( 
        PostType,
        id=graphene.Int(description='post id'),
        resolver=get_post,
    )

