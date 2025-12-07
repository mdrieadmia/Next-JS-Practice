
const BlogDetailsPage = async ({params}:{params: Promise <{blogId: string}>}) => {

   const {blogId} = await params;

   console.log(blogId);

   return (
        <div>
            <h1>Blog Details for : {blogId} </h1>
        </div>
    );
};

export default BlogDetailsPage; 