import Link from "next/link"
import { MdOutlineArrowBack } from 'react-icons/Md';
import { BiExit } from 'react-icons/Bi';

const StudioNavbar = (props: any) => {
  return (
    <div className="bg-[#101112]">
      <div className="flex gap-2">
        <Link className="flex items-center mx-2 hover:text-[rgba(134,144,160,0.4)] font-semibold capitalize text-gray-300" href="/"><MdOutlineArrowBack size="1.4rem" /><span className="m-3">Go back to website</span></Link>
        <Link className="flex items-center mx-2 hover:text-[rgba(134,144,160,0.4)] font-semibold capitalize text-gray-300" href="/api/exit-preview"><BiExit size="1.4rem" /><span className="m-3">Exit preview mode</span></Link>
      </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar