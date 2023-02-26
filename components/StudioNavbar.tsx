import Link from "next/link"
import { MdOutlineArrowBack } from 'react-icons/Md';
import { BiExit } from 'react-icons/Bi';

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex gap-2">
        <Link className="flex items-center mx-2 hover:text-blue-500 font-semibold capitalize" href="/"><MdOutlineArrowBack size="1.4rem" /><span className="m-3">Go back to website</span></Link>
        <Link className="flex items-center mx-2 hover:text-blue-500 font-semibold capitalize" href="/api/exit-preview"><BiExit size="1.4rem" /><span className="m-3">Exit preview mode</span></Link>
      </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar