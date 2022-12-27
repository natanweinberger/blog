export const Post = ({children}) => (
  <div className="flex sm:p-6 justify-center">
  <article className="prose max-w-none w-full">
    {children}
  </article>
  </div>
)
