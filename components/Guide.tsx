import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <>
      <section className="flexCenter flex-col">
        <div className="padding-container max-container w-full pb-24">
          {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
          <p className="uppercase regular-18 -mt-1 mb-3 text-red-50">
            We are here for you
          </p>
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">Only with the cuzradio application you will no longer get lost again, because we already support your business growth. Invite your friends, relatives and friends to have fun while growing your business.</p>
          </div>
        </div>
        <div className="padding-container max-container w-full pb-24">
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <ul className="mt-10 grid gap-20 grid-cols-2 md:grid-cols-4 lg:mg-20 lg:gap-20">
              <div>
                <Image
                  src="/cuzradio_media_files/2a.png"
                  alt="boat"
                  width={1440}
                  height={580}
                  className="w-full object-cover object-center"
                />
                <p className="regular-16 text-black-30 mt-5 xl:max-w-[520px]">POPULAR POP</p>
              </div>
              <div>
                <Image
                  src="/cuzradio_media_files/1.png"
                  alt="boat"
                  width={1440}
                  height={580}
                  className="w-full object-cover object-center"
                />
                <p className="regular-16 text-black-30 mt-5 xl:max-w-[520px]">AFROTONE</p>
              </div>
              <div>
                <Image
                  src="/cuzradio_media_files/3.png"
                  alt="boat"
                  width={1440}
                  height={580}
                  className="w-full object-cover object-center"
                />
                <p className="regular-16 text-black-30 mt-5 xl:max-w-[520px]">JAZZ MIX</p>
              </div>
              <div>
                <Image
                  src="/cuzradio_media_files/4.png"
                  alt="boat"
                  width={1440}
                  height={580}
                  className="w-full object-cover object-center"
                />
                <p className="regular-16 text-black-30 mt-5 xl:max-w-[520px]">AFRO BEAT</p>
              </div>
            </ul>
            <ul className="mt-10 grid gap-20 grid-cols-2 md:grid-cols-4 lg:mg-20 lg:gap-20">
              <div>
                <Image
                  src="/cuzradio_media_files/5a.png"
                  alt="boat"
                  width={1440}
                  height={580}
                  className="w-full object-cover object-center"
                />
                <p className="regular-16 text-black-30 mt-5 xl:max-w-[520px]">DJ POP MIX</p>
              </div>
              <div>
                <Image
                  src="/cuzradio_media_files/11.png"
                  alt="boat"
                  width={1440}
                  height={580}
                  className="w-full object-cover object-center"
                />
                <p className="regular-16 text-black-30 mt-5 xl:max-w-[520px]">VOICE COMMERCIAL</p>
              </div>
              <div>
                <Image
                  src="/cuzradio_media_files/13.png"
                  alt="boat"
                  width={1440}
                  height={580}
                  className="w-full object-cover object-center"
                />
                <p className="regular-16 text-black-30 mt-5 xl:max-w-[520px]">PARTY MIX</p>
              </div>
              <div>
                <Image
                  src="/cuzradio_media_files/14.png"
                  alt="boat"
                  width={1440}
                  height={580}
                  className="w-full object-cover object-center"
                />
                <p className="regular-16 text-black-30 mt-5 xl:max-w-[520px]">RND POP</p>
              </div>
            </ul>
          </div>
        </div>

        <div className="flexCenter max-container relative w-full">
          <Image
            src="/boat.png"
            alt="boat"
            width={1440}
            height={400}
            className="w-full object-cover object-center 2xl:rounded-5xl"
          />

          <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
            <Image
              src="/meter.svg"
              alt="meter"
              width={16}
              height={158}
              className="h-full w-auto"
            />
            <div className="flexBetween flex-col">
              <div className='flex w-full flex-col'>
                <div className="flexBetween w-full">
                  <p className="regular-16 text-gray-20">Destination</p>
                  <p className="bold-16 text-red-50">CUZRADIO</p>
                </div>
                <p className="bold-20 mt-2">Blooming Bussiness</p>
              </div>

              <div className='flex w-full flex-col'>
                <p className="regular-16 text-gray-20">Start track</p>
                <h4 className="bold-20 mt-2 whitespace-nowrap">Low Customer Turn out</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Guide