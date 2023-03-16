import Link from 'next/link';
// import { MdOutlineArrowBack } from 'react-icons/Md';
// import { BiExit } from 'react-icons/Bi';
import { UilArrowLeft } from '@iconscout/react-unicons'
import { UilSignout } from '@iconscout/react-unicons'

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex space-x-1">
        <Link className="flex items-center m-2 py-1 px-3 rounded-md hover:bg-[rgba(134,144,160,0.4)] capitalize text-black font-normal" href="/"><UilArrowLeft size="1.4rem" /><span className="ml-1">Go back to website</span></Link>
        {/* <Link className="flex items-center m-2 py-1 px-3 rounded-md hover:bg-[rgba(134,144,160,0.4)] capitalize text-black font-normal" href="/"><MdOutlineArrowBack size="1.4rem" /><span className="ml-1">Go back to website</span></Link> */}
        <Link className="flex items-center m-2 py-1 px-3 rounded-md hover:bg-[rgba(134,144,160,0.4)] capitalize text-black font-normal" href="/api/exit-preview"><UilSignout size="1.4rem" /><span className="ml-1">Exit preview mode</span></Link>
        {/* <Link className="flex items-center m-2 py-1 px-3 rounded-md hover:bg-[rgba(134,144,160,0.4)] capitalize text-black font-normal" href="/api/exit-preview"><BiExit size="1.4rem" /><span className="ml-1">Exit preview mode</span></Link> */}
      </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar