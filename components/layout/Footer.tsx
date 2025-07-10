import { ChessIcon, GithubIcon, InstagramIcon, LinkedinIcon, SpotifyIcon, TwitterIcon } from '../icons'

export default function Footer() {
  return (
    <footer className='text-white p-5 w-full flex flex-col gap-3 items-center '>
      <div 
        className='md:fixed md:flex md:flex-row-reverse md:gap-3 md:justify-center md:items-center vertical-mail bottom-0 right-7  font-bold'>
        <a className="tracking-[0.2rem] md:tracking-[0.1rem] md:font-extrabold vertical-text md:text-red-dalowa hover:-translate-y-1 hover:text-white hover:transition duration-300" href="mailto:davidurbano.dev@gmail.com"> {`davidurbano.dev@gmail.com`} </a>
        <div className="md:w-[2px] md:h-[7.5rem] md:bg-red-dalowa"></div>
      </div>
      <div 
        className="md:fixed bottom-0 left-7 md:flex md:flex-col md:justify-center md:items-center"
        >
        <ul className='flex gap-3 md:gap-5 py-3 md:flex-col'>
          <li className=''>
            <a title='Twitter' href="https://x.com/da_lo_wa" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className='text-red-dalowa text-2xl hover:-translate-y-1 hover:text-white hover:transition duration-300' />
            </a>
          </li>
          <li className=''>
            <a title='Github' href="https://github.com/dalowa" target="_blank" rel="noopener noreferrer">
              <GithubIcon className='text-red-dalowa text-2xl hover:-translate-y-1 hover:text-white hover:transition duration-300' />
            </a>
          </li>
          <li className=''>
            <a title='Instagram' href="https://www.instagram.com/da_lo_wa" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className='text-red-dalowa text-2xl hover:-translate-y-1 hover:text-white hover:transition duration-300' />
            </a>
          </li>
          <li className=''>
            <a title='LinkedIn' href="https://www.linkedin.com/in/david-urbano-82a151223" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className='text-red-dalowa text-2xl hover:-translate-y-1 hover:text-white hover:transition duration-300' />
            </a>
          </li>
          <li className=''>
            <a title='Chess.com' href="https://www.chess.com/member/da_lo_wa" target="_blank" rel="noopener noreferrer">
              <ChessIcon className='text-red-dalowa text-2xl hover:-translate-y-1 hover:text-white hover:transition duration-300' />
            </a>
          </li>
          <li className=''>
            <a title='Spotify' href="https://open.spotify.com/user/31xxwpuprnospxn2kb6s2p34q6oq?si=0f917ea2af674f56" target="_blank" rel="noopener noreferrer">
              <SpotifyIcon className='text-red-dalowa text-2xl hover:-translate-y-1 hover:text-white hover:transition duration-300' />
            </a>
          </li>
        </ul>
        <div className="md:w-[2px] md:h-[7.5rem] md:bg-red-dalowa"></div>
      </div>
      {/* <blockquote 
        className="w-[80%] max-w-[300px] italic border-t-2 border-b-2 border-red-dalowa/50 py-2"
        >
        {`Before changing the world, first change yourself.`}
        <footer className="text-right text-red-dalowa font-extrabold not-italic">
          {`— Canserbero`}
        </footer>
      </blockquote> */}
      <p className="text-sm text-white text-center py-2">
        {`Built & designed by `}
        <strong className="text-red-dalowa font-extrabold">
        {`David Urbano`}
        </strong>
        {` - Lima, Perú`} 
      </p>
    </footer>
  )
}
