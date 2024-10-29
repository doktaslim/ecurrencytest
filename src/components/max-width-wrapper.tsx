import { PropsWithChildren } from 'react'

export const MaxWidthWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className='px-4 md:px-2 max-w-7xl mx-auto h-full'>{children}</div>
  )
}
