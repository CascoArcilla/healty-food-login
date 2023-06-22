import { SiFacebook, SiGoogle } from 'react-icons/si';

export default function AlterLogin() {
  return (
    <div className="alter-login flex justify-around	 mb-6">
      <div
        className="face-login w-2/5 text-center text-white text-lg font-medium bg-slate-600 px-5 py-1 border-spacing-1 border-2 border-slate-700 rounded-lg shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-slate-700">
        <button className='h-12 w-28 flex justify-around items-center'><SiFacebook />Facebook</button>
      </div>
      <div
        className="google-login w-2/5 text-center text-white text-lg font-medium bg-slate-600 px-5 py-1 border-spacing-1 border-2 border-slate-700 rounded-lg shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-slate-700">
        <button className='h-12 w-28 flex justify-around items-center'><SiGoogle/>Google</button>
      </div>
    </div>
  )
}