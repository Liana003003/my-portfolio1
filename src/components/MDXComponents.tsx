import React from "react";

// Type MDX component props properly
type MDXProp<T extends HTMLElement> = React.PropsWithChildren<React.HTMLAttributes<T>>;

export const MDXComponents = {
  h1: (props: MDXProp<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold my-6" {...props} />
  ),
  h2: (props: MDXProp<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-semibold my-4" {...props} />
  ),
  h3: (props: MDXProp<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-semibold my-3" {...props} />
  ),
  p: (props: MDXProp<HTMLParagraphElement>) => (
    <p className="my-2 leading-relaxed" {...props} />
  ),
  code: (props: MDXProp<HTMLElement> & { className?: string }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-4">
      <code className={props.className}>{props.children}</code>
    </pre>
  ),
  blockquote: (props: MDXProp<HTMLDivElement>) => (
    <div
      className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-300 my-4"
      {...props}
    />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="rounded-lg my-4 max-w-full mx-auto" {...props} />
  ),
};