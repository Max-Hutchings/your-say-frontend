import {IPost} from "../../../shared_components/posts/IPost.tsx";


export const PostProfileView: React.FC<IPost> = ({title, question, votesFor, votesAgainst}) => {



    return (
        // Card container
        <article
            /* Rounded white card with subtle ring; elevates on hover / focus */
            className="group relative flex flex-col justify-between rounded-2xl
                 bg-white p-5 shadow-sm ring-1 ring-gray-200 transition-all
                 hover:shadow-md hover:ring-primary-500 focus-within:shadow-md
                 focus-within:ring-primary-500"
        >
            {/* ---------- Header ---------- */}
            <header className="mb-3 space-y-2">
                {/* Title – bold, 2-line clamp to avoid overflow */}
                <h3 className="line-clamp-2 text-base font-semibold text-gray-900">
                    {title}
                </h3>

                {/* Question text – lighter and limited to 4 lines */}
                <p className="line-clamp-4 text-sm leading-relaxed text-gray-700">
                    {question}
                </p>
            </header>

            {/* ---------- Footer ---------- */}
            <footer
                /* Top border fades in on hover for a little polish */
                className="mt-4 flex items-center justify-between gap-2 border-t
                   border-transparent pt-3 transition-all
                   group-hover:border-gray-200"
            >
                {/* Up-votes badge */}
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
          {/*<ThumbsUp className="h-4 w-4" />*/}
                    {votesFor}
        </span>

                {/* Down-votes badge */}
                <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600">
          {/*<ThumbsDown className="h-4 w-4" />*/}
                    {votesAgainst}
        </span>
            </footer>

            {/* Extra: focus ring for keyboard users (works with TAB) */}
            <span className="absolute inset-0 rounded-2xl ring-primary-500 ring-offset-2 focus-visible:ring-2"></span>
        </article>
    );
};