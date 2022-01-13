import graphene
from graphene_django import DjangoObjectType
from fullstack.models import Post

# class PostType(DjangoObjectType):

#     class Meta:
#         model = Post

class PostType(graphene.ObjectType):
    id=graphene.ID()
    title=graphene.String()
    contents=graphene.String()
    image=graphene.String()
    writer=graphene.String()
    ctime=graphene.Int()
        

class PostListType(graphene.ObjectType):
    result = graphene.Boolean()
    objects = graphene.List(PostType)